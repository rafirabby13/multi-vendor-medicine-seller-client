import { FaEye } from "react-icons/fa";
import useUserPayments from "../../../../hooks/useUserPayments.jsx";

const MyPayment = () => {
  const [myPayment, refetch] = useUserPayments();
  console.log(myPayment);
  return (
    <div>
      
    </div>
  );
};

export default MyPayment;
