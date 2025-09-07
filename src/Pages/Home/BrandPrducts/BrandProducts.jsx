import { useEffect, useState } from "react";
import BrandProductsCard from "./BrandProductsCard.jsx";
import Header from "../../../components/Header.jsx";
import { Fade, Roll, Zoom } from "react-awesome-reveal";

const BrandProducts = () => {
  const [brandProduct, setBrandProduct] = useState([]);
  useEffect(() => {
    fetch("BrandProduct.json")
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        setBrandProduct(res);
      });
  }, []);
  return (
    <div>
      <Header
        title={"Essential Daily Needs"}
        description={
          "Discover a wide range of daily essentials designed to make your life easier and more convenient. From health products to household necessities, find everything you need to stay prepared and organized every day."
        }
      ></Header>
      <Zoom delay={200} duration={500} triggerOnce fraction={0.5} cascade damping={0.2}>
        <div className="grid md:grid-cols-2 gap-4">
          {brandProduct.map((product, i) => (
            <BrandProductsCard key={i} product={product}></BrandProductsCard>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default BrandProducts;
