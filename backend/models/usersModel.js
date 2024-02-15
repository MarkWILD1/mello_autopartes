const mongoose = require('mongoose')

const users = new mongoose.Schema({
    nombre: String,
    img: String,
    email: String,
    password: String,
})

const Users = mongoose.model('Users', users)

module.exports = Users