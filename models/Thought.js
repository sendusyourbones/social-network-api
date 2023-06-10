const { Schema, model } = require('mongoose');
const { DateTime } = require('luxon');

// Create thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Thought text is required'],
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reaction',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Getter method to format the timestamp
function formatDate(date) {
    return DateTime.fromJSDate(date).toFormat('ff');
}

// Virtual that returns the number of friends the user has
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = model('Thought', thoughtSchema);
