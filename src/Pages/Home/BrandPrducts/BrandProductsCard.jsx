import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const BrandProductsCard = ({ product }) => {
  const { image, currency, price, title } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col md:flex-row rounded-2xl overflow-hidden w-full mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group mt-7"
      style={{ 
        backgroundColor: 'var(--color-background)',
        boxShadow: '0 4px 6px color-mix(in srgb, var(--color-prime) 20%, transparent)'
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image Section */}
      <div 
        className="w-full  p-6 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-light)' }}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-40 md:h-48 object-contain rounded-lg relative z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Background decoration */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at center, var(--color-accent), transparent)`
          }}
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between relative">
        {/* Product Title */}
        <div className="mb-4">
          <h3 
            className="text-lg md:text-xl font-bold tracking-tight line-clamp-2 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            {title}
          </h3>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <div 
            className="text-sm font-medium mb-1"
            style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
          >
            Price
          </div>
          <div 
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--color-prime)' }}
          >
            {currency}{price}
          </div>
        </div>

        {/* Shop Now Button */}
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-6 py-3 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 group-hover:shadow-lg"
          style={{ 
            backgroundColor: 'var(--color-accent)',
            '--tw-ring-color': 'var(--color-accent)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-second)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--color-accent)';
          }}
        >
          <span>Shop Now</span>
          <svg 
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Quality Badge */}
        <div 
          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div 
        className="absolute bottom-0 left-0 w-20 h-20 rounded-tr-full opacity-10"
        style={{ backgroundColor: 'var(--color-prime)' }}
      />
    </motion.div>
  );
};

export default BrandProductsCard;