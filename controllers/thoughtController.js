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
const deleteThought = async (req, res) => {
    const thoughtId = req.params.id;

    try {
        const deletedThought = await Thought.findByIdAndDelete(thoughtId);
        res.json(deletedThought);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// POST a reaction to a thought's reactions property
const addReaction = async (req, res) => {
    const thoughtId = req.params.thoughtId;
    const { reactionBody, username } = req.body;
    const newReaction = { reactionBody, username };

    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $push: { reactions: newReaction } },
            { new: true },
        );

        res.json(updatedThought);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// DELETE a reaction by reactionId value
const deleteReaction = async (req, res) => {
    const thoughtId = req.params.thoughtId;
    const { reactionId } = req.body;

    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $pull: { reactions: { _id: reactionId } } },
            { new: true },
        );

        res.json(updatedThought);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

module.exports = {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
}
