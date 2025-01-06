import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/auth/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          const errorData = await response.json();
          setError(errorData.message || 'Failed to fetch profile data');
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('An error occurred. Please try again.');
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button onClick={() => {
        localStorage.removeItem('token');
        navigate('/login');
      }} className="logout-button">
        Logout
      </button>

      <style>{`
        .profile-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #1f2937;
          text-align: center;
          margin-bottom: 20px;
        }

        p {
          font-size: 1rem;
          color: #374151;
          margin-bottom: 10px;
        }

        .logout-button {
          width: 100%;
          padding: 10px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logout-button:hover {
          background: #dc2626;
        }

        .error-message {
          color: #ef4444;
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Profile;
