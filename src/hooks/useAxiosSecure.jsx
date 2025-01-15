import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth.jsx'

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const {logoutUser} = useAuth()
    // Add a request interceptor
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function(config){
        console.log('req stop by interceptor');
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;

    }, function(error){
        return Promise.reject(error)
    })

    // Add a response interceptor

    axiosSecure.interceptors.response.use(function(res){
        return res;
    }, async (err)=>{
        
      
        const status = err.response.status;
       

        if (status == 401 || status === 403) {
            await logoutUser()
            navigate('/login')

            
        }

        return Promise.reject(err);


    })

    return axiosSecure;
};

export default useAxiosSecure;


