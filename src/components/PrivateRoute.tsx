import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetCurrentUserQuery } from '../services/api/auth';
import { useAppSelector } from '../store/configureStore';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { data: currentUser } = useGetCurrentUserQuery();
  const { token } = useAppSelector((state) => state.auth);
  if (!token) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
