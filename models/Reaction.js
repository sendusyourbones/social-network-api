const { Schema } = require('mongoose');
const { DateTime } = require('luxon');

// Create reaction schema
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

// Getter method to format the timestamp
function formatDate(date) {
    return DateTime.fromJSDate(date).toFormat('ff');
}

module.exports = reactionSchema;
