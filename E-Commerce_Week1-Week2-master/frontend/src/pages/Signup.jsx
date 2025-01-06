import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p className="subtitle">Join us today! Please enter your details</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              disabled={loading}
            />
          </div>
          
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              disabled={loading}
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              disabled={loading}
              minLength="6"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              disabled={loading}
              minLength="6"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>

      <style>{`
        .signup-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          padding: 20px;
        }

        .signup-box {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          backdrop-filter: blur(10px);
        }

        h2 {
          color: #1f2937;
          font-size: 2rem;
          margin-bottom: 8px;
          text-align: center;
        }

        .subtitle {
          color: #6b7280;
          text-align: center;
          margin-bottom: 24px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        input:focus {
          border-color: #6366f1;
          outline: none;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        input:disabled {
          background-color: #f3f4f6;
          cursor: not-allowed;
        }

        .signup-button {
          width: 100%;
          padding: 12px;
          background: #6366f1;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signup-button:hover:not(:disabled) {
          background: #4f46e5;
          transform: translateY(-1px);
        }

        .signup-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .error-message {
          color: #ef4444;
          margin-bottom: 16px;
          text-align: center;
          font-size: 0.875rem;
          padding: 8px;
          background-color: #fee2e2;
          border-radius: 6px;
        }

        .login-link {
          margin-top: 24px;
          text-align: center;
          color: #6b7280;
        }

        .login-link a {
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
        }

        .login-link a:hover {
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .signup-box {
            padding: 24px;
          }

          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;

