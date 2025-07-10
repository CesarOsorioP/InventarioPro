const mongoose = require('mongoose');

const alertaSchema = new mongoose.Schema({
  producto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: true
  },
  stockMinimo: {
    type: Number,
    required: true
  },
  stockMaximo: {
    type: Number,
    required: true
  },
  notificado: {
    type: Boolean,
    default: false
  },
  ultimaNotificacion: {
    type: Date
  }
});

module.exports = mongoose.model('Alerta', alertaSchema); 