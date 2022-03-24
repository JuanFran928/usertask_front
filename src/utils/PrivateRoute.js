import React, {useContext} from 'react'
import { Navigate, Route } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

import { useLocation } from "react-router";

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children, ...rest }) => {
    let {user} = useContext(AuthContext)
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};


export default PrivateRoute
