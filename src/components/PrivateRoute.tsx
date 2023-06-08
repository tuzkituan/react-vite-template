import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../config/hooks';
import { getMeAsync } from '../features/userSlice';
import { getToken } from '../utils/token';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const token = getToken();

  const getCurrentUser = () => {
    if (token) {
      dispatch(getMeAsync(token));
    }
  };

  React.useEffect(() => {
    getCurrentUser();
  }, [token]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
