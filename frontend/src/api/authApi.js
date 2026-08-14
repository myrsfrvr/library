import { api } from './client';

export async function loginUser(email, password) {
  const data = await api('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return data;
}

export async function getCurrentUser(token) {
  return api('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
