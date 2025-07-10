require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Configuración de CORS (ajusta los orígenes permitidos según tu frontend)
const allowedOrigins = [
  'http://localhost:3000',
  // Agrega aquí otros orígenes permitidos
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true
}));

// Conexión a MongoDB
connectDB();

// Middleware para parsear JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend Express funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 