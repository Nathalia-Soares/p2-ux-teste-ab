import React from 'react';
import './menu.css';

function Menu() {
  return (
    <section className="menu">
      <h2>Cardápio</h2>
      <div className="menu-categories">
        {/* Componentes de categorias e itens podem ser feitos aqui */}
        <div className="category">
          <h3>Bebidas</h3>
          <ul>
            <li>2 - Cafezinho</li>
            <li>4 - Média</li>
            {/* ... demais itens */}
          </ul>
        </div>
        <div className="category">
          <h3>Pães</h3>
          <ul>
            <li>7 - Pão com Manteiga</li>
            {/* ... demais itens */}
          </ul>
        </div>
        {/* Outras categorias */}
      </div>
    </section>
  );
}

export default Menu;
