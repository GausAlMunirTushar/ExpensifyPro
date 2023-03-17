const userModel = require('../models/userModel');
// Login
const login = async (req, res) => {
    try {
        let {email, password} = req.body
        const user = await userModel.findOne({email, password})
        if(!user){
           return res.status(404).json('User Not Found')
        }
        else{
            res.status(200).json({
                success: true,
                user,
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

// Register Controller
const register = async (req, res) => {
    const reqBody = req.body
    try {
        const newUser = new userModel(reqBody);
        await newUser.save();
        res.status(201).json({
            success: true,
            newUser,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
        })
        console.log(error)
    }
}

module.exports = {login, register};