var Todo = require('./models/todo');
var Imovel = require('./models/imovel');
var User = require('./models/user');

module.exports = function (app) {
    function getTodos(res) {
        Todo.find(function (err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) {
                res.send(err);
            }

            res.json(todos); // return all todos in JSON format
        });
    };

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    function getImoveis(res) {
        Imovel.find(function (err, imoveis) {

            // caso tenha erro na recuperação, envie o erro
            if (err) {
                res.send(err);
                // nada mais será executado caso haja erro
            }

            res.json(imoveis); // retorna todos imóveis no formato JSON
        });
    };

    // obter todos imóveis
    app.get('/api/imoveis', function (req, res) {
        // usa o mongoose para obter todos os imóveis do banco de dados
        getImoveis(res);
    });

    // obter imóvel por ID
    app.get('/api/imoveis/:imovel_id', function(req, res) {
        const id = req.params.imovel_id;

        Imovel.findById(id, function (err, imovel) {
            if (err){
                res.status(500).json ({
                    message: "Erro ao encontrar o imóvel: ID incorreto"
                });
            }
            else if (imovel == null) {
                res.status(400).json({
                    message: "Imóvel não encontrado"
                });
            }
            else {
                res.status(200).json({
                    message:"Imóvel encontrado",
                    imovel: imovel
                });
            }
        });
    });

    // criar (POST) imóvel
    app.post('/api/imoveis', function (req, res) {
        var imovel = new Imovel();
        imovel.titulo = req.body.titulo;
        imovel.endereco = req.body.endereco;
        imovel.descricao = req.body.descricao;

        imovel.save(function (error) {
            if (error)
                res.send("Erro ao salvar o imovel: " + error);

            res.status(201).json({ message: "Imovel inserido com sucesso" });
        });
    });

    // delete imóvel
    app.delete('/api/imoveis/:imovel_id', function (req, res) {
        Imovel.findByIdAndRemove(req.params.imovel_id, (err, imovel) => {
            if (err) return res.status(500).send(err);

            const response = {
                message : "Imovel removido com sucesso",
                id: imovel.id
            };
            return res.status(200).send(response);
        }); 
    });

    // Update (PUT) imóvel
    app.put('/api/imoveis/:imovel_id', function (req, res) {
        const id = req.params.imovel_id;
        Imovel.findById(id, function(err, imovel){
            if(err) {
                res.status(500).json({
                    message: "Erro ao encontrar o imóvel: ID incorreto"
                });
            }
            else if (imovel == null) {
                res.status(400).json({
                    message: "Imóvel não encontrado"
                });
            }
            else {
                imovel.titulo = req.body.titulo;
                imovel.descricao = req.body.descricao;
                imovel.endereco = req.body.endereco;

                imovel.save(function (error) {
                    if (error)
                        res.send("Erro ao atualizar o produto: " + error);

                    res.status(200).json({
                        message: "Produto atualizado com sucesso"
                    });
                });
            }
        });
    });

    function getUsers(res) {
        User.find(function (err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) {
                res.send(err);
            }

            res.json(users); // return all todos in JSON format
        });
    };

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/users', function (req, res) {
        // use mongoose to get all todos in the database
        getUsers(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/users', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        User.create({
            nome: req.body.text,
            email: req.body.text,
            senha: req.body.text
        }, function (err, user) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getUsers(res);
        });

    });

    // delete a todo
    app.delete('/api/users/:user_id', function (req, res) {
        User.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);

            getUsers(res);
        });
    });
};