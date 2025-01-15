import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useTotalPayment = () => {
   
    const axiosSecure = useAxiosSecure()
    const {data: totalPaid=[], refetch} = useQuery({
        queryKey: ['payment'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/total-payment-paid')
            return res.data
    
        }
    
      })
      return [totalPaid, refetch]
};

export default useTotalPayment;