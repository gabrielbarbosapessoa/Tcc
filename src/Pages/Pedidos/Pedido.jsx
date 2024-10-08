import React, { useState } from 'react';
import './Pedido.css';
import SideBarGerente from '../../components/sidebargerente/SideBarGerente';

export const Pedido = () => {
  const [pedidos, setPedidos] = useState([
    { id: 577, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Pix', status: 'Recebido' },
    { id: 57, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Cartão', status: 'Recebido' },
    { id: 66, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Pix', status: 'Recebido' },
    { id: 60, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Pix', status: 'Recebido' },
    { id: 679, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Pix', status: 'Recebido' },
    { id: 67, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Pix', status: 'Recebido' },
    { id: 43, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Pix', status: 'Recebido' },
    { id: 689, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Pix', status: 'Recebido' },
    { id: 58, data: '23/09/2022', emissor: 'Nome', email: 'example@example', metodo: 'Pix', status: 'Recebido' },
  ]);

  const [isEditing, setIsEditing] = useState(false); 
  const [currentPedido, setCurrentPedido] = useState(null);

  const handleEditClick = (pedido) => {
    setIsEditing(true);
    setCurrentPedido({ ...pedido }); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPedido({
      ...currentPedido,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    const updatedPedidos = pedidos.map((pedido) =>
      pedido.id === currentPedido.id ? currentPedido : pedido
    );
    setPedidos(updatedPedidos); 
    setIsEditing(false); 
  };

  return (
    <div className="container">
      <SideBarGerente />
      <main className="main-content">
        <h1>Pedidos</h1>

        {isEditing && (
          <div className="edit-form">
            <h2>Editar Pedido</h2>
            <input
              type="text"
              name="id"
              value={currentPedido.id}
              disabled
              onChange={handleInputChange}
              placeholder="ID"
            />
            <input
              type="text"
              name="data"
              value={currentPedido.data}
              onChange={handleInputChange}
              placeholder="Data"
            />
            <input
              type="text"
              name="emissor"
              value={currentPedido.emissor}
              onChange={handleInputChange}
              placeholder="Emissor"
            />
            <input
              type="text"
              name="email"
              value={currentPedido.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="metodo"
              value={currentPedido.metodo}
              onChange={handleInputChange}
              placeholder="Método"
            />
            <input
              type="text"
              name="status"
              value={currentPedido.status}
              onChange={handleInputChange}
              placeholder="Status"
            />
            <button onClick={handleSaveClick}>Salvar</button>
          </div>
        )}

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Emissor</th>
              <th>Email</th>
              <th>Método</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td className="id">{pedido.id}</td>
                <td>{pedido.data}</td>
                <td>{pedido.emissor}</td>
                <td>{pedido.email}</td>
                <td>{pedido.metodo}</td>
                <td>{pedido.status}</td>
                <td>
                  <button onClick={() => handleEditClick(pedido)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Pedido;