import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './contexts/CartContext';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Header from './components/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/LoginPage';
import Profile from './pages/Profile';
import AdminPage from './pages/Admin';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='Products' element={< Products/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={< Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;

