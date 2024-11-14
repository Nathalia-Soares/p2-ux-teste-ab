import React from 'react';
import './header.css';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      <p>Seja muito bem-vindo à</p>
      <div className="header-logo">
        <img src={logo} alt="Logo da padaria" />
      </div>
      <h1>MINHA PADARIA</h1>
    </header>
  );
}

export default Header;
