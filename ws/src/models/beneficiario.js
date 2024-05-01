const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beneficiario = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatorio']
  },
  telefone: {
    type: String,
    required: true,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
  foto: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: String,  // DD-MM-YYYY
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Ativo', 'Inativo'],
    default: 'Ativo'
  },
  sexo: {
    type: String,
    enum: ['Masculino', 'Feminino'],
    required: true
  },
  documento: {
    tipo: {
      type: String,
      enum: ['cpf', 'rg'],
      required: true
    },
    numero: {
      type: String,
      required: true
    },
  },
  quntsPessoasCasa: {
    type: Number,
    required: true
  },
  todosTrabalham: {
    type: String,
    enum: ['Sim', 'Nao'],
    required: true,
  },
  quntsCriancas: {
    type: Number,
    required: true
  },
  imovelProprio: {
    type: String,
    enum: ['Sim', 'Nao'],
    required: true
  },
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    pais: String,
  },
});

module.exports = mongoose.model('Beneficiario', beneficiario);
