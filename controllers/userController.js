const { User } = require('../models');

// GET all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// GET one user by id, populate thought and friend data
const getUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId).populate('thoughts friends');
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// POST new user
const createUser = async (req, res) => {
    const { username, email } = req.body;

    try {
        const newUser = await User.create({ username, email });
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// PUT to update a user by id


// DELETE a user by id


// POST a friend to a user's friend list


// DELETE a friend from a user's friend list

module.exports = {
    getUsers,
    getUser,
    createUser,
}
