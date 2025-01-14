import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from './useAxiosSecure.jsx';
import useAuth from './useAuth.jsx';

const useCart = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: cart=[], refetch} = useQuery({
        queryKey: [user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/cart/?email=${user?.email}`)
            return res.data
    
        }
    
      })
      return [cart, refetch]
};

export default useCart;