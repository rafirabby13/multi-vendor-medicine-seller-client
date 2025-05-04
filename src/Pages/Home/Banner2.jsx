import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";
import useManageBanner from "../../hooks/useManageBanner.jsx";
import { Fade } from "react-awesome-reveal";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "../../components/Button.jsx";

const Banner2 = () => {
  const [bannerData, setBannerData] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/banner/active")
      .then((res) => {
        // console.log(res.data);
        setBannerData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosPublic]);
  return (
    <div className=" bg-second ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:max-w-[85%]"
      >
        {bannerData?.map((banner, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-7">
              <div className="w-full md:w-1/2   space-y-4  rounded-lg">
                <div className="transition-all duration-700 transform">
                  <h2
                    className="text-2xl md:text-3xl lg:text-5xl font-bold text- mb-4"
                    style={{ color: "#C43A6C" }}
                  >
                    {banner.heading}
                  </h2>
                  <p className="text-base md:text-lg mb-6">
                    {banner.description}
                  </p>
                  <Link to='shop'><Button text={" SHOP NOW"}></Button></Link>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-2xl shadow-md "
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner2;
