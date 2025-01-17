import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth.jsx";
import useAxiosSecure from "./useAxiosSecure.jsx";


const useSellerPaymentHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: paymentHistory=[], refetch} = useQuery({
        queryKey: ['seller-payment-history', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/payments/seller/?email=${user?.email}`)
            return res.data
    
        }
    
      })
      return [paymentHistory, refetch]
};

export default useSellerPaymentHistory;