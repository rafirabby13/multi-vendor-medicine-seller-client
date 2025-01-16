import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";
import useManageBanner from "../../hooks/useManageBanner.jsx";
const Banner = () => {
  
  const [bannerData, setBannerData] = useState([]);
  const axiosPublic = useAxiosPublic()
 
  useEffect(() => {
    axiosPublic.get('/banner/active')
      .then((res) => {
        // console.log(res.data);
        setBannerData(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
  }, [axiosPublic]);
  return (
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
        {bannerData?.map((banner, i) => (
          <SwiperSlide key={i}>
            <div className="lg:px-20 flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-10   banner ">
              <div className=" p-2  md:w-2/5  space-y-4 ">
                <h1 className=" md:text-2xl lg:text-4xl font-bold">
                  {banner?.heading}
                </h1>
                <p className="md:text-xl text-sm">{banner?.description}</p>
                <p className="md:text-xl text-sm">{banner?.discount}</p>
                <button className="p-1 px-6 md:py-3  text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                  Explore
                </button>
              </div>
              <div className="md:w-3/5"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
