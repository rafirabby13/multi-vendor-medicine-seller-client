
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";
import useAxiosPublic from "../../../../hooks/useAxiosPublic.jsx";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useMedicineCategory from "../../../../hooks/useMedicineCategory.jsx";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateMedicineCategory = () => {
   const [medicineCategory, refetch] = useMedicineCategory()

  const { register, handleSubmit } = useForm();

  const { id } = useParams();
 

  const selectedCategory = medicineCategory.find(item=> item._id === id)
  
  
  


  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
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
          id: id
        };

        axiosSecure.post("/category/update", categoryData).then((res) => {
        //  console.log(res.data);
        
          if (res.data.modifiedCount >0 ) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
           
          }
        });
      });
  };
  return (
    <div>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            defaultValue={selectedCategory.name}
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
          <button className="btn btn-primary">Update Category</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMedicineCategory;
