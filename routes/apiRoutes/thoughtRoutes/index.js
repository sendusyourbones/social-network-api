const router = require('express').Router();
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
} = require ('../../../controllers/thoughtController');

// /api/thoughts prepended to every route declared here

// GET all thoughts
router.get('/', getThoughts);

// GET one thought by id
router.get('/:id', getThought);

// POST a new thought, add to user's thoughts property
router.post('/', createThought);

// PUT to update a thought by id
router.put('/:id', updateThought);

// DELETE a thought by id


// POST a reaction to a thought's reactions property


// DELETE a reaction by reactionId value



module.exports = router;
