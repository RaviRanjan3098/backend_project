// routes/userRoutes.js
const express = require('express');
const { getAllUsers, createUser , getUserById} = require('../controllers/userController');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
// router.post('/register', getUserById);

module.exports = router;