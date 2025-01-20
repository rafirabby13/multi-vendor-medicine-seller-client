/* eslint-disable react/prop-types */
const BrandProductsCard = ({ product }) => {
  // console.log(product);
  const { image, currency, price, category, title } = product;
  return (
    <div className="flex items-center bg-second">
      <div className="flex-1 p-4">
        {/* <p className="text-sm text-gray-500">{category}</p> */}
        <h3 className="text-xs md:text-2xl font-bold text-gray-800">{title}</h3>
        <div className="flex flex-col-reverse md:flex-row gap-4 md:mt-4 ">
          <button className="btn-xs md:btn bg-third text-background text-sm font-medium  shadow-md hover:bg-blue-600 transition">
            Shop Now
          </button>
          <p className="text-2xl font-semibold text-gray-700">
            {currency} {price}
          </p>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-24 sm:h-40  rounded-md"
        />
      </div>
    </div>
  );
};

export default BrandProductsCard;
