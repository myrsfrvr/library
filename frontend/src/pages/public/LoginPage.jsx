import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { loginUser } from '../../api/authApi';
import useAuth from '../../hooks/useAuth';

function LoginPage() {
  const navigate = useNavigate();

  const { setUser, setToken } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      const data = await loginUser(email, password);

      setToken(data.token);
      setUser(data.user);

      localStorage.setItem('token', data.token);

      navigate('/dashboard');
    } catch (error) {
      setError(
        error.message || 'Something went wrong. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth">
      <div className="auth__decoration auth__decoration--one"></div>
      <div className="auth__decoration auth__decoration--two"></div>

      <section className="auth__card">
        <div className="auth__header">
          <span className="auth__subtitle">THE STORY HAVEN</span>

          <h1>Welcome back</h1>

          <p>Log in to continue your reading journey.</p>
        </div>

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button
            type="submit"
            className="auth__submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        <p className="auth__switch">
          Don't have an account?{' '}
          <Link to="/register">Create one</Link>
        </p>
      </section>
    </main>
  );
}

export default LoginPage;
