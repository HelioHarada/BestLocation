var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imovelSchema = new Schema ({
    titulo: {
        type: String,
        default: ''
    },
    endereco: {
        type: String,
        default: ''
    },
    descricao: {
        type: String,
        default: ''
    },
    preco: {
        type: Number,
        default: '0.00'
    }
});

mongoose.model('Imovel', imovelSchema);