class UsuarioDao {

    constructor(db) {
        this._db = db;
    }

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    db.collection.find( {
                        email: "?"
                    })
                `,
                [email],
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