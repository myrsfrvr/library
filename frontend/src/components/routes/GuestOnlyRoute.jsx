import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

function GuestOnlyRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (user?.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  if (user?.role === 'client') {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default GuestOnlyRoute;
