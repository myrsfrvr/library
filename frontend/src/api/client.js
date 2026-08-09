const API_URL = 'http://localhost:8000/api/v1';

export async function api(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, options);

  if (response.status === 204) {
    return null;
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}
