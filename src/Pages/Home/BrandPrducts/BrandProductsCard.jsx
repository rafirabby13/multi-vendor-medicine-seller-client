/* eslint-disable react/prop-types */
const BrandProductsCard = ({ product }) => {
  // console.log(product);
  const { image, currency, price, category, title } = product;
  return (
    <div>
      <div className="bg-white border rounded-lg shadow-lg p-4 ">
        <div className="mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
        <h4 className="text-sm font-medium text-gray-600">{category}</h4>

        <h3 className="text-lg font-bold mb-2">{title}</h3>

        <div className="flex justify-between items-center mt-3">
          <div className="text-gray-700 font-semibold">
            {currency} {price}
          </div>
          <button className="bg-blue-500 text-white py-1 px-3 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandProductsCard;
