import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { Navigate } from 'react-router-dom';
import { doLogout } from '../store/slices/authSlice';

const Logout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return <Navigate to="/auth/login" replace />;
};

export default Logout;
