import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { registerUser } from '../../api/authApi';
import useAuth from '../../hooks/useAuth';

function RegisterPage() {
  const navigate = useNavigate();

  const { setUser, setToken } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      const data = await registerUser(username, email, password);

      setToken(data.token);
      setUser(data.user);

      localStorage.setItem('token', data.token);

      navigate('/account');
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

          <h1>Create an account</h1>

          <p>Join The Story Haven and start your reading journey.</p>
        </div>

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
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
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button
            type="submit"
            className="auth__submit"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="auth__switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}

export default RegisterPage;
