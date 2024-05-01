const mongoose = require('mongoose');
const colaborador = require('../colaborador');
const Schema = mongoose.Schema;

const agendamento = new Schema({
  beneficiarioId: {
   type: mongoose.Types.ObjectId,
   ref: 'Beneficiario',
   required: true
  },
  igrejaId: {
    type: mongoose.Types.ObjectId,
    ref: 'Igreja',
    required: true
  },
  servicoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Servicos',
    required: true
   },
   colaboradorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Colaborador',
    required: true
   },
   data: {
    type: Date,
    required: true
   },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Agendamento', agendamento);
