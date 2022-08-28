const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
thoughtText: {
    type: String,
    //required: 1-280 char
},
createdAt: {
    type: Date.now,
    //getter method to format timestamp o query 
},
userName:
{
    type: String
    //required
},
reactions: {
    type: array
    //nested documents crated with the reactionSchema
} 
});


const Comment = model('Thought', ThoughtSchema);

module.exports = Thought;