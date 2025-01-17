import { FaEye } from "react-icons/fa";
import useSellerPaymentHistory from "../../../../hooks/useSellerPaymentHistory.jsx";

const SellerPaymentHistory = () => {
  const [paymentHistory, refetch] = useSellerPaymentHistory();
//   console.log(paymentHistory);
  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
       
            
           
            <th>TotalPrice</th>
          
            <th>TransactionId</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory?.map((product, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
             
              <td>$ {product.totalPrice}</td>
             
              <th>
                <button className="btn btn-ghost btn-xs">
                  {product.transactionId}
                </button>
              </th>
             
              <th>
                <button className="btn btn-ghost btn-xs">
                  {product.status}
                </button>
              </th>
              
              <th>
                <button
                
                  className="btn btn-ghost btn-xs"
                >
                  <FaEye />
                </button>
              </th>
            </tr>
          ))}
          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
};

export default SellerPaymentHistory;
