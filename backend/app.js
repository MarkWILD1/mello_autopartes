//Third party imports
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config({ path: './config.env' })

//Local Imports
const curvaaRouter = require('./routes/curvaa')
const clienteRouter = require('./routes/clienteRouter')

const app = express() 

app.use(cors())
app.use(express.json())


//CONNECT TO MONGODB -----------------------------------------------------------------------------
mongoose.connect(process.env.DB_CONNECTION)
    .then(connection => {
        console.log("Connected to MONGODB!!!")
    })
    .catch( console.log )


//Routes
app.use('/api/v1/curvaa', curvaaRouter)
app.use('/api/v1/clientes', clienteRouter)


//App listener
app.listen(3500, () => {
    console.log("Ready to put FIRE!!")
}) 