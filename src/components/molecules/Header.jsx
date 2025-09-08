/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

// Floating Background Animation
const BackgroundAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    let animationId;
    const startTime = Date.now();

    const animate = () => {
      elementsRef.current.forEach((element, index) => {
        if (!element) return;

        const elapsed = Date.now() - startTime;
        const offset = index * 1200;
        const y = Math.sin((elapsed + offset) / 3500) * 25;
        const x = Math.cos((elapsed + offset) / 4500) * 25;

        element.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (elementsRef.current[i] = el)}
          className={`absolute mix-blend-multiply blur-2xl opacity-20 ${
            i % 2 === 0 ? "w-24 h-24 rounded-full" : "w-16 h-16 rounded-lg"
          }`}
          style={{
            backgroundColor:
              i % 3 === 0
                ? "var(--color-primary)"
                : i % 3 === 1
                ? "var(--color-secondary)"
                : "var(--color-accent)",
            top: `${10 + i * 10}%`,
            left: `${8 + i * 12}%`,
          }}
        />
      ))}
    </div>
  );
};

const Header = ({ title, description }) => {
  return (
    <header
      className="relative py-7 px-6 md:px-12 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-background-alt, #f9fafb) 100%)`,
      }}
    >
      {/* Floating Animated Shapes */}
      <BackgroundAnimation />

      {/* Gradient Orbs */}
      <div
        className="absolute top-0 -left-20 w-96 h-96 rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--color-primary), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1
          className="text-2xl text-prime md:text-4xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in-up"
          style={{
            background: `linear-gradient(90deg, var(--color-prime), var(--color-accent))`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {title}
        </h1>
        <p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200"
          style={{
            animationFillMode: "backwards",
          }}
        >
          {description}
        </p>
      </div>
    </header>
  );
};

export default Header;
