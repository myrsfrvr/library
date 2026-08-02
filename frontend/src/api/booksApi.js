import { api } from './client';

export async function getBooks() {
  const data = await api('/books');

  return data.data.books;
}

export async function getBook(id) {
  const data = await api(`/books/${id}`);

  return data.data.book;
}

export async function searchBooks(query) {
  const data = await api(
    `/books/search?q=${encodeURIComponent(query)}`,
  );

  return data.data.books;
}

export async function deleteBook(id) {
  await api(`/books/${id}`, {
    method: 'DELETE',
  });
}
