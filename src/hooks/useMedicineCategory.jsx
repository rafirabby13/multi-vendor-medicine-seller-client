import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure.jsx";

const useMedicineCategory = () => {
   
    const axiosSecure = useAxiosSecure()
    const {data: medicineCategory=[], refetch} = useQuery({
        queryKey: ['category'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/medicine-category')
            return res.data
    
        }
    
      })
      return [medicineCategory, refetch]
};

export default useMedicineCategory;