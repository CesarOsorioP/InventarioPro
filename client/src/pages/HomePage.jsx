import React, { useState } from 'react';
import '../styles/Home.css';
import { FaEye, FaEdit, FaTrash, FaBox, FaUsers, FaBell, FaSearch, FaCog, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Home = () => {
  const [currentView, setCurrentView] = useState('productos');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [alerts, setAlerts] = useState([
    { id: 1, text: 'Mouse inalámbrico tiene solo 12% de stock disponible', completed: false },
    { id: 2, text: 'Laptop Dell se vendió mucho, considera comprar más', completed: false },
    { id: 3, text: 'Mouse inalámbrico lleva mucho tiempo en stock, considera comprar menos', completed: false },
  ]);

  const toggleAlert = (id) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, completed: !alert.completed } : alert
    ));
  };

  const products = [
    { name: 'Laptop Dell', category: 'Electrónicos', currentStock: 15, totalStock: 50, percentage: '30%', price: '$800', movement: 'Alto' },
    { name: 'Mouse Inalámbrico', category: 'Accesorios', currentStock: 3, totalStock: 25, percentage: '12%', price: '$25', movement: 'Bajo' },
    { name: 'Teclado Mecánico', category: 'Accesorios', currentStock: 12, totalStock: 30, percentage: '40%', price: '$120', movement: 'Medio' },
  ];

  const renderView = () => {
    switch(currentView) {
      case 'productos':
        return (
          <div className="content-area">
            <div className="alertas-section">
              <h2>Alertas del Sistema</h2>
              <ul className="alertas-list">
                {alerts.map(alert => (
                  <li key={alert.id} className="alerta-item">
                    <input
                      type="checkbox"
                      checked={alert.completed}
                      onChange={() => toggleAlert(alert.id)}
                      className="alerta-checkbox"
                    />
                    <span className={`alerta-text ${alert.completed ? 'completed' : ''}`}>
                      {alert.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="productos-section">
              <h2>Gestión de Productos</h2>
              <div className="table-container">
                <table className="productos-table">
                  <thead>
                    <tr>
                      <th>PRODUCTO</th>
                      <th>CATEGORÍA</th>
                      <th>STOCK ACTUAL</th>
                      <th>STOCK TOTAL</th>
                      <th>% DISPONIBLE</th>
                      <th>PRECIO</th>
                      <th>MOVIMIENTO</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td><strong>{product.name}</strong></td>
                        <td>{product.category}</td>
                        <td>{product.currentStock}</td>
                        <td>{product.totalStock}</td>
                        <td>{product.percentage}</td>
                        <td>{product.price}</td>
                        <td>{product.movement}</td>
                        <td className="acciones-cell">
                          <button className="action-btn view-btn">
                            <FaEye />
                          </button>
                          <button className="action-btn edit-btn">
                            <FaEdit />
                          </button>
                          <button className="action-btn delete-btn">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'usuarios':
        return (
          <div className="content-area full-width">
            <h2>Gestión de Usuarios</h2>
            <p>Contenido de usuarios aparecerá aquí</p>
          </div>
        );
      case 'alertas':
        return (
          <div className="content-area full-width">
            <h2>Alertas del Sistema</h2>
            <ul className="alertas-list">
              {alerts.map(alert => (
                <li key={alert.id} className="alerta-item">
                  <input
                    type="checkbox"
                    checked={alert.completed}
                    onChange={() => toggleAlert(alert.id)}
                    className="alerta-checkbox"
                  />
                  <span className={`alerta-text ${alert.completed ? 'completed' : ''}`}>
                    {alert.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Navbar superior */}
      <nav className="top-navbar">
        <div className="navbar-content">
          <div className="navbar-brand">
            <span className="inventario-icon">📦</span>
            <h1 className="navbar-title">Sistema de Inventario</h1>
          </div>
          
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="navbar-actions">
            <div className="user-menu-wrapper">
              <button 
                className="user-btn"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <FaUserCircle className="user-icon" />
              </button>
              
              {showUserMenu && (
                <div className="user-dropdown">
                  <button className="dropdown-item">
                    <FaUserCircle /> Editar perfil
                  </button>
                  <button className="dropdown-item">
                    <FaCog /> Configuraciones
                  </button>
                </div>
              )}
            </div>
            
            <button className="logout-btn">
              <FaSignOutAlt />
            </button>
          </div>
        </div>
      </nav>

      <div className="main-layout">
        {/* Barra lateral */}
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li 
              className={`menu-item ${currentView === 'productos' ? 'active' : ''}`}
              onClick={() => setCurrentView('productos')}
            >
              <FaBox className="menu-icon" />
              <span>Productos</span>
            </li>
            <li 
              className={`menu-item ${currentView === 'usuarios' ? 'active' : ''}`}
              onClick={() => setCurrentView('usuarios')}
            >
              <FaUsers className="menu-icon" />
              <span>Usuarios</span>
            </li>
            <li 
              className={`menu-item ${currentView === 'alertas' ? 'active' : ''}`}
              onClick={() => setCurrentView('alertas')}
            >
              <FaBell className="menu-icon" />
              <span>Alertas</span>
            </li>
          </ul>
        </aside>

        {/* Contenido principal */}
        <main className="main-content">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default Home;