/* eslint-disable react/prop-types */
const Header = ({ title, description }) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold  p-2 shadow-md shadow-btns p-6">
          <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            {title}
          </span>
        <p className="mt-4 text-xl   mx-auto">{description}</p>
        </h1>
      </div>
    </div>
  );
};

export default Header;
