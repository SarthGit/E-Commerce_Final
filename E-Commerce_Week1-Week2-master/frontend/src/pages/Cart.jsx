import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <ShoppingBag size={48} />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-content">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="item-quantity">
                <button onClick={() => updateQuantity(item.id, -1)} className="quantity-btn">
                  <Minus size={16} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="quantity-btn">
                  <Plus size={16} />
                </button>
              </div>
              <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)} className="remove-btn">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total</h3>
            <p className="total-price">${total.toFixed(2)}</p>
          </div>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      )}
      <style jsx>{`
        .cart-container {
          background-color: #f3f4f6;
          padding: 2rem;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        .cart-title {
          font-size: 2rem;
          font-weight: bold;
          color: #3b82f6;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .cart-content {
          background-color: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .empty-cart {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: #6b7280;
        }
        .empty-cart p {
          margin-top: 1rem;
          font-size: 1.2rem;
        }
        .cart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .item-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 0.25rem;
        }
        .item-details {
          flex-grow: 1;
          margin-left: 1rem;
        }
        .item-details h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .item-price {
          color: #6b7280;
        }
        .item-quantity {
          display: flex;
          align-items: center;
          margin: 0 1rem;
        }
        .quantity-btn {
          background-color: #e5e7eb;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .quantity-btn:hover {
          background-color: #d1d5db;
        }
        .item-quantity span {
          margin: 0 0.5rem;
          font-weight: 600;
        }
        .item-total {
          font-weight: 600;
          min-width: 80px;
          text-align: right;
        }
        .remove-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          transition: color 0.2s;
        }
        .remove-btn:hover {
          color: #dc2626;
        }
        .cart-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 2px solid #e5e7eb;
        }
        .cart-summary h3 {
          font-size: 1.2rem;
          font-weight: 600;
        }
        .total-price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #3b82f6;
        }
        .checkout-btn {
          display: block;
          width: 100%;
          padding: 0.75rem;
          margin-top: 1.5rem;
          background-color: #10b981;
          color: white;
          border: none;
          border-radius: 0.25rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .checkout-btn:hover {
          background-color: #059669;
        }
        @media (max-width: 640px) {
          .cart-item {
            flex-wrap: wrap;
          }
          .item-quantity, .item-total {
            margin-top: 0.5rem;
          }
          .item-total {
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;

