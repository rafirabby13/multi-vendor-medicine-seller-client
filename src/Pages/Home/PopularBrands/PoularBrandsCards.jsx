const PoularBrandsCards = ({ brand }) => {
  console.log(brand);
  const { logo, name } = brand;
  return (
    <div>
      <div className=" bg-gray-100 flex items-center justify-center rounded-full border">
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
};

export default PoularBrandsCards;
