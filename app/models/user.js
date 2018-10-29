var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    nome : String,
    email : String,
    senha : String
});