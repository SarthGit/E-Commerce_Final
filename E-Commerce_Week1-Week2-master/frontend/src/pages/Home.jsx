import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Zap, Shield, Headphones } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-container">
      {/* Top Bar */}
      <div className="top-bar">
        <span>Sparkly: Start a free trial and enjoy 1 month of Shopify for $1/month!</span>
        <a href="#" className="cta-link">
          Get it now
        </a>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">Sparkly</Link>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/demos">Demos</Link>
            <Link to="/templates">Templates</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/support">Support</Link>
          </nav>
          <button className="purchase-btn">
            Purchase now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1>
              Explore Sparkly's impact on your <span className="highlight">digital presence</span>
            </h1>
            <p>
              Elevate your business with Sparkly, a dependable solution you can count on. We offer swift and dedicated support, freeing you to prioritize what's important. Leave the rest to us.
            </p>
            <div className="cta-buttons">
              <button className="primary-btn">
                View Demos <ChevronRight size={20} />
              </button>
              <button className="secondary-btn">
                Buy Now
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://img.freepik.com/free-photo/modern-man-tech-collection-wooden-desk-headphones-sunglasses-smartphone-generated-by-ai_24640-92923.jpg?semt=ais_hybrid"
              alt="Product Showcase"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Sparkly?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <Star size={40} />
              <h3>Premium Quality</h3>
              <p>Our templates are crafted with attention to detail and modern design principles.</p>
            </div>
            <div className="feature-item">
              <Zap size={40} />
              <h3>Lightning Fast</h3>
              <p>Optimized for speed, our templates ensure your website loads quickly and efficiently.</p>
            </div>
            <div className="feature-item">
              <Shield size={40} />
              <h3>Secure & Reliable</h3>
              <p>Built with security in mind, protecting your data and your customers.</p>
            </div>
            <div className="feature-item">
              <Headphones size={40} />
              <h3>24/7 Support</h3>
              <p>Our dedicated support team is always ready to assist you with any questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="container">
          <blockquote>
            "Sparkly has transformed our online presence. The templates are not only beautiful but also incredibly easy to customize. Their support team is top-notch!"
          </blockquote>
          <cite>- Jane Doe, CEO of TechStart</cite>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          font-family: 'Arial', sans-serif;
        }
        .top-bar {
          background-color: #000;
          color: #fff;
          font-size: 0.875rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
        }
        .cta-link {
          color: #fde047;
          font-weight: 600;
          text-decoration: underline;
        }
        .navbar {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .navbar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }
        .logo a {
          font-size: 1.875rem;
          font-weight: 700;
          color: #111;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .logo a:hover {
          color: #fbbf24;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-links a {
          font-size: 1.125rem;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #fbbf24;
        }
        .purchase-btn {
          background-color: #000;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .purchase-btn:hover {
          background-color: #1f2937;
        }
        .hero {
          padding: 4rem 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .hero.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero .container {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .hero-content {
          flex: 1;
        }
        .hero h1 {
          font-size: 3.75rem;
          font-weight: 800;
          color: #111;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .highlight {
          position: relative;
          display: inline-block;
        }
        .highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 4px;
          background-color: #fbbf24;
        }
        .hero p {
          font-size: 1.125rem;
          color: #4b5563;
          margin-bottom: 2rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
        }
        .primary-btn, .secondary-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        .primary-btn {
          background-color: #000;
          color: #fff;
        }
        .primary-btn:hover {
          background-color: #1f2937;
        }
        .secondary-btn {
          border: 2px solid #000;
          color: #000;
        }
        .secondary-btn:hover {
          background-color: #f3f4f6;
        }
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .hero-image img {
          max-width: 100%;
          height: 400px;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .features {
          background-color: #f9fafb;
          padding: 4rem 0;
        }
        .features h2 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #111;
          text-align: center;
          margin-bottom: 3rem;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .feature-item {
          background-color: #fff;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }
        .feature-item:hover {
          transform: translateY(-5px);
        }
        .feature-item svg {
          color: #fbbf24;
          margin-bottom: 1rem;
        }
        .feature-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111;
          margin-bottom: 0.5rem;
        }
        .feature-item p {
          color: #4b5563;
        }
        .testimonial {
          background-color: #000;
          color: #fff;
          padding: 4rem 0;
          text-align: center;
        }
        .testimonial blockquote {
          font-size: 1.5rem;
          font-style: italic;
          max-width: 800px;
          margin: 0 auto 1rem;
        }
        .testimonial cite {
          font-size: 1.125rem;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .hero .container {
            flex-direction: column;
          }
          .hero-content, .hero-image {
            width: 100%;
          }
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

