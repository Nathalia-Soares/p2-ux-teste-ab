import React from 'react';
import { FaCookieBite, FaPizzaSlice, FaShoppingBag, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><FaCookieBite /> Doces</li>
        <li><FaPizzaSlice /> Salgados</li>
        <li><FaShoppingBag /> Encomendas</li>
        <li><FaEnvelope /> Contato</li>
        <li><FaBriefcase /> Trabalhe Conosco</li>
      </ul>
    </nav>
  );
}

export default Navbar;
