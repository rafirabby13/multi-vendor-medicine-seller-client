/* eslint-disable no-unused-vars */

import MedicineCategoryCard from "./MedicineCategoryCard.jsx";
import useMedicineCategory from "../../../hooks/useMedicineCategory.jsx";
import useMedicineCategoryPublic from "../../../hooks/useMedicineCategoryPublic.jsx";

const MedicineCategory = () => {
 
  const [medicineCategory, refetch] = useMedicineCategoryPublic();
  return (
    <div>
      <h1 className="text-5xl">Medicine : {medicineCategory.length}</h1>
      <div className="grid grid-cols-4 gap-4">
        {medicineCategory?.map((data, i) => (
          <MedicineCategoryCard key={i} medicine={data}></MedicineCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default MedicineCategory;
