const { Thought, User } = require('../models');

// GET all thoughts
const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// GET one thought by id
const getThought = async (req, res) => {
    const thoughtId = req.params.id;

    try {
        const thought = await Thought.findById(thoughtId);
        res.json(thought);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// POST a new thought
const createThought = async (req, res) => {
    const { thoughtText, username, userId } = req.body;

    try {
        // Create thought
        const newThought = await Thought.create({ thoughtText, username });

        // Push new thought id to user's thoughts array
        await User.findByIdAndUpdate(
            userId,
            { $push: { thoughts: newThought._id} }
        );

        res.json(newThought);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// PUT to update a thought by id
const updateThought = async (req, res) => {
    const thoughtId = req.params.id;
    const { updatedThoughtText } = req.body;

    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $set: { thoughtText: updatedThoughtText } },
            { new: true },
        );
        res.json(updatedThought);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// DELETE a thought by id


// POST a reaction to a thought's reactions property


// DELETE a reaction by reactionId value

module.exports = {
    getThoughts,
    getThought,
    createThought,
    updateThought,
}
