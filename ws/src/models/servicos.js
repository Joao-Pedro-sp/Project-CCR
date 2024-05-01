const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicos = new Schema({
  igrejaId: {
   type: mongoose.Types.ObjectId,
   ref: 'Igreja',
   required: true
  },
  descrisao: {
    type: String,
    required: true
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
  titulo: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Ativo', 'Inativo', 'Excluido'],
    default: 'Ativo'
  },
  recorrencia: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Servicos', servicos);
