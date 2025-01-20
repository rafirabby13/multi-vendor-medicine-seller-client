// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth.jsx";
// import useAxiosPublic from "./useAxiosPublic.jsx";


// const useSpecificUser = () => {
   
//         const {user} = useAuth()
//         const axiosPublic = useAxiosPublic()
//         const {data: specificUser=[], refetch} = useQuery({
//           queryKey: [user?.email],
//           queryFn: async ()=>{
//               const res = await axiosPublic.get(`/user/Particular/?email=${user?.email}`)
//               return res.data
      
//           }
      
//         })
//         return [specificUser, refetch]
// };

// export default useSpecificUser;