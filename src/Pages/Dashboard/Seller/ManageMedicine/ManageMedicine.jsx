import React, { useEffect, useState } from "react";
import useMedicineBySeller from "../../../../hooks/useMedicineBySeller.jsx";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic.jsx";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth.jsx";
import useMedicineCategory from "../../../../hooks/useMedicineCategory.jsx";
import useMedicineCategoryPublic from "../../../../hooks/useMedicineCategoryPublic.jsx";
import useCompany from "../../../../hooks/useCompany.jsx";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ManageMedicine = () => {
  const { user } = useAuth();
  const [medicines, refetch] = useMedicineBySeller();
  const [medicineCategory] = useMedicineCategoryPublic()
  const [company] = useCompany()
// console.log(company);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  
  

  const onSubmit = (data) => {
    // console.log(data);
    const formData = { image: data.image[0] };
    // console.log(id);
    axiosPublic
      .post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const photoURL = res.data.data.display_url;
        data.image = photoURL
        console.log(data);
        axiosSecure.post('/shop/addItem', data)
        .then(res=>{
            refetch()
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            reset()
            document.getElementById("my_modal_5").close()
        })
      });
  };
  return (
    <div>
      <div className="flex justify-between">
        <div></div>
        <div>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Add Medicine
          </button>
        </div>
      </div>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {medicines?.map((product, i) => (
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
                  <button className="btn btn-ghost btn-xs text-start">
                    {product.company}
                  </button>
                </th>

                <th>
                  <button className="btn btn-ghost btn-xs">
                    <FaEye />
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>

      {/* modal starts */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* form starts */}

          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder=""
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Generic name</span>
              </label>
              <input
                {...register("generic", { required: true })}
                type="text"
                placeholder=""
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                {...register("shortDescription", { required: true })}
                type="text"
                placeholder=""
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Item Category</span>
              </label>
              <select className="input input-bordered" {...register('category')}>
                {
                    medicineCategory?.map((medicine,i)=><option  key={i} value={`${medicine.name}`}>{medicine.name}</option>)
                }
                    </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item Menufacturer</span>
              </label>
              <select className="input input-bordered" {...register('company')}>
                {
                    company?.map((company,i)=><option  key={i} value={`${company.name}`}>{company.name}</option>)
                }
                    </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item Mass Unit</span>
              </label>
              <input
                {...register("itemMassUnit", { required: true })}
                type="number"
                placeholder=""
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Discount</span>
              </label>
              <input
                {...register("discount", { required: true })}
                type="number"
                placeholder=""
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder=""
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">quantity</span>
              </label>
              <input
                {...register("quantity", { required: true })}
                type="number"
                placeholder=""
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                {...register("sellerEmail", { required: true })}
                type="text"
               value={user?.email}
                placeholder=""
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                placeholder="Your Photo "
                className="file-input w-full max-w-xs"
              />
            </div>
           

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Medicine</button>
            </div>
          </form>

          {/* form ends */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                X
              </button>
            </form>
          </div>
        </div>
      </dialog>

      {/* modal ends here */}
    </div>
  );
};

export default ManageMedicine;
