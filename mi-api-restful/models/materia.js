const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MateriaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  curso: {
    type: String,
    ref: 'Curso',
    required: true
  },
  calificaciones: [{
    estudiante: String,
    nota: Number
  }]
});

module.exports = mongoose.model('Materia', MateriaSchema);