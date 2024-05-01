const mongoose = require('mongoose');
const colaborador = require('../colaborador');
const Schema = mongoose.Schema;

const colaboradorServicos = new Schema({
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

module.exports = mongoose.model('ColaboradorServicos', colaboradorServicos);
