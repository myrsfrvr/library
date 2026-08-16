import { Routes, Route } from 'react-router-dom';

import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import ClientLayout from './components/layout/ClientLayout';

import GuestOnlyRoute from './components/routes/GuestOnlyRoute';
import ClientRoute from './components/routes/ProtectedRoute';
import AdminRoute from './components/routes/AdminRoute';

import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/client/BookDetailsPage';
import BookFormPage from './pages/admin/BookFormPage';
import SearchPage from './pages/client/SearchPage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import AccountPage from './pages/client/AccountPage';
// import AdminDashboard from './pages/admin/AdminDashboard';
import BooksPage from './pages/client/BooksPage';
import AuthorsPage from './pages/client/AuthorsPage';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route element={<GuestOnlyRoute />}>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>

      <Route element={<ClientRoute />}>
        <Route element={<ClientLayout />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Route>

      <Route element={<AdminRoute />}>
        <Route element={<AdminLayout />}>
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          <Route path="/admin/books/new" element={<BookFormPage />} />
          <Route
            path="/admin/books/:id/edit"
            element={<BookFormPage />}
          />
        </Route>
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
