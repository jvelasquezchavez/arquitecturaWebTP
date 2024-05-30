const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CursoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: String
});

module.exports = mongoose.model('Curso', CursoSchema);