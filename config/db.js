const mongoose = require('mongoose');

const conncetDB = async() => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Base de Datos Conectada');
}

module.exports = conncetDB;