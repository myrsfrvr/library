import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BookSidebar from '../../components/details/BookSidebar';
import BookInformation from '../../components/details/BookInformation';
import DeleteModal from '../../components/common/DeleteModal';
import Loading from '../../components/common/Loading';

import useBook from '../../hooks/useBook';

// TODO: available only for a client, change routes

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { book, loading, error, removeBook } = useBook(id);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  async function handleDelete() {
    await removeBook();

    navigate('/');
  }

  return (
    <>
      <section className="details">
        <BookSidebar
          book={book}
          onDelete={() => setShowDeleteModal(true)}
        />

        <BookInformation book={book} />
      </section>

      <DeleteModal
        isOpen={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}

export default BookDetailsPage;
