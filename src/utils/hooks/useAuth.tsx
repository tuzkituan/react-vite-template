import { useAppSelector } from '../../store/configureStore';

const useAuth = () => {
  const { token } = useAppSelector((state) => state.auth);

  const isAuthenticated = () => {
    return Boolean(token);
  };

  return {
    isAuthenticated: isAuthenticated(),
  };
};

export default useAuth;
