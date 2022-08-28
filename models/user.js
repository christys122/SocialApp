const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String
        //unique, required, trimmed
    },
    email: {
        type: String
        //required, unique,validate

    },
    thoughts: {
        type: Object
        //aray of _id references Thought model
    },
    friends: {
        type: Object
        //are of _id values referencing User model
    }
});



const User = model('User', UserSchema);

module.exports = { User, Thought };