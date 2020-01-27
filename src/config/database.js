const mongoose = require('mongoose'), Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://felipe:cesar123@cluster0-noqrp.mongodb.net/primeiro?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao MongoDB: " + err)
})


////TEMOS QUE DIVIDIR AS INSTANCIAÇÃO
const livrosSchema = mongoose.Schema({
    livro: {
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
})

const usuarioSchema = mongoose.Schema({
    email: String,
    senha: String
})

var Livro = mongoose.model('livros', livrosSchema);

Livro.find({
    livro: "teste2"
}, (err,usuario) => {
    if (err) {
        console.log('Não foi possível encontrar o usuário!');
    }
    
    console.log(usuario); 
});


module.exports = mongoose.model("livros", livrosSchema);

const Usuario = mongoose.model("livros")

Usuario.find({
    livro: "teste2"
}, (err,usuario) => {
    if (err) {
        console.log('Não foi possível encontrar o usuário!');
    }
    
    console.log(usuario); 
});



/*
new Usuario({
    livro: "teste2"
}).save().then(() => {
    console.log("Usuário criado com sucesso!")
}).catch((err) => {
    console.log("Ocorreu um erro ao registrar seu livro: " + err)
})*/
