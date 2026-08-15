import { Outlet } from 'react-router-dom';

import ClientNavbar from './ClientNavbar';
import Footer from './Footer';

function ClientLayout() {
  return (
    <>
      <ClientNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default ClientLayout;
