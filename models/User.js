const { Schema, model } = require('mongoose');

// Create user schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: [true, 'Username must be unique'],
            required: [true, 'Username is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email address is required'],
            unique: [true, 'Email address must be unique'],
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Virtual that returns the number of friends the user has
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

module.exports = model('User', userSchema);
