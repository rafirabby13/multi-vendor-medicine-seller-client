import useCart from "../../hooks/useCart.jsx";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  //   console.log(totalPrice);

  const handleIncrement = (item) => {
    console.log(item._id);
    axiosSecure.patch(`/cart/inc/${item._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        console.log(res.data);
        refetch();
      }
    });
  };

  const handleDecrement = (item) => {
    console.log(item);
    if (item.quantity > 1) {
      axiosSecure.patch(`/cart/dec/${item._id}`).then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      });
    }
  };
  const handleDeleteItemFromCart = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleClearCart = () => {
    if (cart.length > 0) {
      Swal.fire({
        title: "Clear Cart?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const cartId =  cart?.map(item=> item._id)
          axiosSecure.post("/cart/clearCart", cartId).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between py-10">
        <h1 className="md:text-5xl">Total Items: {cart.length}</h1>
        <button onClick={handleClearCart} className="btn-xs md:btn bg-btns md:bg-btns text-background md:text-background">
          Clear Cart X
        </button>
      </div>
      <div className="overflow-x-auto py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th> */}
            </tr>
          </thead>
          <tbody>
            {cart?.map((product, i) => (
              <tr key={i}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.company}
                  </button>
                </th>
                <th>
                  <p>{product.name}</p>
                  <p className="text-xl">
                    $ {product.price * product.quantity}
                  </p>
                </th>
                <th>
                  <div className="flex items-center border border-green-500 rounded-md overflow-hidden">
                    {/* Decrement Button */}
                    <button
                      onClick={() => handleDecrement(product)}
                      className="w-full bg-green-500 text-white text-lg font-bold flex items-center justify-center"
                    >
                      -
                    </button>

                    {/* Quantity Display */}
                    <div className="w-24 h-8 flex items-center justify-center text-lg font-bold border-l border-r border-green-500">
                      {product.quantity}
                    </div>

                    {/* Increment Button */}
                    <button
                      onClick={() => handleIncrement(product)}
                      className="w-full bg-green-500 text-white text-lg font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteItemFromCart(product)}
                    className="btn btn-error text-white  text-background text-3xl"
                  >
                    <FaRegTrashAlt />
                  </button>
                </th>
                <th className=" text-white btn-xs "></th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between md:text-4xl">
          <h1>Total Items:</h1>
          <h1>{cart?.length}</h1>
        </div>
        <div className="divider divider-info">.......</div>

        <div className="flex items-center justify-between md:text-4xl">
          <h1>Total Amount:</h1>
          <h1>$ {totalPrice}</h1>
        </div>
       
        {cart.length > 0 && (
          <div className="flex justify-center w-full">
            <Link to="/payment" className="btn md:btn bg-btns md:bg-btns text-background  md:text-background">
              Payment
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
