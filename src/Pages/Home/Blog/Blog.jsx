import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Header from "../../../components/Header.jsx";
import BlogCard from "./BlogCard.jsx";


// import styles bundle
import 'swiper/css/bundle';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./blog.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div>
      <div>
        <Header
          title={"Latest Health & Wellness Blogs"}
          description="Stay informed with our latest articles on healthcare, wellness, and medicines. Explore expert insights and tips for a healthier life."
        ></Header>

        <div>
          <Swiper
            spaceBetween={30}
            
            autoplay={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {blogs.map((blog, i) => (
              <SwiperSlide key={i}>
                <BlogCard blog={blog}></BlogCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
