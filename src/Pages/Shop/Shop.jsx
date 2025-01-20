import useShop from "../../hooks/useShop.jsx";

import MedicineDetailTable from "../../components/MedicineDetailTable.jsx";

const Shop = () => {
  const [products] = useShop();
    // console.log(products);


  return (
    <div className="py-10">
      <h1 className="text-4xl py-10">All Products</h1>
      
      <MedicineDetailTable products={products}></MedicineDetailTable>
    </div>
  );
};

export default Shop;
