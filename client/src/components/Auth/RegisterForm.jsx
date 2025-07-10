import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import '../../styles/Auth.css';

const RegisterForm = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeJWT = 'ejemplo.jwt.registro';
    login(fakeJWT);
  };

  const handleGoogleRegister = () => {
    const fakeGoogleJWT = 'google.jwt.simulado';
    login(fakeGoogleJWT);
  };

  return (
    <div className="auth-wrapper">
    <div className="background-layer" />
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
  <svg
    width="100"
    height="100"
    viewBox="0 0 20.18 20.18"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g id="add-user-circle" transform="translate(-1.982 -1.979)">
      <path
        id="secondary"
        fill="#2563EB"
        d="M7,19.5a9,9,0,0,0,9.94,0A5,5,0,0,0,7,19.5Z"
      ></path>
      <path
        id="primary"
        d="M13,7.13A3.66,3.66,0,0,0,12,7a4,4,0,1,0,3.46,6"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.615"
      ></path>
      <path
        id="primary-2"
        d="M12,15a5,5,0,0,0-5,4.5,9,9,0,0,0,9.94,0A5,5,0,0,0,12,15Zm5-6h4M19,7v4"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.615"
      ></path>
      <path
        id="primary-3"
        d="M20.48,15a8.86,8.86,0,0,1-2.12,3.36A9,9,0,1,1,16,3.94"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.615"
      ></path>
    </g>
  </svg>
</div>

        <h2 className="auth-title">Registrarse</h2>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type={showPass ? 'text' : 'password'}
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <div className="input-icon right" onClick={() => setShowPass(!showPass)}>
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button type="submit" className="btn-blue">Registrarse</button>

        <button type="button" className="btn-google" onClick={handleGoogleRegister}>
          <FaGoogle /> Registrarse con Google
        </button>

        <p className="register-text">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default RegisterForm;