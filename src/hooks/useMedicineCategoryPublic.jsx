
import useAxiosPublic from './useAxiosPublic.jsx';
import { useQuery } from '@tanstack/react-query';

const useMedicineCategoryPublic = () => {
    const axiosPublic = useAxiosPublic()
    const {data: medicineCategory=[], refetch} = useQuery({
        queryKey: ['category'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/medicine-all-category')
            return res.data
    
        }
    
      })
      return [medicineCategory, refetch]
};

export default useMedicineCategoryPublic;