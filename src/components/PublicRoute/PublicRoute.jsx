import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(state => state.auth.token);
  return token ? <Navigate to="/contacts" /> : <Outlet />;
};
