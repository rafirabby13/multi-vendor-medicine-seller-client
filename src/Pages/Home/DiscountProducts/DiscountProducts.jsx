import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const DiscountProducts = () => {
  const [discountProducts, setDiscountProducts] = useState([]);
  useEffect(() => {
    fetch("/discount.json")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setDiscountProducts(res);
      });
  }, []);
  return (
    <div className="py-12 ">
      {/* <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 ">
        Discounted Products
      </h1> */}
      <div className="container mx-auto px-6">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
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
                <div className="max-w-sm mx-auto rounded-xl  ">
                  <div className="relative">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-64 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-md">
                      {discountPercentage}% OFF
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                      {name}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-gray-400 line-through text-sm">
                        ${originalPrice}
                      </p>
                      <p className="text-green-600 font-extrabold text-xl">
                        ${discountPrice}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                      Save ${originalPrice - discountPrice}!
                    </p>
                    <button className="w-full mt-5 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm md:text-base font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 transition duration-300">
                      Buy Now
                    </button>
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
