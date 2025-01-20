import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure.jsx";
import useAuth from "./useAuth.jsx";
import Loading from "../components/Loading.jsx";

const useUsersRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  // console.log(user?.email);
  const {
    data: role,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user Role", user?.email],

    queryFn: async () => {
      if (loading) {
        return "<Loading/>";
      }
      const res = await axiosSecure.get(`/users/role/?email=${user?.email}`);
      // console.log(res.data);
      return res.data;
    },
    enabled: !!user?.email && !loading,
  });
  return [role, refetch, isLoading];
};

export default useUsersRole;
