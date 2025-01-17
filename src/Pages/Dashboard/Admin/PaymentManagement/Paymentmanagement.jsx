import { FaEye } from "react-icons/fa";
import useTotalPayment from "../../../../hooks/useTotalPayment.jsx";

const Paymentmanagement = () => {
  const [totalPaid, refetch] = useTotalPayment();
  console.log(totalPaid);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>seller email</th>
              <th>buyer email</th>
              <th>price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {totalPaid?.map((product, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.price}
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.manufacturer}
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
    </div>
  );
};

export default Paymentmanagement;
