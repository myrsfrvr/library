import BookCard from './BookCard';

function BooksSection({ books, onDelete }) {
  return (
    <section className="books">
      <div className="books__heading">
        <h2 className="heading-secondary">Books</h2>
      </div>

      <div className="books__grid">
        {books.map(book => (
          <BookCard key={book._id} book={book} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}

export default BooksSection;
