import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import useCart from "../../hooks/useCart.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import Swal from "sweetalert2";
import moment from "moment";

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
        const res = await axiosSecure.post("/payments", paymentInfo);
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
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-4 btn-primary "
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;
