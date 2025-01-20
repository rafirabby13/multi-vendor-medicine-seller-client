/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MedicineCategoryCard = ({medicine}) => {
    const {image,name,id} = medicine;
    // console.log(medicine);
    // const {}
    
    return (
        <div>
           <Link to={`/medicineDetail/${name}`}> <div
            key={id}
            className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full shadow-btns "
          >
            <img
              src={image}
              alt={name}
              className="w-full h-20 md:h-40  object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between items-start">
              <h3 className=" md:text-2xl font-semibold">{name}</h3>
              
              <button className="mt-2 md:mt-4 bg-btns btn-xs md:btn  md:bg-btns text-background md:text-background rounded-lg hover:bg-blue-600 ">
                View More
              </button>
            </div>
          </div></Link>
        </div>
    );
};

export default MedicineCategoryCard;