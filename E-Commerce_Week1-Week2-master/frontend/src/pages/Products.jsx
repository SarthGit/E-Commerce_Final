import React, { useState } from 'react';
import { ShoppingCart, Star, Search } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Products = () => {
  const [products] = useState([
    { id: 1, name: 'Wireless Earbuds', price: 59.99, rating: 4.5, image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/3/20/14aab8a6-c9ef-466c-a3ba-6448ed49ef51_ElectronicsandWearables_621KSY5FHC_MN.png' },
    { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.2, image: 'https://www.boat-lifestyle.com/cdn/shop/products/removal.ai__tmp-63679b0fb06a2_800x.png?v=1685543704' },
    { id: 3, name: 'Noise-Cancelling Headphones', price: 249.99, rating: 4.8, image: 'https://m.media-amazon.com/images/I/31x-Xz8TkbL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 4, name: 'Portable Charger', price: 39.99, rating: 4.0, image: 'https://m.media-amazon.com/images/I/51HSlB6DnGL._SX522_.jpg ' },
    { id: 5, name: 'Bluetooth Speaker', price: 79.99, rating: 4.3, image: 'https://m.media-amazon.com/images/I/71qR-qta9TL._SX679_.jpg ' },
    { id: 6, name: 'Fitness Tracker', price: 89.99, rating: 4.1, image: 'https://res.cloudinary.com/dmezmffej/image/upload/v1721388046/Frame_48098010_2_1.avif ' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      
      <div className="products-controls">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="product-rating">
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .products-container {
          background: linear-gradient(to right, #EBF4FF, #F9FAFB);
          padding: 2rem;
          min-height: 100vh;
        }
        .products-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #3B82F6;
          text-align: center;
          margin-bottom: 2rem;
        }
        .products-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .search-bar {
          display: flex;
          align-items: center;
          background-color: white;
          border-radius: 9999px;
          padding: 0.5rem 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .search-bar input {
          border: none;
          outline: none;
          margin-left: 0.5rem;
          font-size: 1rem;
        }
        .sort-select {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          border: 1px solid #E5E7EB;
          background-color: white;
          font-size: 1rem;
          outline: none;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }
        .product-card {
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        .product-image {
          height: 240px;
          overflow: hidden;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        .product-info {
          padding: 1.5rem;
        }
        .product-info h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 0.5rem;
        }
        .product-price {
          font-size: 1.125rem;
          font-weight: 700;
          color: #3B82F6;
          margin-bottom: 0.5rem;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }
        .product-rating span {
          color: #4B5563;
          font-size: 0.875rem;
        }
        .add-to-cart-btn {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          background-color: #3B82F6;
          color: white;
          padding: 0.75rem;
          border-radius: 0.375rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .add-to-cart-btn:hover {
          background-color: #2563EB;
        }
        @media (max-width: 640px) {
          .products-controls {
            flex-direction: column;
            gap: 1rem;
          }
          .search-bar, .sort-select {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;

