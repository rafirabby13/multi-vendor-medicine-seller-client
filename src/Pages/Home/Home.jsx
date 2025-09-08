import { Helmet } from "react-helmet";
import MedicineCategory from "./MedicineCategory/MedicineCategory";
import DiscountProducts from "./DiscountProducts/DiscountProducts"
import BrandProducts from "./BrandPrducts/BrandProducts"
import Feedback from "./Feedbacks/Feedbacks"
import Blog from "./Blog/Blog"
import Newsletter from "./Newsletter/Newsletter"
const Home = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>Home | Medimart</title>
      </Helmet>
      <MedicineCategory />
      <DiscountProducts />
      {/* <DiscountProducts /> */}
      
      <BrandProducts />
      <Feedback />
      <Blog />
      <Newsletter />

    </div>
  );
};

export default Home;
