/* eslint-disable no-unused-vars */

import MedicineCategoryCard from "./MedicineCategoryCard.jsx";
import useMedicineCategory from "../../../hooks/useMedicineCategory.jsx";
import useMedicineCategoryPublic from "../../../hooks/useMedicineCategoryPublic.jsx";
import Header from "../../../components/Header.jsx";

const MedicineCategory = () => {
  const [medicineCategory, refetch] = useMedicineCategoryPublic();
  return (
    <div className="mt-20">
      <Header
        title={" Find the Medicine You Need"}
        description={
          "  Discover an extensive collection of premium medicines designed to support your health and wellness.From daily essentials to specialized care, find everything you need in one place."
        }
      ></Header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-4">
        {medicineCategory?.map((data, i) => (
          <MedicineCategoryCard key={i} medicine={data}></MedicineCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default MedicineCategory;
