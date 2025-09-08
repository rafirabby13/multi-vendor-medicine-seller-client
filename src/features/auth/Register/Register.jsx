/* eslint-disable no-unused-vars */
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth.jsx";
import { Link, useNavigate } from "react-router-dom";
import a1 from "../../../assets/Animation - 1735202464545.json";
import Lottie from "lottie-react";
import { FaGoogle, FaEye, FaEyeSlash, FaUser, FaUserTie } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic.jsx";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { registerUser, updateUser, googleLogin, setUser, logoutUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
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
                  // console.log("updated");
                  const userData = {
                    name: data.name,
                    email: data.email,
                    image: photoURL,
                    role: data.role,
                  };
                  axiosPublic.post("/users", userData).then((res) => {
                    // console.log(res.data);
                  });
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  logoutUser()
                    .then(() => {
                      navigate('/login');
                    })
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
        }
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
        axiosPublic.post("/users", userData).then((res) => {
          // console.log(res.data);
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

  return (
    <div>
      <Helmet>
        <title>Register | Medimart</title>
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
                      background: `linear-gradient(135deg, var(--color-light), var(--color-light))`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: ' var(--color-prime)'
                    }}
                  >
                    Join MediMart
                  </h2>
                  <p 
                    className="text-lg xl:text-xl"
                    style={{ color: 'color-mix(in srgb, var(--color-font) 80%, transparent)' }}
                  >
                    Create your account to access quality healthcare products
                  </p>
                </div>
                
                <Lottie
                  className="h-[300px] xl:h-[500px] mx-auto"
                  animationData={a1}
                  loop={true}
                />
                
                {/* Benefits */}
                <div className="space-y-4">
                  {[
                    { icon: '🏥', text: 'Quality Assured Products' },
                    { icon: '🚚', text: 'Fast & Secure Delivery' },
                    { icon: '💊', text: 'Wide Range of Medicines' },
                    { icon: '🔒', text: 'Secure & Private' }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-3">
                      <span className="text-2xl">{benefit.icon}</span>
                      <span 
                        className="font-medium"
                        style={{ color: 'var(--color-font)' }}
                      >
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Form Section */}
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
                    Create Account
                  </h1>
                  <div 
                    className="w-16 h-1 mx-auto rounded-full"
                    style={{ backgroundColor: 'var(--color-success)' }}
                  />
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label 
                      className="block text-sm font-semibold"
                      style={{ color: 'var(--color-font)' }}
                    >
                      Full Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Enter your full name..."
                      className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300"
                      style={{ 
                        borderColor: 'var(--color-second)',
                        backgroundColor: 'var(--color-background)',
                        color: 'var(--color-font)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-success)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-second)'}
                    />
                  </div>

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
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-success)'}
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
                        placeholder="Create a strong password..."
                        className="w-full px-4 py-3 pr-12 border-2 rounded-xl focus:outline-none transition-all duration-300"
                        style={{ 
                          borderColor: 'var(--color-second)',
                          backgroundColor: 'var(--color-background)',
                          color: 'var(--color-font)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-success)'}
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

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <label 
                      className="block text-sm font-semibold"
                      style={{ color: 'var(--color-font)' }}
                    >
                      Account Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="relative">
                        <input 
                          {...register('role')} 
                          type="radio" 
                          value="user" 
                          className="sr-only peer" 
                          defaultChecked
                        />
                        <div 
                          className="p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 peer-checked:border-color-success peer-checked:bg-color-success-light flex items-center justify-center gap-2"
                          style={{ 
                            borderColor: 'var(--color-second)',
                            backgroundColor: 'var(--color-background)'
                          }}
                        >
                          <FaUser className="text-lg" style={{ color: 'var(--color-success)' }} />
                          <span 
                            className="font-medium text-sm"
                            style={{ color: 'var(--color-font)' }}
                          >
                            User
                          </span>
                        </div>
                      </label>
                      <label className="relative">
                        <input 
                          {...register('role')} 
                          type="radio" 
                          value="seller" 
                          className="sr-only peer" 
                        />
                        <div 
                          className="p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 peer-checked:border-color-btn peer-checked:bg-color-second flex items-center justify-center gap-2"
                          style={{ 
                            borderColor: 'var(--color-second)',
                            backgroundColor: 'var(--color-background)'
                          }}
                        >
                          <FaUserTie className="text-lg" style={{ color: 'var(--color-btn)' }} />
                          <span 
                            className="font-medium text-sm"
                            style={{ color: 'var(--color-font)' }}
                          >
                            Seller
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="space-y-2">
                    <label 
                      className="block text-sm font-semibold"
                      style={{ color: 'var(--color-font)' }}
                    >
                      Profile Picture
                    </label>
                    <div 
                      className="border-2 border-dashed rounded-xl p-4 text-center transition-all duration-300 hover:border-solid"
                      style={{ borderColor: 'var(--color-second)' }}
                    >
                      <div className="space-y-2">
                        <div 
                          className="w-12 h-12 mx-auto rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--color-second)' }}
                        >
                          <svg className="w-6 h-6" style={{ color: 'var(--color-success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <input
                            {...register("image", { required: true })}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="image-upload"
                          />
                          <label 
                            htmlFor="image-upload"
                            className="inline-block px-4 py-2 text-white font-medium text-sm rounded-lg cursor-pointer transition-all duration-300 hover:scale-105"
                            style={{ backgroundColor: 'var(--color-success)' }}
                          >
                            Choose Photo
                          </label>
                        </div>
                        <p 
                          className="text-xs"
                          style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                        >
                          Upload your profile picture
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: 'var(--color-success)' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--color-btn)';
                      e.target.style.transform = 'scale(1.05) translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'var(--color-success)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Create Account
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

                {/* Google Register */}
                <button
                  onClick={handleGoogleLogin}
                  className="w-full py-3 px-6 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  style={{ 
                    borderColor: 'var(--color-success)',
                    color: 'var(--color-success)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--color-success)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'var(--color-success)';
                  }}
                >
                  <FaGoogle className="text-lg" />
                  Sign Up With Google
                </button>

                {/* Login Link */}
                <div className="text-center mt-6">
                  <span 
                    className="text-sm"
                    style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                  >
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-semibold hover:underline transition-all duration-300"
                      style={{ color: 'var(--color-success)' }}
                    >
                      Sign In
                    </Link>
                  </span>
                </div>
              </div>

              {/* Terms Notice */}
              <div 
                className="mt-6 p-4 rounded-xl border-l-4 flex items-start gap-3"
                style={{ 
                  backgroundColor: 'color-mix(in srgb, var(--color-warning-light) 30%, transparent)',
                  borderLeftColor: 'var(--color-warning)'
                }}
              >
                <svg className="w-5 h-5 mt-0.5" style={{ color: 'var(--color-warning)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--color-warning)' }}
                  >
                    By creating an account, you agree to our Terms of Service and Privacy Policy
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

export default Register;