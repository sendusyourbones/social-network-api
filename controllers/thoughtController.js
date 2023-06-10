const { Thought, User } = require('../models');


// GET all thoughts, make sure date is formatted
const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

// GET one thought by id, make sure date is formatted


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


// DELETE a thought by id


// POST a reaction to a thought's reactions property


// DELETE a reaction by reactionId value

module.exports = {
    getThoughts,
    createThought,
}
