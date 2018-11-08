var mongoose = require('mongoose');

module.exports = mongoose.model('Imovel', {
    titulo: {
       type: String,
       default: ''
    },
    endereco: {
        type: String,
        default: ''
    },
    descricao : {
        type: String,
        default: ''
    },
    preco: {
        type: Number,
        default: '0.00'
    }
});