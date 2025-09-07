import { useEffect, useState, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button.jsx";

// Floating Medical Icons Component
const FloatingMedicalIcons = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    let animationId;
    const startTime = Date.now();

    const animate = () => {
      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;
        
        const elapsed = Date.now() - startTime;
        const offset = index * 1500;
        const y = Math.sin((elapsed + offset) / 3000) * 40;
        const x = Math.cos((elapsed + offset) / 4000) * 30;
        const rotate = Math.sin((elapsed + offset) / 2000) * 20;
        
        icon.style.transform = `
          translateX(${x}px) 
          translateY(${y}px) 
          rotate(${rotate}deg)
        `;
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const medicalIcons = ['💊', '🏥', '❤️', '🩺', '💉', '🧬', '🔬', '⚕️'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
      {medicalIcons.map((icon, i) => (
        <div
          key={i}
          ref={el => iconsRef.current[i] = el}
          className="absolute text-2xl md:text-3xl"
          style={{
            top: `${10 + (i * 12)}%`,
            left: `${5 + (i * 11)}%`,
            color: i % 2 === 0 ? 'var(--color-btn)' : 'var(--color-success)',
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

// Floating Geometric Shapes
const FloatingShapes = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    let animationId;
    const startTime = Date.now();

    const animate = () => {
      shapesRef.current.forEach((shape, index) => {
        if (!shape) return;
        
        const elapsed = Date.now() - startTime;
        const offset = index * 2000;
        const y = Math.sin((elapsed + offset) / 4000) * 50;
        const x = Math.cos((elapsed + offset) / 5000) * 25;
        const rotate = (elapsed + offset) / 50;
        const scale = 0.8 + Math.sin((elapsed + offset) / 3000) * 0.3;
        
        shape.style.transform = `
          translateX(${x}px) 
          translateY(${y}px) 
          rotate(${rotate}deg)
          scale(${scale})
        `;
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={el => shapesRef.current[i] = el}
          className={`absolute opacity-10 ${
            i % 3 === 0 ? 'w-16 h-16 rounded-full' : 
            i % 3 === 1 ? 'w-12 h-12 rounded-lg' : 
            'w-8 h-20 rounded-full'
          }`}
          style={{
            backgroundColor: [
              'var(--color-btn)', 
              'var(--color-success)', 
              'var(--color-warning)', 
              'var(--color-btns)', 
              'var(--color-third)', 
              'var(--color-second)'
            ][i],
            top: `${15 + i * 15}%`,
            right: `${10 + i * 8}%`,
          }}
        />
      ))}
    </div>
  );
};

// Pulsing Circles
const PulsingCircles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-5 animate-ping"
        style={{ 
          backgroundColor: 'var(--color-btn)',
          animationDuration: '4s'
        }}
      />
      <div 
        className="absolute bottom-32 right-32 w-24 h-24 rounded-full opacity-5 animate-ping"
        style={{ 
          backgroundColor: 'var(--color-success)',
          animationDuration: '3s'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full opacity-5 animate-ping"
        style={{ 
          backgroundColor: 'var(--color-warning)',
          animationDuration: '5s'
        }}
      />
    </div>
  );
};

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
    <div 
      className="relative py-10 overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, var(--color-second) 0%, var(--color-background) 50%, var(--color-second-dark) 100%)` 
      }}
    >
      {/* Background Animations */}
      <FloatingMedicalIcons />
      <FloatingShapes />
      <PulsingCircles />
      
      {/* Gradient Orbs */}
      <div 
        className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ backgroundColor: 'var(--color-btn)' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-5 blur-3xl"
        style={{ backgroundColor: 'var(--color-success)' }}
      />
      
      {/* Moving Background Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div 
          className="absolute top-1/4 left-0 w-full h-px animate-pulse"
          style={{ 
            background: `linear-gradient(90deg, transparent, var(--color-btn), transparent)`,
            animationDuration: '3s'
          }}
        />
        <div 
          className="absolute top-3/4 left-0 w-full h-px animate-pulse"
          style={{ 
            background: `linear-gradient(90deg, transparent, var(--color-success), transparent)`,
            animationDuration: '4s'
          }}
        />
      </div>

      {/* Original Swiper Content */}
      <div className="relative z-10">
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
          style={{
            '--swiper-pagination-color': 'var(--color-btn)',
            '--swiper-pagination-bullet-inactive-color': 'var(--color-second-dark)',
          }}
        >
          {bannerData?.map((banner, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-7">
                <div className="w-full md:w-1/2 space-y-4 rounded-lg">
                  <div className="transition-all duration-700 transform">
                    <h2
                      className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4"
                      style={{ color: 'var(--color-third)' }}
                    >
                      {banner.heading}
                    </h2>
                    <p 
                      className="text-base md:text-lg mb-6"
                      style={{ color: 'var(--color-font)' }}
                    >
                      {banner.description}
                    </p>
                    <Link to='shop'>
                      <Button text={" SHOP NOW"}></Button>
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-2xl shadow-md relative group overflow-hidden"
                  style={{
                    backgroundImage: `url(${banner.image})`,
                  }}
                >
                  {/* Image Hover Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, var(--color-btn), var(--color-success))`
                    }}
                  />
                  
                  {/* Floating Badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm border text-xs font-bold"
                    style={{ 
                      backgroundColor: 'color-mix(in srgb, var(--color-background) 90%, transparent)',
                      borderColor: 'var(--color-success)',
                      color: 'var(--color-success)'
                    }}
                  >
                    ✨ Quality Assured
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <svg 
          className="w-full h-full opacity-10" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="var(--color-btn)"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0;50 0;0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="var(--color-success)"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0;-30 0;0 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Banner2;