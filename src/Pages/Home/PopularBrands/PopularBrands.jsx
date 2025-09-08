import { useEffect, useState } from "react";
import PoularBrandsCards from "./PoularBrandsCards.jsx";

import Marquee from "react-fast-marquee";
import Header from "../../../components/molecules/Header.jsx";

const PopularBrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/Brands.json")
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        setBrands(res);
      });
  }, []);
  return (
    <div>
      
      <Header title={'Popular Brands'} description={'Explore our collection of trusted and well-known brands that deliver quality and reliability. From household names to customer favorites, discover the brands you love and trust all in one place.'}></Header>
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
