import React from 'react';
import "../../styles/Landing.css";

const Landing = () => {
  return (
    <div>
      <header className="header">
        <h1>MiEmpresa</h1>
        <nav>
          <ul>
            <li><a href="#features">Características</a></li>
            <li><a href="#about">Acerca</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Bienvenido a nuestra solución digital</h2>
        <p>Ofrecemos herramientas modernas para potenciar tu negocio.</p>
        <a href="#features">Conócenos</a>
      </section>

      <section id="features">
        <h3>Características</h3>
        <ul>
          <li>⚡ Rápido y eficiente</li>
          <li>🔒 Seguro</li>
          <li>📱 Adaptable a móviles</li>
        </ul>
      </section>

      <section id="about">
        <h3>Acerca de Nosotros</h3>
        <p>Somos una startup dedicada a ofrecer soluciones tecnológicas simples y efectivas para empresas en crecimiento.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 MiEmpresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Landing;
