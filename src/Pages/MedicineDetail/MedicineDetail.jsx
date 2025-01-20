import { useParams } from "react-router-dom";
import useShop from "../../hooks/useShop.jsx";
import MedicineDetailTable from "../../components/MedicineDetailTable.jsx";
import Header from "../../components/Header.jsx";

const MedicineDetail = () => {
    const {category} = useParams()
    
    const [products] =  useShop()
    // console.log(products, category);
    const medicenes = products.filter(medicine=> medicine.category === category)
    return (
        <div className="py-20">
          
          <Header title={category} ></Header>
            
            <MedicineDetailTable products={medicenes}></MedicineDetailTable>
            
        </div>
    );
};

export default MedicineDetail;