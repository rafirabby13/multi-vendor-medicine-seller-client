import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure.jsx";
import useAuth from "./useAuth.jsx";

const useMedicineBySeller = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    // console.log(user);
    const {data: medicines=[], refetch} = useQuery({
      queryKey: ['medicine by seller email', user?.email],
      queryFn: async ()=>{
          const res = await axiosSecure.get(`/shop/seller/?email=${user?.email}`)
          return res.data
  
      }
  
    })
    return [medicines, refetch]
};

export default useMedicineBySeller;