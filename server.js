const express = require('express');
const mongoose = require('mongoose');
//link to db

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}); 

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`connected on localhost:${PORT}`));
