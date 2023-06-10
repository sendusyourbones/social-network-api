const { Schema, model } = require('mongoose');
const { DateTime } = require('luxon');

// Create reaction schema, to be used in thought schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: [true, 'Reaction text is required'],
            maxLength: 280,
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

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
        reactions: [reactionSchema],
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

// Virtual that returns the number of reactions the thought has
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = model('Thought', thoughtSchema);
