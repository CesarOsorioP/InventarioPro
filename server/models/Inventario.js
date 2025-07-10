const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
  producto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: true
  },
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  tipo: {
    type: String,
    enum: ['creación', 'actualización', 'eliminación', 'ajuste_stock'],
    required: true
  },
  cantidadAntes: {
    type: Number,
    required: true
  },
  cantidadDespues: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inventario', inventarioSchema); 