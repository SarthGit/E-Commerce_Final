import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home, Package, ChevronDown, Sun, Moon, User } from 'lucide-react';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added to track login status

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-icon">
              <Package size={24} />
            </span>
            <span>Sparkly</span>
          </Link>
        </h1>
        <nav className="nav">
          <Link to="/" className="nav-link">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <div className="dropdown">
            <button 
              className="dropdown-button"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <Package size={18} />
              <span>Products</span>
              <ChevronDown size={14} className={`chevron ${isProductsOpen ? 'open' : ''}`} />
            </button>
            {isProductsOpen && (
              <div className="dropdown-menu">
                <Link to="/products" className="dropdown-item">All Products</Link>
                <Link to="/products/new" className="dropdown-item">New Arrivals</Link>
                <Link to="/products/categories" className="dropdown-item">Categories</Link>
              </div>
            )}
          </div>
          {/* Changed this section to show Login or Profile based on isLoggedIn */}
          {!isLoggedIn ? (
            <Link to="/login" className="nav-link" onClick={() => setIsLoggedIn(true)}>
              {/* Simulate login when clicked for this example */}
              <User size={18} />
              <span>Login</span>
            </Link>
          ) : (
            <Link to="/profile" className="nav-link">
              <User size={18} />
              <span>Profile</span>
            </Link>
          )}
          <Link to="/cart" className="cart-button">
            <ShoppingCart size={18} />
            <span>Cart</span>
          </Link>
          <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
      <style>{`
        .header {
          background: linear-gradient(to right, #6d28d9, #4f46e5);
          color: white;
          padding: 1rem;
          transition: all 0.3s ease;
        }
        .header.scrolled {
          padding: 0.5rem 1rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .logo-icon {
          background-color: white;
          color: #6d28d9;
          border-radius: 50%;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-link, .dropdown-button, .cart-button, .theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: white;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 0.25rem;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .nav-link:hover, .dropdown-button:hover, .cart-button:hover, .theme-toggle:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: #f0f0f0;
        }
        .dropdown {
          position: relative;
        }
        .dropdown-button {
          cursor: pointer;
          background: none;
          border: none;
          font-size: 1rem;
        }
        .chevron {
          transition: transform 0.3s ease;
        }
        .chevron.open {
          transform: rotate(180deg);
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          border-radius: 0.25rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 200px;
          z-index: 10;
        }
        .dropdown-item {
          display: block;
          padding: 0.5rem 1rem;
          color: #4a5568;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        .dropdown-item:hover {
          background-color: #f7fafc;
        }
        .cart-button {
          background-color: white;
          color: #6d28d9;
        }
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav {
            margin-top: 1rem;
            flex-wrap: wrap;
          }
        }
        body.dark-mode {
          background-color: #1a202c;
          color: #e2e8f0;
        }
        body.dark-mode .header {
          background: linear-gradient(to right, #4c1d95, #3c366b);
        }
        body.dark-mode .dropdown-menu {
          background-color: #2d3748;
        }
        body.dark-mode .dropdown-item {
          color: #e2e8f0;
        }
        body.dark-mode .dropdown-item:hover {
          background-color: #4a5568;
        }
        body.dark-mode .cart-button {
          background-color: #2d3748;
          color: #e2e8f0;
        }
      `}</style>
    </header>
  );
};

export default Header;


