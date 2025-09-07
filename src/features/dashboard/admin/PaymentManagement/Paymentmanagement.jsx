
import useTotalPayment from "../../../../hooks/useTotalPayment.jsx";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";

const Paymentmanagement = () => {
  const [totalPaid, refetch] = useTotalPayment();

  const axiosSecure = useAxiosSecure();
  const handleAcceptPayment = (item) => {


    Swal.fire({
      title: "Accept the payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes....",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/accept-payment/${item._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment Accepted",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Id</th>
              <th>seller email</th>
              <th>Status</th>
              <th>buyer email</th>

              <th>price</th>

              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {totalPaid?.map((product, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{product.transactionId}</td>

                <td>{product.sellerEmail.join(", ")}</td>
                <th>
                  <button className="btn bg-second w-full ">
                    {product.status}
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.buyerEmail}
                  </button>
                </th>
                <th>
                  <button className="btn bg-second w-full">
                    {product.totalPrice}
                  </button>
                </th>

                <th>
                  <button
                    onClick={() => handleAcceptPayment(product)}
                    disabled={product.status !== "pending"}
                    className="btn bg-second w-full"
                  >
                    Accept Payment
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Paymentmanagement;
