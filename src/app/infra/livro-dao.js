class LivroDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.create(livro,
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    return resolve();
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.find((erro, usuario) => {
                if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }
                    
                    return resolve(usuario);
                }
            )
        });

    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.findOne( {
                _id: id
            },
                (erro, livro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro!');
                    }
                    return resolve(livro);
                }
            );
        });
    }


    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.updateOne(livro,            
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.findByIdAndRemove(id,
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o livro!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = LivroDao;