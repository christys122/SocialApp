const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtsByUser,
    addThought, 
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

//get all thoughts
router
.route('/')
.get(getAllThoughts)

//add thought
router
.route('/:userId')
.get(getThoughtsByUser)
.post(addThought);

//add reaction by user and thought
router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

//delete reaction
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;