// controllers/authController.js

const User = require('../models/user');
const Role = require('../controllers/role');

// function to register new users with a role
exports.registerUser = (req, res) => {
    const {username, password, role} = req.body;
    const user = new User({ username, role});

    User.register(user, password, (err) => {
        if(err){
            console.log(err);
            return res.status(500).json({ error: err.message});
        }
        res.json({ message: 'User registered successfully'})
    });
};


