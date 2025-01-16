import { FaPlus } from "react-icons/fa";
import useMedicineCategory from "../../../../hooks/useMedicineCategory.jsx";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic.jsx";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ManageCategory = () => {
  const [medicineCategory, refetch] = useMedicineCategory();

  const { register, handleSubmit } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const handleAddCategory = () => {
    const modal = document.getElementById("my_modal_5");
    modal.showModal();
  };
  const onSubmit = (data) => {
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
        // console.log(photoURL);
        const categoryData = {
          name: data.name,
          image: photoURL,
        };

        axiosSecure.post("/category/add", categoryData).then((res) => {
          refetch();
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            const modal = document.getElementById("my_modal_5");
          modal.close();
          }
          
        });
      });
  };

  const handleDeleteMedicineCategory = (item) => {
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
        axiosSecure.delete(`/category/${item._id}`).then((res) => {
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

  return (
    <div>
      <div className="flex justify-between">
        <div></div>

        <button onClick={handleAddCategory} className="btn btn-primary btn-xs">
          <FaPlus /> Add Category
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Update</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {medicineCategory?.map((product, i) => (
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
                <td>{product.name}</td>

                <th>
                  <Link
                      to={`/dashboard/updateMedicineCategory/${product._id}`}

                    // onClick={() => handleUpdateMedicineCategory(product)}
                    className="btn btn-accent btn-xs"
                  >
                    Update
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteMedicineCategory(product)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
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
              <button className="btn btn-primary">Add Category</button>
            </div>
          </form>

          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageCategory;
