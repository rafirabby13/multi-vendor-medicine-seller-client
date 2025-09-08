import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic.jsx";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth.jsx";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AskBannerAd = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
    const formData = { image: data.image[0] };
    console.log(data);
    
    axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(res => {
      console.log(res.data.data.display_url);
      const bannerData = {
        heading: data.heading,
        description: data.description,
        discount: data.discount,
        image: res.data.data.display_url,
        isActive: false,
        sellerEmail: user?.email
      };
      
      axiosSecure.post('/banner', bannerData)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Banner request has sent",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    });
  };

  return (
    <div 
      className="min-h-screen p-6"
      // style={{ 
      //   background: `linear-gradient(135deg, var(--color-second) 0%, var(--color-prime) 60%, var(--color-second) 100%)` 
      // }}
    >
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div 
          className="text-center p-8 rounded-2xl backdrop-blur-sm border mb-8"
          style={{ 
            backgroundColor: 'color-mix(in srgb, var(--color-prime) 90%, transparent)',
            borderColor: 'var(--color-second)'
          }}
        >
          <h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              // background: `linear-gradient(135deg, var(--color-second), var(--color-accent))`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: '#c6efeb'
            }}
          >
            Request Banner Advertisement
          </h1>
          <p 
            className="text-lg"
            style={{ color: 'var(--color-light)' }}
          >
            Submit your banner advertisement request for admin approval
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto">
        <div 
          className="p-8 rounded-2xl shadow-xl backdrop-blur-sm border"
          style={{ 
            backgroundColor: 'color-mix(in srgb, var(--color-background) 95%, transparent)',
            borderColor: 'var(--color-second)'
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Banner Heading */}
            <div className="space-y-2">
              <label 
                className="block text-sm font-semibold"
                style={{ color: 'var(--color-font)' }}
              >
                Banner Heading *
              </label>
              <input
                {...register("heading", { required: true })}
                type="text"
                placeholder="Enter your banner heading..."
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

            {/* Banner Description */}
            <div className="space-y-2">
              <label 
                className="block text-sm font-semibold"
                style={{ color: 'var(--color-font)' }}
              >
                Banner Description *
              </label>
              <textarea
                {...register("description", { required: true })}
                rows="4"
                placeholder="Describe your banner advertisement..."
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none"
                style={{ 
                  borderColor: 'var(--color-second)',
                  backgroundColor: 'var(--color-background)',
                  color: 'var(--color-font)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-btn)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-second)'}
              />
            </div>

            {/* Discount */}
            <div className="space-y-2">
              <label 
                className="block text-sm font-semibold"
                style={{ color: 'var(--color-font)' }}
              >
                Discount Percentage *
              </label>
              <div className="relative">
                <input
                  {...register("discount", { required: true })}
                  type="number"
                  placeholder="Enter discount percentage..."
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300"
                  style={{ 
                    borderColor: 'var(--color-second)',
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-font)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-btn)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-second)'}
                />
                <span 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm font-medium"
                  style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                >
                  %
                </span>
              </div>
            </div>

            {/* Banner Image */}
            <div className="space-y-2">
              <label 
                className="block text-sm font-semibold"
                style={{ color: 'var(--color-font)' }}
              >
                Banner Image *
              </label>
              <div 
                className="border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 hover:border-solid"
                style={{ borderColor: 'var(--color-second)' }}
              >
                <div className="space-y-3">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-second)' }}
                  >
                    <svg className="w-8 h-8" style={{ color: 'var(--color-btn)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      className="inline-flex items-center px-6 py-3 text-white font-medium rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: 'var(--color-btn)' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-btn-hover)'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-btn)'}
                    >
                      Choose Image
                    </label>
                  </div>
                  <p 
                    className="text-sm"
                    style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                  >
                    Upload a high-quality image for your banner
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 px-6 text-prime font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-accent shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                style={{ backgroundColor: 'var(--color-btn)' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--color-btn-hover)';
                  e.target.style.transform = 'scale(1.05) translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--color-btn)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Submit Banner Request
              </button>
            </div>

            {/* Info Note */}
            <div 
              className="p-4 rounded-xl border-l-4"
              style={{ 
                backgroundColor: 'color-mix(in srgb, var(--color-warning-light) 50%, transparent)',
                borderLeftColor: 'var(--color-warning)'
              }}
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5" style={{ color: 'var(--color-warning)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-warning)' }}
                  >
                    Note: Your banner request will be reviewed by admin before going live.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskBannerAd;