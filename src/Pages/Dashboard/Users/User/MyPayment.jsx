import { FaEye } from "react-icons/fa";
import useUserPayments from "../../../../hooks/useUserPayments.jsx";

const MyPayment = () => {
  const [myPayment, refetch] = useUserPayments();
  console.log(myPayment);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myPayment?.map((product, i) => (
              <tr key={i}>
                <th>{i + 1}</th>

                <td>{product.transactionId}</td>
                <td className="btn bg-btns w-full">   {product.status}</td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPayment;
