const { User, Thought } = require('../models');

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
const updateUser = async (req, res) => {
    const userId = req.params.id;

    // Create an updates object only containing the updated fields
    const updates = {};
    if (req.body.username) {
        updates.username = req.body.username;
    }
    if (req.body.email) {
        updates.email = req.body.email;
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true },
        );
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// DELETE a user by id
const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        // Delete user
        const deletedUser = await User.findByIdAndDelete(
            userId, 
            { new: true }
        );

        // Delete user's thoughts
        await Thought.deleteMany({ username: deletedUser.username });

        res.json(`${userId} deleted`);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// POST a friend to a user's friend list
const addFriend = async (req, res) => {
    const { userId, friendId } = req.params;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { friends: friendId } },
            { new: true },
        );
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// DELETE a friend from a user's friend list
const deleteFriend = async (req, res) => {
    const { userId, friendId } = req.params;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $pull: { friends: friendId } },
            { new: true },
        );
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
}
