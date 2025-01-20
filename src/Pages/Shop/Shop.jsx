import useShop from "../../hooks/useShop.jsx";

import MedicineDetailTable from "../../components/MedicineDetailTable.jsx";
import Header from "../../components/Header.jsx";
import { Helmet } from "react-helmet";

const Shop = () => {
  const [products] = useShop();
  // console.log(products);

  return (
    <div className="py-10">
      <Helmet>
        <title>Shop | Medimart</title>
      </Helmet>
      <Header
        title={"All Products"}
        description={"Explore a comprehensive list of all available medicines."}
      ></Header>

      <MedicineDetailTable products={products}></MedicineDetailTable>
    </div>
  );
};

export default Shop;
