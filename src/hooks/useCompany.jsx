import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic.jsx";

const useCompany = () => {
    const axiosPublic = useAxiosPublic()
  const {data: company=[], refetch} = useQuery({
    queryKey: ['company'],
    queryFn: async ()=>{
        const res = await axiosPublic.get('/company')
        return res.data.slice(0,10)

    }

  })
  return [company, refetch]
};

export default useCompany;