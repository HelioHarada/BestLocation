var Todo = require('./models/todo');
var Imovel = require('./models/imovel');
var User = require('./models/user')


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

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) {
                res.send(err);
            }

            res.json(imoveis); // return all todos in JSON format
        });
    };

    // get all todos
    app.get('/api/imoveis', function (req, res) {
        // use mongoose to get all todos in the database
        getImoveis(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/imoveis', function (req, res) {
        
        Imovel.create({
            titulo: req.body.text,
            endereco: req.body.text,
            descricao: req.body.text
        }, function (err, imovel) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getImoveis(res);
        });

    });

    // delete a todo
    app.delete('/api/imoveis/:imovel_id', function (req, res) {
        Imovel.remove({
            _id: req.params.imovel_id
        }, function (err, imovel) {
            if (err)
                res.send(err);

            getImoveis(res);
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