/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import Lottie from "lottie-react";
import a1 from "../../assets/Animation - 1735202385033.json";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";
const Login = () => {
  const { loginUser, setUser, googleLogin } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        setUser(res.user);
        // console.log(res.user);
        // console.log("Login Successfully");

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // toast.error(err.message);
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
            <title>Login | Medimart</title>
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
          <h1 className="text-3xl font-bold text-center underline">Login</h1>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
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
                

                <label className="label">
                  <span className="text-xl">
                    Don't have account?
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover text-btns underline ml-2 text-lg"
                    >
                      Register
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-btns text-background">Login</button>
              </div>
            </form>
            <div className="divider divider-accent">OR</div>
            <div className="text-center w-full">

              <button
                className="btn btn-outline border-btns text-btns"
                onClick={handleGoogleLogin}
              >
              <FaGoogle/>  Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
