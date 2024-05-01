const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
  igrejaId: {
    type: mongoose.Types.ObjectId,
    ref: 'Igreja',
    required: true
  },
  especialidades: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Servicos',
      required:true
    },
  ],
  colaboradores: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Colaborador',
      required:true
    },
  ],
  dias: {
    type: [Number],
    required:true
  },
  inicio: {
    type: [Date],
    required:true
  },
  fim: {
    type: [Date],
    required:true
  },
});

module.exports = mongoose.model('Horario', horario);
