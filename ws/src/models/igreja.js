const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const igreja = new Schema({
  nome: {
    type:String,
    required: [true, 'Nome é obrigatorio']
  },
  foto: {
    type: String,
    required: true
  },
  capa: {
    type: String,
    required: true
  },
  email: {
    type:String,
    required: [true, 'E-mail é obrigatorio']
  },
  senha: {
    type: String,
    default: null,
  },
  telefone: {
    type: String,
    required: true
  },
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    pais: String,
  },
  geo: {
    type: String,
    coodinates: Array,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  }
});

igreja.index({ geo: '2dsphere' });

module.exports = mongoose.model('Igreja', igreja);
