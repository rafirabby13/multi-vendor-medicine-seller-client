/* eslint-disable no-unused-vars */
import useCart from "../../../../hooks/useCart.jsx";
import useTotalPayment from "../../../../hooks/useTotalPayment.jsx";

const AdminHome = () => {
  const [totalPaid, refetch] = useTotalPayment();

  const [cart] = useCart();
  // console.log(cart);
  // console.log(totalPaid);
  
  const paid = totalPaid.filter(item=> item.status === 'Paid')
  const pending = totalPaid.filter(item=> item.status === 'pending')
  // TODO CART--> Pending total
  
    const pendingTotal = pending.reduce(
      (total, item) => total + item.totalPrice ,
      0
    );
    const paidtotalTotal = paid.reduce(
      (total, item) => total + (item.totalPrice),
      0
    );
    // console.log(paid);
  
  const paidTotal = totalPaid?.reduce((total, item) => total + item.price, 0);
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
  <h1 className="text-xl font-bold text-center mb-6">Dashboard Summary</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Total Revenue */}
    <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold flex items-center">
        <i className="fas fa-dollar-sign mr-2"></i> Total Revenue
      </h2>
      <p className="text-2xl font-bold">$ {paidtotalTotal}</p>
    </div>

    {/* Total Paid */}
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

  );
};

export default AdminHome;
