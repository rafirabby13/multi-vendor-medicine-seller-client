import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic.jsx";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth.jsx";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AskBannerAd = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
      const formData = { image: data.image[0] };
      console.log(data)
      axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res=>{
        console.log(res.data.data.display_url);
        const bannerData={
            heading: data.heading,
            description: data.description,
            discount: data.discount,
            image: res.data.data.display_url,
            isActive: false,
            sellerEmail: user?.email
        }
        axiosSecure.post('/banner', bannerData)
        .then(res=>{
            console.log(res.data);
            if (res.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Banner request has sent",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
      })
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      
        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <label className="form-control w-full max-w-2xl">
          <div className="label">
            <span className="label-text">Banner Heading</span>
          </div>
          <input
            {...register("heading", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-2xl"
          />
        </label>
        <label className="form-control w-full max-w-2xl">
          <div className="label">
            <span className="label-text">Banner Description</span>
          </div>
          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-2xl"
          />
        </label>
        <label className="form-control w-full max-w-2xl">
          <div className="label">
            <span className="label-text">Discount</span>
          </div>
          <input
            {...register("discount", { required: true })}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-2xl"
          />
        </label>
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Image</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  placeholder="Your Photo "
                  className="file-input w-full max-w-xs"
                />
              </div>
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AskBannerAd;
