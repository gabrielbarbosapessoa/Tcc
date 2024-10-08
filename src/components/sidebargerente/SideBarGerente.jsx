// SideBarGerente.jsx
import React from 'react';
import './SideBarGerente.css';

const SideBarGerente = () => {
  return (
    <aside className="sidebar">
     <a href="/"> <h2 className="sidebar-logo">Lanchonete</h2></a>
      <ul>
        <li><a href="/pedidos" className="active">Pedidos</a></li>
        <li><a href="/produtos">Produtos</a></li>
        <li><a href="/funcionario">Funcionários</a></li>
      </ul>
      <h2 className="sair"><a href="/Login">Sair</a></h2>
    </aside>
  );
};

export default SideBarGerente;
