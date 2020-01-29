class UsuarioDao {

    constructor(db) {
        this._db = db;
    }
    

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._db.findOne({
                email: email
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
    