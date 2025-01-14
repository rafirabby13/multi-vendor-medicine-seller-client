import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useShop =  () => {
  const {data: products=[]} = useQuery({
    queryKey: ['shop'],
    queryFn: async ()=>{
        const res = await axios.get('/shop.json')
        return res.data

    }

  })
  return [products]

};

export default useShop;