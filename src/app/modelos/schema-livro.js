const mongoose = require('../../config/database');
//const db = require('../../config/database');

const livrosSchema = mongoose.Schema({
    titulo: {
        type : String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    descricao: {
        type: String,
        require: false
    }
});


const Livro = mongoose.model('livros', livrosSchema);

module.exports = Livro;