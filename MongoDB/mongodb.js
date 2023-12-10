require('../settings');
const mongoose = require('mongoose');

function conectarMongoDb() {
    mongoose.connect(MONGO_DB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'error de conexión:'));
    db.once('open', () => {
      console.log('Conexión exitosa a MONGODB ✅');
    });
};

module.exports.conectarMongoDb = conectarMongoDb;
