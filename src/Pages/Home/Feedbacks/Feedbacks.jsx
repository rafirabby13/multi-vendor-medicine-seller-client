import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "../../../components/Header.jsx";

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
        
          <Header
            title={"What People Think About Us"}
            description="Our platform provides easy access to a wide range of genuine medicines and healthcare products, ensuring a convenient, reliable, and hassle-free shopping experience for everyone."
          ></Header>
    
        <div >
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {feedbacks.map((feedback, i) => (
              <SwiperSlide key={i}>
                <FeedbackCard feedback={feedback}></FeedbackCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
