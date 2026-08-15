import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';

function AdminLayout() {
  return (
    <main>
      <PublicNavbar />
      <Outlet />
    </main>
  );
}

export default AdminLayout;
