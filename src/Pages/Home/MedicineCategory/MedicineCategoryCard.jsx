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
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{name}</h3>
              
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View More
              </button>
            </div>
          </div></Link>
        </div>
    );
};

export default MedicineCategoryCard;