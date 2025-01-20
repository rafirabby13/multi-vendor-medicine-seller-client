/* eslint-disable react/prop-types */
const Header = ({ title, description }) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold ">
          <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            {title}
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600  mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default Header;
