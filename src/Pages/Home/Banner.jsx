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
const Banner = () => {
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
    <div className="banner ">
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
        className="mySwiper"
      >
        {bannerData?.map((banner, i) => (
          <SwiperSlide key={i}>
            <div
              className=" flex   md:flex-row flex-col items-center justify-center md:gap-10  h-[200px] md:h-[350px]  "
              style={{
                backgroundImage: `linear-gradient(#99DDCC, rgba(0, 0, 0, 0.5)),url(${banner?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" space-y-4 text-center px-10">
                
                <Fade delay={1e3} cascade damping={1e-1} className=" text-xl md:text-3xl lg:text-6xl font-bold ">
                  {banner?.heading}
                </Fade>
                <p className="md:text-xl font-semibold text-sm">{banner?.description}</p>
                {/* <p className="md:text-xl text-sm">{banner?.discount}</p> */}
                <button className="p-1 px-6 md:py-3 bg-btns  font-semibold rounded-lg transition-shadow shadow-lg hover:shadow-xl">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
