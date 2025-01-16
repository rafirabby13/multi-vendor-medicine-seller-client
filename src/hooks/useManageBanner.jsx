import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useManageBanner = () => {
    const axiosSecure = useAxiosSecure()
    const {data: banner=[], refetch} = useQuery({
        queryKey: ['banner'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/banner')
            return res.data
    
        }
    
      })
      return [banner, refetch]
};

export default useManageBanner;