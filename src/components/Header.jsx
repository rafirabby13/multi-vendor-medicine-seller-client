/* eslint-disable react/prop-types */
const Header = ({ title, description }) => {
  return (
    <div className="bg-[#f9fdfd] py-16 px-4">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold p-6 rounded-lg shadow-md shadow-third/70 mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-third to-third">
          {title}
        </span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-[#081d1d] max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  </div>
  );
};

export default Header;
