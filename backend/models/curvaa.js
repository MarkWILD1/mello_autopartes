const mongoose = require('mongoose')
const { UUID } = require('mongodb')

const curvaA = new mongoose.Schema({
    id_pieza: UUID,
    nombre_pieza: String,
    valor_costo: Number,
    img_pieza: String,
    descripcion: String,
    stock: Number
})

const Curvaa = mongoose.model('Curvaa', curvaA)

module.exports = Curvaa