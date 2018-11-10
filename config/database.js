var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bdBestLocation', { useNewUrlParser: true } );

mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados.');
});

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão: ' + err);
});

mongoose.connection.on('disconnect', (err) => {
    console.log('Deconectado :(');
});