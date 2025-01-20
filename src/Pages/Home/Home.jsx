/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import Footer from "../../Shared/Footer.jsx";
import Navbar from "../../Shared/Navbar.jsx";
import Banner from "./Banner.jsx";
import BrandProducts from "./BrandPrducts/BrandProducts.jsx";
import DiscountProducts from "./DiscountProducts/DiscountProducts.jsx";
import MedicineCategory from "./MedicineCategory/MedicineCategory.jsx";
import PopularBrands from "./PopularBrands/PopularBrands.jsx";

const Home = () => {
  return (
    <div className="space-y-20">
     <Helmet>
            <title>Home | Medimart</title>
        </Helmet>
      <MedicineCategory />
      <DiscountProducts />
      <PopularBrands />
      <BrandProducts />
  
    </div>
  );
};

export default Home;
