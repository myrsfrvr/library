import { api } from './client';

export async function getAuthors() {
  const data = await api('/authors');

  return data.data.authors;
}

export async function getAuthor(id) {
  const data = await api(`/authors/${id}`);

  return data.data.author;
}
