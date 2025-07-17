// controllers/userController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

// exports.getUserById = async (req, res) => {
//     const user  = await User.findById(req.params.id);
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     } else {
//         res.json(user);
//     }     
// }                                                                 

exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};
