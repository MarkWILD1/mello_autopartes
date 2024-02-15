const Cliente = require('../models/clienteModels')


//Mostrar todos los clientes
const getClientes = async (req,res) => {
    console.log('Cliente')

    try{
        const clientes = await Cliente.find()
        res.status(200).json({
            status: 'success',
            data: {
                clientes: clientes
            }
        })
    } catch (error) {
        console.log(error);
    }
}

//Agregar nuevo cliente
const addCliente = async (req,res) => {
    const body = req.body
    try {
        //Guardar cliente en DB
        const nuevoCliente = await Cliente.create(body)

        res.status(201).json({
            status: 'Success, client saved!',
            data: {
                cliente: nuevoCliente
            }
        })
    } catch (error) {
        console.log(error)
    }
}

//Mostrar cliente por Id
const getClienteById = async (req, res) => {
    try {
        const _id = req.params._id;
        console.log("Fetching piece with ID:", _id);
        const cliente = await Curvaa.findById({_id: _id});
        console.log("Fetched piece:", cliente);
        return res.json(cliente);
    } catch (err) {
        return res.json(err)
    }
}

//Borrar Cliente
const deleteClienteById = async (req,res) => {

    const _id = req.params

    try {
        const deleteCliente = await Cliente.findByIdAndDelete(_id)

        if(!deleteCliente) {
            return res.status(404).json({
                status: 'Failed',
                msg:"No se ha encontrado el cliente"
            })
        }

        res.status(200).json({
            status:'Success',
            msg:`Se ha eliminado correctamente al cliente con id ${_id}`,
            data: {
                deleteCliente,
            }
        })
    } catch (error) {
        console.error('Error deleting piece:', error);
        res.status(500).json({
            status: 'Error',
            message: 'Internal server error',
        })
    }
}

//Editar Cliente
const updateCliente = async (req,res) => {
    const _id = req.params
    const { nombre, celular, email, direccion } = req.body

    try {
        const updateCliente = await Cliente.findByIdAndUpdate(
            _id,
            req.body,
            { new: true }
        );

        if(!updateCliente) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Cliente no encontrado'
            })
        }

        res.status(200).json({
            status: 'Success',
            data: {
                updateCliente
            }
        })
    } catch (error) {
        console.log("Error updating producto", error);
        res.status(500).json({
            status: 'Error',
            message: 'Algo salio mal en el servidor'
        })
    }
}


module.exports = {
    getClientes,
    addCliente,
    getClienteById,
    deleteClienteById,
    updateCliente
}