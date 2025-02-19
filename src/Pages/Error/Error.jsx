/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import err from '../../assets/Animation - 1735229477823.json'
import Lottie from "lottie-react";
const Error = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold mb-4">
        <Lottie
                className="h-[200px]  md:h-[600px]"
                animationData={err}
                loop={true}
              />
        </h1>
        <p className="text-xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-white bg-btns rounded-lg shadow-md transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
