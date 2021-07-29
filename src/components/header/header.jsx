import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className='navbar navbar-dark bg-dark shadow-sm'>
      <div className='flex-container'>
        <div className='logo'>
          <img className='logo-icon' src='' />
          <h1>Shop</h1>
        </div>
        <nav className='nav'>
          <ul>
            <Link className='link' to='/'>
              Products
            </Link>
            <Link className='link' to='/add-new-product'>
              Add New Product
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
