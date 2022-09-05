const { User } = require('../models');


//functions
const userController = {
 getAllUsers(req, res) {
    User.find({})
    .populate({
        path: 'thoughts',
        select: '-_v'
    })
    .select('-_v')
    .sort({ _id: -1 })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
 },

 
 getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({
        path: 'thoughts',
        select: '-_v'
    })
    .select('-_v')
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id!"});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
    
    res.status(400).json(err);
 });
},


createUser({ body }, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
},


updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: "No user found with this id"});
            return;
        }
        res.json(dbUserData);
        
    })
    .catch(err => res.status(400).json(err));
},

deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'no user with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
}
}


module.exports = userController;