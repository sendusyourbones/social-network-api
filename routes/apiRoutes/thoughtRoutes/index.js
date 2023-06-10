const router = require('express').Router();
const {
    getThoughts,
    createThought,
} = require ('../../../controllers/thoughtController');

// /api/thoughts prepended to every route declared here

// GET all thoughts
router.get('/', getThoughts);

// GET one thought by id


// POST a new thought, add to user's thoughts property
router.post('/', createThought);

// PUT to update a thought by id


// DELETE a thought by id


// POST a reaction to a thought's reactions property


// DELETE a reaction by reactionId value



module.exports = router;
