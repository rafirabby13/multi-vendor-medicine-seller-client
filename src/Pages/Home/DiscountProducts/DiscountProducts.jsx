import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "../../../components/Header.jsx";
const DiscountProducts = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [discountProducts, setDiscountProducts] = useState([]);
  useEffect(() => {
    fetch("/discount.json")
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        setDiscountProducts(res);
      });
  }, []);
  return (
    <div className=" ">
      {/* <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 ">
        Discounted Products
      </h1> */}
      <Header
        title={"Discounted Products"}
        description={"Grab These Exiting Product with reasonable discount"}
      ></Header>
      <div className=" py-10">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {discountProducts?.map(
            (
              { name, image, originalPrice, discountPrice, discountPercentage },
              index
            ) => (
              <SwiperSlide key={index}>
                <div className="max-w-sm mx-auto">
                  <div
                    className={`relative bg-white rounded-2xl overflow-hidden shadow-xl border-b-[6px] border-[#3ECCC3] transition-all duration-500 ${
                      isHovered ? "transform -translate-y-2 shadow-2xl" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                   

                    {/* Discount badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-third text-white font-bold py-2 px-3 rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-lg">{discountPercentage}%</span>
                        <span className="ml-1 text-xs font-light">OFF</span>
                      </div>
                    </div>

                    {/* Image container with subtle reflection effect */}
                    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 pt-8 pb-6 px-6">
                      <div
                        className={`relative transition-transform duration-500 ${
                          isHovered ? "scale-110" : "scale-100"
                        }`}
                      >
                        <img
                          src={image}
                          alt={name}
                          className="mx-auto h-52 object-contain z-10 relative"
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-black/10 rounded-full blur-md"></div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="p-6">
                      {/* Product name */}
                      <h3 className="text-xl font-bold text-[#081d1d] mb-4 text-center line-clamp-2">
                        {name}
                      </h3>

                      {/* Price section */}
                      <div className="flex items-center justify-between mb-4 px-2">
                        <div className="flex flex-col items-start">
                          <span className="text-xs uppercase">
                            Regular Price
                          </span>
                          <span className="line-through  text-sm">
                            ${originalPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs uppercase">
                            Sale Price
                          </span>
                          <span className="text-2xl font-bold text-third">
                            ${discountPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Savings badge */}
                      <div className="flex justify-center mb-5">
                        <div className="bg-[#C43A6C] text-white text-sm font-medium py-2 px-4 rounded-full shadow inline-flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Save ${(originalPrice - discountPrice).toFixed(2)}!
                        </div>
                      </div>

                      {/* Button */}
                      <button className="w-full py-3 px-4  bg-[#3ECCC3]  text-white font-medium text-sm uppercase tracking-wider rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#3ECCC3] focus:ring-opacity-50">
                        Add to Cart
                      </button>

                     
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountProducts;
