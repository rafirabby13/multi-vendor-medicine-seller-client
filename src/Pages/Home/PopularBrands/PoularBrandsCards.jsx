/* eslint-disable no-unused-vars */

import { Fade } from "react-awesome-reveal";

/* eslint-disable react/prop-types */
const PopularBrandsCards = ({ brand }) => {
  const { logo, name } = brand;
  return (
    <div  className="  p-4 sm:p-6 ">
   
    
        <div className="  bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center  backface-hidden  h-48">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-purple-600 rounded-full p-2 flex items-center justify-center shadow-lg ">
            <img
              src={logo}
              alt={`${name} brand logo`}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h3 className="mt-4 text-lg font-bold text-gray-800 ">{name}</h3>
          
        </div>

      
    </div>
  );
};

export default PopularBrandsCards;
