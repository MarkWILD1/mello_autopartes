const mongoose = require('mongoose')

//Definir el esquema para los items de la venta
const itemVentaSchema = new mongoose.Schema({
    id_pieza: String,
    nombre_pieza: String,
    cantidad: Number,
    valor_unitario: Number,
    subtotal: Number
})

const ventaSchema = new mongoose.Schema({
    fechaHora: { type: Date, default: Date.now },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
    valorTotal: Number,
    items: [itemVentaSchema]
})

const Venta = mongoose.model('Venta', ventaSchema)

module.exports = Venta