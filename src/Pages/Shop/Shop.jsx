import useShop from "../../hooks/useShop.jsx";

import MedicineDetailTable from "../../components/MedicineDetailTable.jsx";

const Shop = () => {
  const [products] = useShop();
    // console.log(products);


  return (
    <div>
      
      <MedicineDetailTable products={products}></MedicineDetailTable>
    </div>
  );
};

export default Shop;
