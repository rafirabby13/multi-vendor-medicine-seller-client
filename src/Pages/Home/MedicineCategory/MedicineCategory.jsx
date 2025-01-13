import { useEffect, useState } from "react";
import MedicineCategoryCard from "./MedicineCategoryCard.jsx";

const MedicineCategory = () => {
  const [medicineCategoryData, setMedicineCategoryData] = useState([]);
  useEffect(() => {
    fetch("medicineCategories.json")
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        setMedicineCategoryData(res);
      });
  }, []);
  return (
    <div>
      <h1 className="text-5xl">Medicine : {medicineCategoryData.length}</h1>
      <div className="grid grid-cols-4 gap-4">
        {medicineCategoryData?.map((data, i) => (
          <MedicineCategoryCard key={i} medicine={data}></MedicineCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default MedicineCategory;
