import React from 'react';
import './banner.css';
import banner from '../../assets/images/padaria01.png';

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Sanduíches de metro - Apenas para encomendas" />
      <p>A mais deliciosa padaria da cidade! Venha saborear nossos produtos fresquinhos e feitos com muito carinho.</p>
    </div>
  );
}

export default Banner;
