import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "../../../components/Header.jsx";
const DiscountProducts = () => {
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
                <div className="mx-auto  rounded-xl shadow-2xl border-b-4 border-btns">
                  {/* Image Section */}
                  <div className="relative rounded-t-xl overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="w-fit mx-auto h-24 md:h-64  transition-transform duration-300 hover:scale-105"
                    />
                    <span
                      className="absolute top-3 left-3 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-md"
                      style={{ background: "#38c8c5" }}
                    >
                      {discountPercentage}% OFF
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 text-center md:w-1/3 mx-auto">
                    <h3
                      className="text-lg md:text-3xl font-bold"
                      style={{ color: "#081d1d" }}
                    >
                      {name}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <p className=" line-through text-sm">${originalPrice}</p>
                      <p
                        className="font-extrabold text-2xl"
                        style={{ color: "#38c8c5" }}
                      >
                        ${discountPrice}
                      </p>
                    </div>
                    <p className="text-sm bg-btns  btn text-background  md:text-2xl mt-2">
                      Save ${originalPrice - discountPrice}!
                    </p>
                    {/* <button
                      className="w-full mt-5 py-3 rounded-lg shadow-md font-semibold text-sm md:text-base transition-transform duration-300 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(to right, #38c8c5, #99bfe3)",
                        color: "#f9fdfd",
                      }}
                    >
                      Buy Now
                    </button> */}
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
