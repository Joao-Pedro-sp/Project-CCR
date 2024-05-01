const mongoose = require('mongoose');
const colaborador = require('../colaborador');
const Schema = mongoose.Schema;

const igrejaColaborador = new Schema({
  igrejaId: {
   type: mongoose.Types.ObjectId,
   ref: 'Igreja',
   required: true
  },
  colaboradorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Colaborador',
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Ativo', 'Inativo'],
    default: 'Ativo'
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('IgrejaColaborador', igrejaColaborador);
