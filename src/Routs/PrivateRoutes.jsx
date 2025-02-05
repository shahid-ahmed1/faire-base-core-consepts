import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProbider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user,loading}=useContext(AuthContext)
if(loading){
    return <span className="loading loading-spinner loading-xl"></span>
}

    if(user){
        return children;
    }
    else{

    }
        return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoutes;