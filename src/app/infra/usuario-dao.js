class UsuarioDao {

    constructor(db) {
        this._db = db;
    }
    

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._db.find({
                livro: "teste2"
            },
            (erro, usuario) => {
                if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }
                    
                    return resolve(usuario);
                }
            )
        });
    }
}
    
    module.exports = UsuarioDao;
    
    /*
    
    const Usuario = mongoose.model("livros")
    
    Usuario.find({
        livro: "teste2"
    }, (err,usuario) => {
        if (err) {
            console.log('Não foi possível encontrar o usuário!');
        }
        
        console.log(usuario); 
    });
    
    this._db.get(
        `
            db.collection.find( {
                email: "?"
            })
        `,
        [email],
    */