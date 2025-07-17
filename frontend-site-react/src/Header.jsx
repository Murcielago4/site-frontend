import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaShoppingCart } from 'react-icons/fa';

export default function Header(){
  const navigate = useNavigate();
  return (
     <header>
        <img src="/logo-name.png" alt="логотип" />
        <button className="hdrbuttons" style={{ marginLeft: '200px'}} onClick={() => navigate('/')}>Головна</button>
        <button className="hdrbuttons" onClick={() => navigate('/about')}> Про нас</button>
        <button className="hdrbuttons" onClick={() => navigate('/contact')}> Контакти</button>
        <div className="header-right" >
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size={24} /></a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer"><FaTelegramPlane size={24} /></a>
          </div>
          <div className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">3</span>
          </div>
        </div>
      </header>
  )
}