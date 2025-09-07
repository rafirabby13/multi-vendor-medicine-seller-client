import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5001/api/v1'
    // baseURL: 'https://multi-vendor-medicine-selling-server-alpha.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;