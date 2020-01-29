const mongoose = require('../../config/database');
//const db = require('../../config/database');

const usuarioSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        uniqueItems: true
    },
    senha: {
        type: String,
        require: true
    }
});


const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;