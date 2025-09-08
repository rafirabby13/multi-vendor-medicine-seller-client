import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5001/api/v1'
    baseURL: 'https://multi-vendor-medicine-seller-server.vercel.app/api/v1'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;