import { useQuery } from "@tanstack/react-query";


import useAxiosPublic from "./useAxiosPublic.jsx";

const useShop =  () => {
  const axiosPublic = useAxiosPublic()
  const {data: products=[], refetch} = useQuery({
    queryKey: ['shop'],
    queryFn: async ()=>{
        const res = await axiosPublic.get('/shop')
        return res.data

    }

  })
  return [products, refetch]

};

export default useShop;