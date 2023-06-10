const router = require('express').Router();
const {
    getUsers,
    createUser,
} = require ('../../../controllers/userController');

// /api/users prepended to every route declared here

// GET all users
router.get('/', getUsers);

// GET one user by id, populate thought and friend data


// POST new user
router.post('/', createUser);

// PUT to update a user by id


// DELETE a user by id


// POST a friend to a user's friend list


// DELETE a friend from a user's friend list



module.exports = router;
