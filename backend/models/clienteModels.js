const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    nombre: String,
    celular: Number,
    email: String,
    direccion: String
})

const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = Cliente 