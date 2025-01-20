import { useEffect, useState } from "react";
import PoularBrandsCards from "./PoularBrandsCards.jsx";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const PopularBrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/Brands.json")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setBrands(res);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl">Popular Brands</h1>
      <Marquee className="flex gap-6
          
          ">
       
          {brands.map((brand, i) => (
            <PoularBrandsCards key={i} brand={brand}></PoularBrandsCards>
          ))}
      
      </Marquee>
      {/* <Fade delay={1e3} cascade damping={1e-1}>
        Easy-to-use animation library for React apps
      </Fade> */}
    </div>
  );
};

export default PopularBrands;
