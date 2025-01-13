import { useEffect, useState } from "react";
import PoularBrandsCards from "./PoularBrandsCards.jsx";

const PopularBrands = () => {
     const [brands, setBrands] = useState([]);
      useEffect(() => {
        fetch("Brands.json")
          .then((data) => data.json())
          .then((res) => {
            // console.log(res);
            setBrands(res);
          });
      }, []);
    return (
        <div>
          <h1 className="text-4xl">Popular Brands</h1>
            <div className="flex justify-center gap-20
             flex-wrap">
                {
                    brands.map((brand,i)=><PoularBrandsCards
                    key={i} brand={brand}></PoularBrandsCards>)
                }
            </div>
        </div>
    );
};

export default PopularBrands;