/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "../../../components/Header.jsx";

const DiscountProducts = () => {
  const [discountProducts, setDiscountProducts] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetch("/discount.json")
      .then((data) => data.json())
      .then((res) => {
        setDiscountProducts(res);
      })
      .catch((error) => {
        console.error("Error fetching discount products:", error);
      });
  }, []);

  const ProductCard = ({ product, index, isHovered }) => {
    const { name, image, originalPrice, discountPrice, discountPercentage } = product;
    const savings = (originalPrice - discountPrice).toFixed(2);

    return (
      <div className="max-w-sm mx-auto shadow-xs shadow-light bg-light/10">
        <div
          className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 transform ${
            isHovered ? "-translate-y-2 shadow-2xl" : ""
          }`}
        
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Discount Badge */}
          <div className="absolute top-4 left-4 z-20 bg-light">
            <div 
              className="text-prime font-bold py-2 px-3 rounded-xl shadow-lg flex items-center justify-center"
              // style={{ backgroundColor: 'var(--color-third)' }}
            >
              <span className="text-lg">{discountPercentage}%</span>
              <span className="ml-1 text-xs font-light">OFF</span>
            </div>
          </div>

          {/* Image Section */}
          <div 
            className="relative pt-8 pb-6 px-6"
          
          >
            <div className={`relative transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}>
              <img
                src={image}
                alt={name}
                className="mx-auto h-52 object-contain relative z-10"
              />
              {/* Shadow Effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-3 rounded-full blur-md" />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            {/* Product Name */}
            <h3 
              className="text-xl font-bold text-center line-clamp-2 min-h-[3.5rem] flex items-center justify-center"
   
            >
              {name}
            </h3>

            {/* Price Section */}
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col items-start">
                <span 
                  className="text-xs uppercase font-medium"
                  style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                >
                  Regular Price
                </span>
                <span 
                  className="line-through text-sm"
                  style={{ color: 'color-mix(in srgb, var(--color-font) 60%, transparent)' }}
                >
                  ${originalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span 
                  className="text-xs uppercase font-medium"
                  style={{ color: 'color-mix(in srgb, var(--color-font) 70%, transparent)' }}
                >
                  Sale Price
                </span>
                <span 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--color-third)' }}
                >
                  ${discountPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Savings Badge */}
            <div className="flex justify-center">
              <div 
                className="text-white text-sm font-medium py-2 px-4 rounded-full shadow-lg inline-flex items-center gap-2 bg-prime"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Save ${savings}!
              </div>
            </div>

            {/* Add to Cart Button */}
            {/* <button 
              className="w-full py-3 px-4 text-white font-medium text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ 
                backgroundColor: 'var(--color-btn)',
                '--tw-ring-color': 'var(--color-btn)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-btn-hover)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--color-btn)';
              }}
            >
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Header */}
      <Header
        title="Discounted Products"
        description="Grab these exciting products with reasonable discounts"
      />

      {/* Products Swiper */}
      <div 
        className="py-16"
       
      >
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper [&_.swiper-button-next]:!text-[var(--color-btn)] [&_.swiper-button-prev]:!text-[var(--color-btn)] [&_.swiper-pagination-bullet-active]:!bg-[var(--color-btn)]"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {discountProducts?.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                product={product}
                index={index}
                isHovered={hoveredCard === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountProducts;