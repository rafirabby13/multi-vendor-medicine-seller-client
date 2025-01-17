import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth.jsx";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useUserPayments = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: myPayment=[], refetch} = useQuery({
        queryKey: ['payment',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/myPayment/?email=${user?.email}`)
            return res.data
    
        }
    
      })
      return [myPayment, refetch] 
};

export default useUserPayments;