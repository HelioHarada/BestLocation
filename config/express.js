var express = require('express');
const consign = require('consign');
var bodyParser = require('body-parser');
const path = require('path');

module.exports = () => {
    var app = express();
    app.set('port', (process.env.PORT || 8080));

    app.use(bodyParser.urlencoded({ extended: true }));    // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));  
    app.use(express.static('public')); //definir a localização dos arquivos estáticos /public

    consign({cwd: 'server'})
        .include('../app/models')
        .include('../app/controllers')
        .then('../app/routes')

        .into(app);

    return app;
}