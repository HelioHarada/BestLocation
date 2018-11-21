// importação módulo mongoose
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/bdBestLocation'
module.exports = mongoose.connect(url, { useNewUrlParser: true })

// conexão no banco
//mongoose.connect('mongodb://localhost/bdBestLocation', { useNewUrlParser: true } );

// ouvindo eventos que ocorrem em sucesso ou erro de conexão
mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados.');
});

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão: ' + err);
});

mongoose.connection.on('disconnect', (err) => {
    console.log('Deconectado :(');
});