const mongoose = require('mongoose');
const colaborador = require('../colaborador');
const Schema = mongoose.Schema;

const igrejaBeneficiario = new Schema({
  igrejaId: {
   type: mongoose.Types.ObjectId,
   ref: 'Igreja',
   required: true
  },
  beneficiarioId: {
    type: mongoose.Types.ObjectId,
    ref: 'Beneficiario',
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

module.exports = mongoose.model('IgrejaBeneficiario', igrejaBeneficiario);
