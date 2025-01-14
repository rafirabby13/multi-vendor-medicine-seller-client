import { useParams } from "react-router-dom";
import useShop from "../../hooks/useShop.jsx";
import MedicineDetailTable from "../../components/MedicineDetailTable.jsx";

const MedicineDetail = () => {
    const {category} = useParams()
    
    const [products] =  useShop()
    // console.log(products, category);
    const medicenes = products.filter(medicine=> medicine.category === category)
    return (
        <div>
            <p>{medicenes.length}</p>
            
            <MedicineDetailTable products={medicenes}></MedicineDetailTable>
            
        </div>
    );
};

export default MedicineDetail;