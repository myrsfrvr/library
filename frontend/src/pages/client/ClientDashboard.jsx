import DashboardHero from '../../components/client-dashboard/DashboardHero';
import ContinueReadingSection from '../../components/client-dashboard/ContinueReadingSection';
import GenreRecommendations from '../../components/client-dashboard/GenreRecommendations';
import AuthorRecommendations from '../../components/client-dashboard/AuthorRecommendations';
import useBooks from '../../hooks/useBooks';
import useAuthors from '../../hooks/useAuthors';

function ClientDashboard() {
  const currentBook = null;

  const activeBooks = [];

  const { books } = useBooks();
  const { authors } = useAuthors();

  return (
    <>
      <DashboardHero currentBook={currentBook} />

      {activeBooks.length > 0 && (
        <ContinueReadingSection books={activeBooks} />
      )}

      <GenreRecommendations books={books} />

      <AuthorRecommendations authors={authors} />
    </>
  );
}

export default ClientDashboard;
