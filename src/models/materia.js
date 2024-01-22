const mongoose = require('mongoose')

const materiaSchema = new mongoose.Schema({
  Asignatura: {
    type: String,
    required: true,
  },
  Edificio: {
    type: String,
    required: true,
  },
  Grupo: {
    type: String,
    required: true,
  },
  Jue: {
    type: String,
  },
  Lun: {
    type: String,
  },
  Mar: {
    type: String,
  },
  Mie: {
    type: String,
  },
  Profesor: {
    type: String,
    required: true,
  },
  Sab: {
    type: String,
  },
  Salon: {
    type: String,
    required: true,
  },
  Vie: {
    type: String,
  },
})

const Materia = mongoose.model('Materia', materiaSchema)

module.exports = Materia