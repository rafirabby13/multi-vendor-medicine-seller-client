import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure.jsx';
import useAuth from './useAuth.jsx';

const useUsersRole = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data, refetch} = useQuery({
        queryKey: [user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/role/${user?.email}`)
            return res.data
    
        }
    
      })
      return [data, refetch]
};

export default useUsersRole;