import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const DiscountProducts = () => {
  const [discountProducts, setDiscountProducts] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        setDiscountProducts(res);
      });
  }, []);
  return (
    <div>
        <h1 className="text-5xl">Discount Products</h1>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
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
            ({
              id,
              name,
              image,
              originalPrice,
              discountPrice,
              discountPercentage,
            }) => (
              <SwiperSlide key={id}>
                <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center">
                  <img
                    src={image}
                    alt={name}
                    className="w-40 h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-sm text-gray-500">
                    <span className="line-through text-red-500 mr-2">
                      ${originalPrice}
                    </span>
                    <span className="text-green-600 font-bold">
                      ${discountPrice}
                    </span>
                  </p>
                  <p className="text-sm text-blue-500">
                    Save {discountPercentage}%!
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Buy Now
                  </button>
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
