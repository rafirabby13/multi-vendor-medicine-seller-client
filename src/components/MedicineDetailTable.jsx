/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";
import useCart from "../hooks/useCart.jsx";

const MedicineDetailTable = ({ products }) => {
  // console.log(products);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart()
  const handleDetail = (item) => {
    console.log(item);
    const {
      name,
      category,
      generic,
      manufacturer,
      therapeuticClass,
      indications,
      pharmacology,
      dosage,
      price,
      image,
    } = item;
    Swal.fire({
      title: "Product Details",
      html: `
        <div style="text-align: left;">
          <h3 style="color: #2c3e50;">${name}</h3>
          <img src="${image}" alt="${name}" style="width: 100%; max-width: 300px; height: auto; margin: 10px 0;">
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Generic Name:</strong> ${generic}</p>
          <p><strong>Manufacturer:</strong> ${manufacturer}</p>
          <p><strong>Therapeutic Class:</strong> ${therapeuticClass}</p>
          <p><strong>Indications:</strong> ${indications}</p>
          <p><strong>Pharmacology:</strong> ${pharmacology}</p>
          <p><strong>Dosage:</strong> ${dosage}</p>
          <p><strong>Price:</strong> $${price}</p>
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: 600,
      padding: "1rem",
      background: "#f9f9f9",
      customClass: {
        popup: "swal-custom-popup",
        title: "swal-custom-title",
        htmlContainer: "swal-custom-html",
      },
    });
  };

  const handleSelectAddToCart = (item) => {
    const postedData = {...item, email: user?.email}
    if (user && user.email) {
      
        axiosSecure.post("/cart", postedData).then((res) => {
          if (res.data.insertedId) {
            // console.log(res.data);
            Swal.fire({
              title: "Added to cart!",
            
              icon: "success",
            });
          }
        });
        refetch()
      
    } else {
      navigate("/login");
    }
  };

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
              <th>category</th>
              <th>price</th>
              <th>manufacturer</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
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
                    onClick={() => handleSelectAddToCart(product)}
                    className="btn btn-ghost btn-xs"
                  >
                    Select
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDetail(product)}
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

export default MedicineDetailTable;
