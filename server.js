var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan'); 
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
//var Usuario = require('./models/user');

const app = express();
const port = 8080;

mongoose.connect('mongodb://localhost/bdBestLocation', { useNewUrlParser: true } );

app.use(express.static(__dirname + '/public')); //definir a localização dos arquivos estáticos /public/img será /img for users
app.use(morgan('dev'));     // registrar cada requisição no console
app.use(bodyParser.urlencoded({'extended':'true'}));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));     // parse application/vnd.api+json como json
app.use(methodOverride());

// app.use(express.static('dist'));

// routes ======================================================================
require('./app/routes.js')(app);

app.listen(port, () => console.log(`App listening on port ${port}!`));

//Definindo as rotas
// var router = express.Router(); //Intercepta todas as rotas

// router.route('/usuarios')

//     .post(function(req, res){
//         var usuario = new Usuario ();
//         usuario.nome = req.body.nome;
//         usuario.senha = req.body.senha;

//         usuario.save(function(error){
//             if(error)
//                 res.send("Erro ao salvar usuario" + error);
            
//             res.status(201).json({message:"Usuario inserido com sucesso!"});
//         });
//     })

//     .get(function(req, res){
//         Usuario.find(function(err, users){
//             if(err)
//                 res.send(err);

//             res.status(200).json({
//                 message:"Retorno de todos os usuarios",
//                 todosUsuarios:users
//             });
//         });
//     });
