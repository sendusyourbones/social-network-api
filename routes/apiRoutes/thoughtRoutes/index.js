const router = require('express').Router();
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
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
router.delete('/:id', deleteThought);

// POST a reaction to a thought's reactions property
router.post('/:thoughtId/reactions', addReaction);

// DELETE a reaction by reactionId value
router.delete('/:thoughtId/reactions', deleteReaction);

module.exports = router;
