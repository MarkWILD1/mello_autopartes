const express = require('express')

const {
    getClientes,
    addCliente,
    getClienteById,
    deleteClienteById,
    updateCliente
} = require('../controllers/clienteControllers')

const router = express.Router()

router.get('/', getClientes)

router.get('/:_id', getClienteById)

router.post('/saveCliente', addCliente)

router.patch('/:_id', updateCliente)

router.delete('/:_id', deleteClienteById)

module.exports = router