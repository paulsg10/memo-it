const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const memoController = require('./controllers/memoController.js');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../../dist'));

// REST API

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  else console.log('Connected to database...');
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on PORT 3000...');
});
