import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginType, setLoginType] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Hardcoded admin login check
    if (
      loginType === 'admin' &&
      email === 'admin123@gmail.com' &&
      password === 'admin@123'
    ) {
      navigate('/admin');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        if (loginType === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error or invalid server response. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please enter your details to sign in</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="login-input"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="login-input"
            />
          </div>

          <div className="login-type-buttons">
            <button
              type="button"
              onClick={() => setLoginType('user')}
              className={`login-type-button ${loginType === 'user' ? 'active' : ''}`}
            >
              Login as User
            </button>
            <button
              type="button"
              onClick={() => setLoginType('admin')}
              className={`login-type-button ${loginType === 'admin' ? 'active' : ''}`}
            >
              Login as Admin
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-submit-button">
            Sign in
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?{' '}
          <Link to="/signup" className="signup-link-text">
            Create one now
          </Link>
        </p>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .login-box {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          backdrop-filter: blur(10px);
        }

        .login-title {
          color: #4a5568;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-align: center;
        }

        .login-subtitle {
          color: #718096;
          text-align: center;
          margin-bottom: 30px;
          font-size: 1rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          position: relative;
        }

        .login-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .login-input:focus {
          border-color: #667eea;
          outline: none;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .login-type-buttons {
          display: flex;
          gap: 10px;
        }

        .login-type-button {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: #edf2f7;
          color: #4a5568;
        }

        .login-type-button.active {
          background-color: #667eea;
          color: white;
        }

        .error-message {
          color: #e53e3e;
          text-align: center;
          font-size: 0.9rem;
        }

        .login-submit-button {
          width: 100%;
          padding: 12px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .login-submit-button:hover {
          background: #5a67d8;
          transform: translateY(-2px);
        }

        .signup-link {
          margin-top: 20px;
          text-align: center;
          color: #718096;
          font-size: 0.9rem;
        }

        .signup-link-text {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-link-text:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
