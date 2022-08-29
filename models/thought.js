const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
thoughtText: {//required: 1-280 char
    type: String,
    min: [1],
    max: [280, 'no need to write a book, let trim this down a bit']  
},
createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
},
userName://required
{
    type: String,
    required: true
},
reactions: []

    //nested documents crated with the reactionSchema

});


const Thought = model('Thought', ThoughtSchema);

module.exports = { Thought };