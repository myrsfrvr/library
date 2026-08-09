import { useState } from 'react';

const languages = [
  'Afrikaans',
  'Arabic',
  'Chinese',
  'Czech',
  'Danish',
  'Dutch',
  'English',
  'French',
  'German',
  'Italian',
  'Japanese',
  'Korean',
  'Portuguese',
  'Russian',
  'Spanish',
  'Ukrainian',
  'Vietnamese',
];

const statuses = [
  'Available',
  'Borrowed',
  'On Hold',
  'Lost',
  'Under Repair',
  'Archived',
];

const emptyForm = {
  title: '',
  author: '',
  publisher: '',
  yearPublished: '',
  language: '',
  status: 'Available',
  genre: '',
  summary: '',
};

function getInitialForm(book) {
  if (!book) {
    return emptyForm;
  }

  return {
    title: book.title ?? '',
    author: book.author?.map(author => author.name).join(', ') ?? '',
    publisher: book.publisher ?? '',
    yearPublished: book.yearPublished ?? '',
    language: book.language ?? '',
    status: book.status ?? 'Available',
    genre: book.genre?.join(', ') ?? '',
    summary: book.summary ?? '',
  };
}

function BookForm({ book, onSubmit, loading }) {
  const [form, setForm] = useState(() => getInitialForm(book));

  function handleChange(e) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const bookData = {
      title: form.title,
      author: form.author
        .split(',')
        .map(author => author.trim())
        .filter(Boolean),
      publisher: form.publisher,
      yearPublished: Number(form.yearPublished),
      language: form.language,
      status: form.status,
      genre: form.genre
        .split(',')
        .map(genre => genre.trim())
        .filter(Boolean),
      summary: form.summary,
    };

    onSubmit(bookData);
  }

  return (
    <form className="create__form" onSubmit={handleSubmit}>
      <div className="create__form--field">
        <label className="create__form--label" htmlFor="title">
          Title
        </label>

        <input
          className="create__form--input"
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="create__form--field">
        <label className="create__form--label" htmlFor="author">
          Author
        </label>

        <input
          className="create__form--input"
          type="text"
          id="author"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="George Orwell, Aldous Huxley"
          required
        />
      </div>

      <div className="create__form--field">
        <label className="create__form--label" htmlFor="publisher">
          Publisher
        </label>

        <input
          className="create__form--input"
          type="text"
          id="publisher"
          name="publisher"
          value={form.publisher}
          onChange={handleChange}
        />
      </div>

      <div className="create__form--field">
        <label
          className="create__form--label"
          htmlFor="yearPublished"
        >
          Year Published
        </label>

        <input
          className="create__form--input"
          type="number"
          id="yearPublished"
          name="yearPublished"
          min="0"
          max="2026"
          value={form.yearPublished}
          onChange={handleChange}
          required
        />
      </div>

      <div className="create__form--field">
        <label className="create__form--label" htmlFor="language">
          Language
        </label>

        <select
          className="create__form--dropdown"
          id="language"
          name="language"
          value={form.language}
          onChange={handleChange}
          required
        >
          <option value="">Select language</option>

          {languages.map(language => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      <div className="create__form--field">
        <label className="create__form--label" htmlFor="status">
          Status
        </label>

        <select
          className="create__form--dropdown"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
          required
        >
          {statuses.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="create__form--field">
        <label className="create__form--label" htmlFor="genre">
          Genres (separated by comma)
        </label>

        <input
          className="create__form--input"
          type="text"
          id="genre"
          name="genre"
          value={form.genre}
          onChange={handleChange}
          placeholder="Dystopian, Science Fiction, Adventure"
          required
        />
      </div>

      <div className="create__form--field">
        <label className="create__form--label" htmlFor="summary">
          Summary
        </label>

        {/* <input
          className="create__form--input"
          type="text"
          id="summary"
          name="summary"
          value={form.summary}
          onChange={handleChange}
          required
        /> */}

        <textarea
          className="create__form--textarea"
          id="summary"
          name="summary"
          value={form.summary}
          onChange={handleChange}
          maxLength={2000}
          required
        />
      </div>

      <button
        className="create__form--btn"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Saving...' : book ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
}

export default BookForm;
