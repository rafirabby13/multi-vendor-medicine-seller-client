/* eslint-disable no-unused-vars */
import useCart from "../../../../hooks/useCart.jsx";
import useTotalPayment from "../../../../hooks/useTotalPayment.jsx";

const AdminHome = () => {
  const [totalPaid, refetch] = useTotalPayment();

  const [cart] = useCart();
  // console.log(cart);
  


  // TODO CART--> Pending total

  //   const pendingTotal = cart.reduce(
  //   (total, item) => total + (item.price * item.quantity),
  //   0
  // );
  
  const paidTotal = totalPaid?.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <h1>Total Revenue : $ {paidTotal}</h1>
      <h1>Total Paid : $ {paidTotal}</h1>
      {/* <h1>Total Pending : ${pendingTotal}</h1> */}
    </div>
  );
};

export default AdminHome;
