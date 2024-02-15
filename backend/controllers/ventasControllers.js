const Venta = require('../controllers/ventasControllers')


// Función para obtener ventas por fecha
const obtenerVentasPorFecha = async (req, res) => {
    try {
        const fechaSeleccionada = req.body.fecha; // Suponiendo que la fecha viene en el cuerpo de la solicitud

        // Realiza la consulta a la base de datos para obtener las ventas por fecha
        const ventasPorFecha = await Venta.find({
            fechaHora: {
                $gte: new Date(fechaSeleccionada), // Fecha seleccionada
                $lt: new Date(fechaSeleccionada + 'T23:59:59') // Hasta el final del día seleccionado
            }
        });

        // Calcula la cantidad total de ventas para esa fecha
        const cantidadVentas = ventasPorFecha.length;

        res.status(200).json({
            status: 'success',
            data: {
                ventasPorFecha: ventasPorFecha,
                cantidadVentas: cantidadVentas
            }
        });
    } catch (error) {
        console.error('Error al obtener ventas por fecha:', error);
        res.status(500).json({
            status: 'error',
            message: 'Error al obtener ventas por fecha'
        });
    }
};

module.exports = { obtenerVentasPorFecha };