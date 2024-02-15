const Curvaa = require('../models/curvaa')



//Mostrar todas las piezas
const getCurvaAPieces = async (req, res) => {
    console.log("Curva A")

    try {
        const pieces = await Curvaa.find()
        res.status(200).json({
            status: 'success',
            data: {
                pieces: pieces
            }
        })
    } catch (error) {

    }
}

//Mostrar pieza por Id
const getCurvaAPieceById = async (req, res) => {
    try {
        const _id = req.params._id;
        console.log("Fetching piece with ID:", _id);
        const pieza = await Curvaa.findById({_id: _id});
        console.log("Fetched piece:", pieza);
        return res.json(pieza);
    } catch (err) {
        return res.json(err)
    }
}

//Guardar Pieza
const saveCurvaAPiece = async (req, res) => {
    const body = req.body
    try {
        //Register on DB
        const newPiece = await Curvaa.create(body)

        res.status(201).json({
            status: 'Success - Piece saved!',
            data: {
                piece: newPiece
            }
        })
    } catch (e) {
        console.log(e);
    }
}

//Eliminar pieza
const deleteCurvaAPieceById = async (req, res) => {

    const { _id } = req.params

    try {
        // Use Mongoose to find and delete the piece by ID
        const deletedPiece = await Curvaa.findByIdAndDelete(_id);

        if (!deletedPiece) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Piece not found, cannot be deleted.',
            });
        }

        res.status(200).json({
            status: 'Success',
            message: 'Piece deleted successfully.',
            data: {
                deletedPiece,
            },
        });
    } catch (error) {
        console.error('Error deleting piece:', error);
        res.status(500).json({
            status: 'Error',
            message: 'Internal server error',
        });
    }
}

//Editar pieza
const updatePiece = async (req, res) => {
    const { _id } = req.params; 
    const { nombre_pieza, valor_costo, img_pieza, descripcion, stock } = req.body;

    try {
        const updatedPiece = await Curvaa.findByIdAndUpdate(
            _id, 
            req.body,
            { new: true }
        );

        if (!updatedPiece) {
            return res.status(404).json({
                status: 'Failed',
                message: 'The piece was not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                piece: updatedPiece,
            },
        });
    } catch (error) {
        console.error('Error updating piece:', error);
        res.status(500).json({
            status: 'Error',
            message: 'Internal server error',
        });
    }
}

//Buscar pieza por nombre
const searchPieces = async (req, res) => {
    try {
        const { query } = req.query;

        // Realiza la búsqueda en la base de datos utilizando Mongoose
        const pieces = await Curvaa.find({
            $or: [
                { nombre_pieza: { $regex: query, $options: 'i' } }, // Búsqueda por nombre de pieza (insensible a mayúsculas y minúsculas)
                { descripcion: { $regex: query, $options: 'i' } }    // Búsqueda por descripción (insensible a mayúsculas y minúsculas)
            ]
        });

        // Devuelve los resultados de la búsqueda
        res.status(200).json({
            status: 'success',
            data: {
                pieces: pieces
            }
        });
    } catch (error) {
        console.error('Error searching pieces:', error);

        // Devuelve un mensaje de error con detalles específicos
        res.status(500).json({
            status: 'error',
            message: 'Error searching pieces',
            error: error.message // Proporciona el mensaje de error específico
        });
    }
};


module.exports = {
    getCurvaAPieces,
    getCurvaAPieceById,
    saveCurvaAPiece,
    deleteCurvaAPieceById,
    updatePiece,
    searchPieces
}