import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://multi-vendor-medicine-selling-server-alpha.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;