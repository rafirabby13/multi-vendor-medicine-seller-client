import useSellerPaymentHistory from "../../../../hooks/useSellerPaymentHistory.jsx";
import useTotalPayment from "../../../../hooks/useTotalPayment.jsx";

const SellerHome = () => {
  const [paymentHistory, refetch] = useSellerPaymentHistory();
  console.log(paymentHistory);
  const pendingTotal = paymentHistory.reduce(
    (total, item) => total + item.totalPrice ,
    0
  );
  const paidtotalTotal = paymentHistory.reduce(
    (total, item) => total + (item.totalPrice),
    0
  );

  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-center mb-6">
          Dashboard Summary
        </h1>
        <div className="grid grid-cols-2 gap-4">
         

          
          <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold flex items-center">
              <i className="fas fa-check-circle mr-2"></i> Total Paid
            </h2>
            <p className="text-2xl font-bold">$ {paidtotalTotal}</p>
          </div>

          {/* Total Pending */}
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold flex items-center">
              <i className="fas fa-clock mr-2"></i> Total Pending
            </h2>
            <p className="text-2xl font-bold">$ {pendingTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
