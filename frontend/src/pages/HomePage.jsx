// import { useState } from 'react';

// import Hero from '../components/common/Hero';

// import BooksSection from '../components/books/BooksSection';
// import AuthorsSection from '../components/authors/AuthorsSection';
// import DeleteModal from '../components/common/DeleteModal';
// import Loading from '../components/common/Loading';

// import useBooks from '../hooks/useBooks';
// import useAuthors from '../hooks/useAuthors';

import useAuth from '../hooks/useAuth';

import LandingPage from './public/LandingPage';
import AdminDashboard from './admin/AdminDashboard';
import ClientDashboard from './client/ClientDashboard';

// TODO: probably what home page should look like. render / based on user.
function HomePage() {
  const { user } = useAuth();

  if (!user) {
    return <LandingPage />;
  }

  if (user.role === 'admin') {
    return <AdminDashboard />;
  }

  return <ClientDashboard />;
}

export default HomePage;
