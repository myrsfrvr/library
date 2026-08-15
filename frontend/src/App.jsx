import { Routes, Route } from 'react-router-dom';

import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import ClientLayout from './components/layout/ClientLayout';

import ProtectedRoute from './components/routes/ProtectedRoute';
import AdminRoute from './components/routes/AdminRoute';

import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/public/BookDetailsPage';
import BookFormPage from './pages/admin/BookFormPage';
import SearchPage from './pages/public/SearchPage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import AccountPage from './pages/client/AccountPage';
import AdminDashboard from './pages/admin/AdminDashboard';

// TODO:
// 1. protect login and register from loggen in users
// 2. database editing is solely for admins
// 3. kill the huge bug in my room right now :(
// 4. search is for clients
// /admin would not exist probably as home page will render admin dashboard if user is admin

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="/books/new" element={<BookFormPage />} />
        <Route path="/books/:id/edit" element={<BookFormPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<ClientLayout />}>
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Route>

      <Route element={<AdminRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
