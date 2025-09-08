import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import useCart from "../../hooks/useCart.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import Swal from "sweetalert2";
import moment from "moment";
import Button from "../../components/buttons/Button.jsx";

const Checkout = () => {
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const { user } = useAuth();

  const totalPrice = cart?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          // console.log(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //   console.log("[error]", error);
    } else {
      //   console.log("[PaymentMethod]", paymentMethod);
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      //   console.log("[error]", confirmError);
    } else {
      //   console.log(paymentIntent, confirmError);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);

        //   save the payment Info to DB
        const paymentInfo = {
          buyerEmail: user?.email,
          totalPrice: totalPrice,
          transactionId: paymentIntent.id,
          date: moment().utc().format("dddd, MMMM Do YYYY, h:mm:ss a"),
          cartId: cart?.map((item) => item._id),
          sellerEmail: cart?.map((item) => item.sellerEmail),
          status: "pending",
        };
        const res = await axiosSecure.post("/payment", paymentInfo);
        console.log(res.data);
        if (res.data.deletedResult.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment succeeded",
            text: `Your Payment id is ${paymentIntent.id}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div 
      className="min-h-screen py-20 px-4"
      style={{ 
        background: `linear-gradient(135deg, var(--color-second) 0%, var(--color-background) 60%, var(--color-second-dark) 100%)` 
      }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              background: `linear-gradient(135deg, var(--color-light), var(--color-light))`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: '#115852'
            }}
          >
            Secure Checkout
          </h1>
          <p 
            className="text-lg"
            style={{ color: 'color-mix(in srgb, var(--color-prime) 80%, transparent)' }}
          >
            Complete your order with our secure payment system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Order Summary */}
          <div 
            className="p-8 rounded-2xl shadow-xl backdrop-blur-sm border h-fit"
            style={{ 
              backgroundColor: 'color-mix(in srgb, var(--color-background) 95%, transparent)',
              borderColor: 'var(--color-second)'
            }}
          >
            <h2 
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ color: 'var(--color-second)' }}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-second)' }}
              >
                <svg className="w-5 h-5" style={{ color: 'var(--color-light)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              Order Summary
            </h2>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cart?.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--color-second)' }}>
                  <div 
                    className="w-16 h-16 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image || '/placeholder-medicine.jpg'})` }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold" style={{ color: 'var(--color-light)' }}>
                      {item.name || 'Medicine Item'}
                    </h3>
                    <p className="text-sm" style={{ color: 'color-mix(in srgb, var(--color-light) 70%, transparent)' }}>
                      Qty: {item.quantity} × ${item.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl" style={{ color: 'var(--color-light)' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div 
              className="border-t pt-6"
              style={{ borderTopColor: 'var(--color-second-dark)' }}
            >
              <div className="flex justify-between items-center mb-4">
                <span 
                  className="text-lg font-medium"
                  style={{ color: 'var(--color-prime)' }}
                >
                  Subtotal
                </span>
                <span 
                  className="text-lg font-semibold"
                  style={{ color: 'var(--color-text)' }}
                >
                  ${totalPrice?.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span 
                  className="text-lg font-medium"
                  style={{ color: 'var(--color-text)' }}
                >
                  Shipping
                </span>
                <span 
                  className="text-lg font-semibold"
                  style={{ color: 'var(--color-second)' }}
                >
                  Free
                </span>
              </div>
              <div 
                className="flex justify-between items-center text-xl font-bold pt-4 border-t"
                style={{ 
                  borderTopColor: 'var(--color-second-dark)',
                  color: 'var(--color-btn)'
                }}
              >
                <span>Total</span>
                <span>${totalPrice?.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div 
            className="p-8 rounded-2xl shadow-xl backdrop-blur-sm border"
            style={{ 
              backgroundColor: 'color-mix(in srgb, var(--color-background) 95%, transparent)',
              borderColor: 'var(--color-second)'
            }}
          >
            <h2 
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ color: 'var(--color-prime)' }}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-light)' }}
              >
                <svg className="w-5 h-5" style={{ color: 'var(--color-prime)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              Payment Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Customer Info */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: 'var(--color-prime)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl border-2"
                      style={{ 
                        borderColor: 'var(--color-second)',
                        backgroundColor: 'var(--color-light)',
                        color: 'var(--color-prime)'
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-semibold mb-2"
                      style={{ color: 'var(--color-prime)' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      value={user?.displayName || ''}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl border-2"
                      style={{ 
                        borderColor: 'var(--color-second)',
                        backgroundColor: 'var(--color-light)',
                        color: 'var(--color-prime)'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Card Element */}
              <div className="space-y-2">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-text)' }}
                >
                  Card Information
                </label>
                <div 
                  className="p-4 rounded-xl border-2 transition-all duration-300"
                  style={{ 
                    borderColor: 'var(--color-second)',
                    backgroundColor: 'var(--color-background)'
                  }}
                >
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "18px",
                          color: "#1a1a1a",
                          fontFamily: '"Inter", sans-serif',
                          fontSmoothing: "antialiased",
                          "::placeholder": {
                            color: "#9ca3af",
                          },
                        },
                        invalid: {
                          color: "#dc2626",
                          iconColor: "#dc2626",
                        },
                      },
                    }}
                  />
                </div>
              </div>

              {/* Security Notice */}
              <div 
                className="p-4 rounded-xl border-l-4 flex items-start gap-3"
                style={{ 
                  backgroundColor: 'color-mix(in srgb, var(--color-success-light) 30%, transparent)',
                  borderLeftColor: 'var(--color-success)'
                }}
              >
                <svg className="w-5 h-5 mt-0.5" style={{ color: 'var(--color-success)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-success)' }}
                  >
                    Your payment information is secure and encrypted
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!stripe || !clientSecret}
                className="w-full py-4 px-6 text-prime font-bold w-full mx-auto text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-prime bg-light/40 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                style={{ backgroundColor: 'var(--color-btn)' }}
                onMouseEnter={(e) => {
                  if (!e.target.disabled) {
                    e.target.style.backgroundColor = 'var(--color-btn-hover)';
                    e.target.style.transform = 'scale(1.05) translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.target.disabled) {
                    e.target.style.backgroundColor = 'var(--color-btn)';
                    e.target.style.transform = 'scale(1)';
                  }
                }}
                text={`Complete Payment • ${totalPrice?.toFixed(2)}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
               
              </Button>

              {/* Payment Methods */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <span 
                  className="text-xs"
                  style={{ color: 'color-mix(in srgb, var(--color-text) 60%, transparent)' }}
                >
                  Secured by
                </span>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">STRIPE</div>
                  <span 
                    className="text-xs"
                    style={{ color: 'color-mix(in srgb, var(--color-text) 60%, transparent)' }}
                  >
                    256-bit SSL encrypted
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;