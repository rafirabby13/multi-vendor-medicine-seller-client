/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth.jsx';
import Loading from '../components/atoms/Loading.jsx';

const PrivateRoute = ({children}) => {
     // const navigte = useNavigate()
  const location = useLocation()
  //   console.log(location);
      const {loading, user} = useAuth()
    //   console.log(loading);
      if (loading) {
          return <Loading/>
      }
      if (!user) {
          return <Navigate state={location.pathname} to='/login'></Navigate>
      }
  
      return children;
};

export default PrivateRoute;