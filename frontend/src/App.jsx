import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';

import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
// import BooksPage from './pages/BooksPage';
// import BookPage from './pages/BookPage';
// import AuthorsPage from './pages/AuthorsPage';
// import SearchPage from './pages/SearchPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />

        {/* <Route path="/books" element={<BooksPage />} />
                <Route path="/books/:id" element={<BookPage />} />
                <Route path="/authors" element={<AuthorsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} /> */}
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
