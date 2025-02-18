/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const FeedbackCard = ({ feedback }) => {
    const { name, role, location, relation, feedback2, rating, img } = feedback;
  
    return (
      <div className="feedback feedCardw md:py-10 md:px-12 lg:px-24">
        <div className="shadow-lg feedCard rounded-lg p-1 md:p-6 mt-10 flex flex-col justify-between min-h-[400px] max-h-[400px] mx-auto shadow-btns border-btns border">
          <div className="flex-1 flex items-center">
            <p className="italic text-sm md:text-2xl text-center leading-relaxed">
              "{feedback2}"
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-6 gap-4">
            <img
              src={img}
              alt={`${name}'s avatar`}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="font-bold text-lg">{name}</p>
              <p className="text-lg">( {rating} )</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeedbackCard;