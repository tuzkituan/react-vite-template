import { useGetCurrentUserMutation } from '@/services/api/auth';
import { useAppSelector } from '@/store/configureStore';
import * as React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const [getMe, { isLoading }] = useGetCurrentUserMutation();

  const { token } = useAppSelector((state) => state.auth);

  React.useEffect(() => {
    if (token) {
      getMe();
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
