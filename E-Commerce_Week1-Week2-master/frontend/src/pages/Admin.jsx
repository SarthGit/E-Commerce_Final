import React, { useState } from 'react';

const AdminPage = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Unauthorized: Please login to continue.');
      return;
    }

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('price', price);
    formData.append('date', date);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/admin/add-product', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Product added successfully!');
        // Clear form fields
        setProductName('');
        setPrice('');
        setDate('');
        setDescription('');
        setImage(null);
      } else {
        setMessage(data.message || 'Failed to add product');
      }
    } catch (err) {
      console.error('Error adding product:', err);
      setMessage('Network error occurred. Please try again.');
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-panel">
        <h1 className="admin-title">Admin Dashboard</h1>
        <h2 className="admin-subtitle">Add New Product</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input
              id="productName"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="form-label">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              rows={3}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image" className="form-label">Product Image</label>
            <input
              id="image"
              type="file"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="form-file-input"
              accept="image/*"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
        {message && (
          <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>

      <style jsx>{`
        .admin-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
          padding: 20px;
        }

        .admin-panel {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
          backdrop-filter: blur(10px);
        }

        .admin-title {
          color: #2d3748;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-align: center;
        }

        .admin-subtitle {
          color: #4a5568;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }

        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 1rem;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 5px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 10px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #4299e1;
          outline: none;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
        }

        .form-file-input {
          font-size: 1rem;
          color: #4a5568;
        }

        .submit-button {
          width: 100%;
          padding: 12px;
          background: #4299e1;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background: #3182ce;
          transform: translateY(-2px);
        }

        .message {
          margin-top: 20px;
          padding: 10px;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
        }

        .success {
          background-color: #c6f6d5;
          color: #2f855a;
        }

        .error {
          background-color: #fed7d7;
          color: #c53030;
        }
      `}</style>
    </div>
  );
};

export default AdminPage;
