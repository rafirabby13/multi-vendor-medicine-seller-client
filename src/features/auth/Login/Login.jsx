/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.jsx";
import Lottie from "lottie-react";
import a1 from "../../../assets/Animation - 1735202385033.json";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic.jsx";
import { useState } from "react";

const Login = () => {
  const { loginUser, setUser, googleLogin } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        setUser(res.user);
        // console.log(res.user);
        // console.log("Login Successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 1500
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        // toast.success("Login Successfully");
        setUser(res.user);
        const userData = {
          name: res.user.displayName,
          email: res.user.email,
          image: res.user.photoURL,
          role: "user",
        };
        // eslint-disable-next-line no-unused-vars
        axiosPublic.post("/users", userData).then((res) => {
          // console.log(res.data);
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // toast.error(err.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login | Medimart</title>
      </Helmet>
      
      <div 
        className="min-h-screen py-20 px-4 flex items-center justify-center"
        style={{ 
          background: `linear-gradient(135deg, var(--color-second) 0%, var(--color-background) 50%, var(--color-second-dark) 100%)` 
        }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Animation Section */}
            <div className="hidden lg:block">
              <div className="text-center space-y-6">
                <div>
                  <h2 
                    className="text-4xl xl:text-5xl font-black mb-4"
                    style={{ 
                      background: `linear-gradient(135deg, var(--color-prime), var(--color-prime))`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    Welcome Back
                  </h2>
                  <p 
                    className="text-lg xl:text-xl"
                    style={{ color: 'color-mix(in srgb, var(--color-font) 80%, transparent)' }}
                  >
                    Sign in to access your healthcare dashboard
                  </p>
                </div>
                
                <Lottie
                  className="h-[300px] xl:h-[500px] mx-auto"
                  animationData={a1}
                  loop={true}
                />
                
                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold"
                      style={{ color: 'var(--color-success)' }}
                    >
                      50K+
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                    >
                      Trusted Users
                    </div>
                  </div>
                  <div 
                    className="w-px h-12"
                    style={{ backgroundColor: 'var(--color-second-dark)' }}
                  />
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold"
                      style={{ color: 'var(--color-btn)' }}
                    >
                      24/7
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                    >
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Form Section */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div 
                className="p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-sm border"
                style={{ 
                  backgroundColor: 'color-mix(in srgb, var(--color-background) 95%, transparent)',
                  borderColor: 'var(--color-second)'
                }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 
                    className="text-3xl font-bold mb-2"
                    style={{ color: 'var(--color-font)' }}
                  >
                    Sign In
                  </h1>
                  <div 
                    className="w-16 h-1 mx-auto rounded-full"
                    style={{ backgroundColor: 'var(--color-btn)' }}
                  />
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label 
                      className="block text-sm font-semibold"
                      style={{ color: 'var(--color-font)' }}
                    >
                      Email Address
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Enter your email..."
                      className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300"
                      style={{ 
                        borderColor: 'var(--color-second)',
                        backgroundColor: 'var(--color-background)',
                        color: 'var(--color-font)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-btn)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-second)'}
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label 
                      className="block text-sm font-semibold"
                      style={{ color: 'var(--color-font)' }}
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        {...register("password", { required: true, minLength: 6 })}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password..."
                        className="w-full px-4 py-3 pr-12 border-2 rounded-xl focus:outline-none transition-all duration-300"
                        style={{ 
                          borderColor: 'var(--color-second)',
                          backgroundColor: 'var(--color-background)',
                          color: 'var(--color-font)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-btn)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-second)'}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300"
                        style={{ color: 'color-mix(in srgb, var(--color-font) 60%, transparent)' }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-light font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: 'var(--color-prime)' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--color-prime)';
                      e.target.style.transform = 'scale(1.05) translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'var(--color-prime)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Sign In
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div 
                    className="flex-1 h-px"
                    style={{ backgroundColor: 'var(--color-second-dark)' }}
                  />
                  <span 
                    className="px-4 text-sm font-medium"
                    style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                  >
                    OR
                  </span>
                  <div 
                    className="flex-1 h-px"
                    style={{ backgroundColor: 'var(--color-second-dark)' }}
                  />
                </div>

                {/* Google Login */}
                <button
                  onClick={handleGoogleLogin}
                  className="w-full py-3 px-6 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  style={{ 
                    borderColor: 'var(--color-prime)',
                    color: 'var(--color-prime)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--color-btn)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'var(--color-btn)';
                  }}
                >
                  <FaGoogle className="text-lg" />
                  Sign In With Google
                </button>

                {/* Register Link */}
                <div className="text-center mt-6">
                  <span 
                    className="text-sm"
                    style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                  >
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="font-semibold hover:underline transition-all duration-300"
                      style={{ color: 'var(--color-btn)' }}
                    >
                      Create Account
                    </Link>
                  </span>
                </div>
              </div>

              {/* Security Notice */}
              <div 
                className="mt-6 p-4 rounded-xl border-l-4 flex items-start gap-3"
                style={{ 
                  backgroundColor: 'color-mix(in srgb, var(--color-success-light) 30%, transparent)',
                  borderLeftColor: 'var(--color-success)'
                }}
              >
                <svg className="w-5 h-5 mt-0.5" style={{ color: 'var(--color-success)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-success)' }}
                  >
                    Your data is protected with industry-standard encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;