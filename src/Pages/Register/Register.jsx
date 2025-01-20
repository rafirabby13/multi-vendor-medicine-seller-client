/* eslint-disable no-unused-vars */
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth.jsx";
import { Link, useNavigate } from "react-router-dom";
import a1 from "../../assets/Animation - 1735202464545.json";
import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const { registerUser, updateUser, googleLogin, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // console.log(data);
    const formData = { image: data.image[0] };

    axios
      .post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.success) {
          // console.log(res.data.data.display_url);
          const photoURL = res.data.data.display_url;

          registerUser(data.email, data.password)
            .then((res) => {
              // console.log(data.name,photoURL);
              updateUser(data.name, photoURL)
                .then(() => {
                  console.log("updated");
                  navigate(location?.state ? location.state : "/");
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        // toast.success("Login Successfully");
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // toast.error(err.message);
      });
  };

  return (
    <div>
       <Helmet>
            <title>Register | Medimart</title>
        </Helmet>
      <div className="hero bg-btns py-20 md:mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              className="h-[200px] md:h-[600px]"
              animationData={a1}
              loop={true}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
          <h1 className="text-3xl font-bold text-center underline">Register</h1>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true, minLength: 6 })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Image</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  placeholder="Your Photo "
                  className="file-input w-full max-w-xs file-input-accent "
                />
              </div>
              <label className="label">
                <span className="text-lg ">
                  Already have an account?
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover text-btns underline ml-2 text-lg "
                  >
                    Login
                  </Link>
                </span>
              </label>
              <div className="form-control mt-6">
                <button className="btn bg-btns text-background">
                  Register
                </button>
              </div>
            </form>
            <div className="divider divider-accent">OR</div>
            <div className="text-center w-full">
              <button
                className="btn btn-outline border-btns text-btns"
                onClick={handleGoogleLogin}
              >
                <FaGoogle /> Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
