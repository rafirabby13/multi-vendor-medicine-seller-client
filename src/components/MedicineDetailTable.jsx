/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaCartPlus, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";
import useCart from "../hooks/useCart.jsx";
import useUsersRole from "../hooks/useUsersRole.jsx";
import   DataTable,{defaultThemes } from "react-data-table-component";
import { useEffect, useState } from "react";

const MedicineDetailTable = ({ products }) => {
  
  // console.log(products);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const [role] = useUsersRole();
  const [records, setRecords] = useState(products);

  const handleDetail = (item) => {
    // console.log(item);
    const {
      name,
      category,
      generic,
      company,
      pharmacology,
      dosage,
      price,
      image,
    } = item;

    Swal.fire({
      title: "Product Details",
      html: `
      <div style="text-align: left;">  <h3 style="color: #2c3e50;">${category}</h3>  <img src=${image} alt="Ketorolac" style="width: 100%; max-width: 300px; height: auto; margin: 10px 0;">  <p><strong>Category:</strong> Pain Relief</p>  <p><strong>Generic Name:</strong> ${name}</p>  <p><strong>Manufacturer:</strong> ${company}</p>    <p><strong>Indications:</strong> ${generic}</p>  <p><strong>Pharmacology:</strong> ${pharmacology}</p>  ${dosage}</p>  <p><strong>Price:</strong> $90</p></div>

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
    const postedData = { ...item, email: user?.email };
    if (user && user?.email) {
      axiosSecure.post("/cart", postedData).then((res) => {
        if (res.data.insertedId) {
          // console.log(res.data);
          refetch();
          Swal.fire({
            title: "Added to cart!",

            icon: "success",
          });
        }
      });
    } else {
      navigate("/login");
    }
  };

  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          backgroundColor: "mintcream",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  const columns = [
    {
      name: "Images",
      selector: (row) => <img src={row.image} alt="" />,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Generic Name",
      selector: (row) => row.generic,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Total Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Select",
      selector: (row) => role === 'user' ?  (
        <button onClick={() => handleSelectAddToCart(row)}><span className="flex items-center gap-2 text-center">Select <FaCartPlus className="text-2xl"/></span></button>
      ):'',
    },
    {
      name: "Detail",
      selector: (row) => (
        <button onClick={() => handleDetail(row)}><span className="flex items-center gap-2 text-center">Detail <FaEye className="text-2xl"/></span></button>
      ),
    },
  ];
 
  useEffect(() => {
    const newdata = products.filter((row) => {
      return row.name.toLowerCase().includes(search);
    });
    setRecords(newdata);
    
  }, [products,search]);
  return (
    <div className="">
        <form className="relative my-5 md:mx-20">
        <input
          type="text"
          className="w-full h-14 px-6 py-3  pr-16 text-lg text-[#081d1d] bg-white rounded-full border-2 border-[#99bfe3] focus:border-[#38c8c5] focus:outline-none transition-colors duration-200 shadow-md placeholder:text-[#081d1d]/60"
          placeholder="Search medicines..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          type="submit"
          className="absolute right-0 top-0 h-full px-5 rounded-r-full bg-[#38c8c5] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#6f8bd7]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
      <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
      />
      {/* <div className="overflow-x-auto">
        <table className="table table-zebra">
          
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Generic
               Name</th>
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
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.generic}</td>
                <td>{product.category}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.price}
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.company}
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.sellerEmail}
                  </button>
                </th>
                {role === "admin" || role === "seller" ? (
                  ""
                ) : (
                  <th>
                    <button
                      onClick={() => handleSelectAddToCart(product)}
                      className="btn btn-ghost btn-xs"
                    >
                      Select
                    </button>
                  </th>
                )}
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
            
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default MedicineDetailTable;
