const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require ('../../../controllers/userController');

// /api/users prepended to every route declared here

// GET all users
router.get('/', getUsers);

// GET one user by id, populate thought and friend data
router.get('/:id', getUser);

// POST new user
router.post('/', createUser);

// PUT to update a user by id
router.put('/:id', updateUser);

// DELETE a user by id
router.delete('/:id', deleteUser);

// POST a friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// DELETE a friend from a user's friend list
router.delete('/:userId/friends/:friendId', deleteFriend);

module.exports = router;
