import { FaEye } from "react-icons/fa";
import useManageBanner from "../../../../hooks/useManageBanner.jsx";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";

const ManageBannerAd = () => {
  const [banner, refetch] = useManageBanner();
//   console.log(banner);
const axiosSecure = useAxiosSecure()

const handleAddToBanner=(item)=>{
   
    Swal.fire({
        title: `${item.isActive ? 'Want To Remove ?': 'Want To Add ?'}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.patch(`/banner/${item._id}`)
            .then(res=>{
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title:  `${item.isActive ? 'Removed ?': 'Added?'}`,
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
         
        }
      });
   
}
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Discount</th>
              <th>Seller Email</th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {banner?.map((product, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
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
                <td>{product.heading}</td>
                <td className="btn-sm bg-btns font-bold text-xl">{product.discount} %</td>

                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.sellerEmail}
                  </button>
                </th>
                <th >
                  {product?.isActive ? (
                    <button
                      onClick={() => handleAddToBanner(product)}
                      className="btn-sm bg-btns w-full"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToBanner(product)}
                      className=" btn-sm bg-btns w-full"
                    >
                      Add to Banner
                    </button>
                  )}
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

export default ManageBannerAd;
