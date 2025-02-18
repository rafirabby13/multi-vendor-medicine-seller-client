import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("./feedback.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFeedbacks(data);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="md:w-3/5">
          {/* <p className="text-orange-500 font-semibold uppercase">Feedback</p> */}
          <h2 className="text-xl md:text-4xl font-bold  mb-4 p-2 md:p-6 shadow-md shadow-blue-400 history">
            What People Think About Us
          </h2>
          <p className="text-sm md:text-lg  md:mb-12 p-2">
            Our platform brings you the convenience of instant access to a
            diverse range of tutors across various subjects and languages,
            ensuring accessible and quality learning experiences for everyone.
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {feedbacks.map((feedback, i) => (
                <SwiperSlide key={i} >
              <FeedbackCard feedback={feedback}></FeedbackCard></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
