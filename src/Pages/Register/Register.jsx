import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const { registerUser, updateUser } = useAuth();
  const { register, handleSubmit } = useForm();
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
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                  className="file-input w-full max-w-xs"
                />
              </div>
              <label className="label">
                <span>
                  Already have an account?
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login
                  </Link>
                </span>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
