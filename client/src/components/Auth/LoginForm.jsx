import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import '../../styles/Auth.css';

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeJWT = 'ejemplo.jwt.login';
    login(fakeJWT);
  };

  const handleGoogleLogin = () => {
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
            viewBox="-0.08 0 20.162 20.162"
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="108"
            fill="#000000"
        >
            <g id="user-circle" transform="translate(-2 -2)">
            <path
                id="secondary"
                fill="#e11d48"
                d="M18.36,5.64A9,9,0,0,0,3,12c0,.11,0,.22,0,.32A9,9,0,0,0,7,19.5H7A5,5,0,0,1,12,15a4,4,0,1,1,4-4,4,4,0,0,1-4,4,5,5,0,0,1,5,4.48h0a9,9,0,0,0,4-7.18v-.32a9,9,0,0,0-2.64-6.34Z"
            ></path>
            <path
                id="primary"
                d="M12,15a5,5,0,0,0-5,4.5,9,9,0,0,0,9.94,0A5,5,0,0,0,12,15Zm0-8a4,4,0,1,0,4,4A4,4,0,0,0,12,7Zm0,14h0a9,9,0,0,1-9-9H3a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9Z"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.613"
            ></path>
            </g>
        </svg>
    </div>

        <h2 className="auth-title">Iniciar Sesión</h2>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="input-icon right" onClick={() => setShowPass(!showPass)}>
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button type="submit" className="btn-red">Ingresar</button>

        <button type="button" className="btn-google" onClick={handleGoogleLogin}>
          <FaGoogle /> Iniciar con Google
        </button>

        <p className="register-text">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;