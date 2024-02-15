const userModel = require('../models/usersModel')


const getUsers = async (req, res) => {
    console.log("Users")

    try {
        const users = await userModel.find()
        res.status(200).json({
            status: 'success',
            data: {
                users: users
            }
        })
    } catch (error) {

    }
}

module.exports(
    getUsers
)