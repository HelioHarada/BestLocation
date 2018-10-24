var express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.listen(port, () => console.log(`App listening on port ${port}!`));