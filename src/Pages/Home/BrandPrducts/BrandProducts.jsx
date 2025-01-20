import { useEffect, useState } from "react";
import BrandProductsCard from "./BrandProductsCard.jsx";
import Header from "../../../components/Header.jsx";

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
      <div className="grid md:grid-cols-2 gap-4">
        {brandProduct.map((product, i) => (
          <BrandProductsCard key={i} product={product}></BrandProductsCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
