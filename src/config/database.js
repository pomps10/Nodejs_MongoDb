//const sqlite3 = require('sqlite3').verbose();
//const bd = new sqlite3.Database('data.db');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://felipe:cesar123@cluster0-noqrp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.model()
console.log(mongoose);

/*
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);
*/




module.exports = db;
