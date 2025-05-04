import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

/* eslint-disable react/prop-types */
const BrandProductsCard = ({ product }) => {
  const { image, currency, price, title } = product;

  return (
    <motion.div
      className="relative flex flex-col md:flex-row  rounded-2xl shadow-sm shadow-third overflow-hidden max-w-lg mx-auto transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-6 bg-white flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-48 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <h3 className="text-lg md:text-2xl font-serif font-bold text-gray-900 mb-3 tracking-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-xl md:text-2xl font-semibold text-third">
          {currency}
          {price}
        </p>
        <Link
          to="/shop"
          className="mt-4 inline-block px-6 py-2.5 bg-third text-white text-sm font-medium rounded-lg shadow-md hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-teal-100 rounded-bl-full opacity-20" />
    </motion.div>
  );
};

export default BrandProductsCard;