/* eslint-disable react/prop-types */
// import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className={`
        px-5 py-2 rounded-lg font-medium
        transition-all duration-300 ease-in-out
        bg-prime text-background
        hover:bg-third-dark active:bg-third
        shadow-md hover:shadow-lg
      `}
    >
      {text}
    </button>
  );
};

export default Button;
