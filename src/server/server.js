const express = require('express');
const path = require('path');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const memoController = require('./controllers/memoController.js');
const todoController = require('./controllers/todoController.js');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// (express.static(path.resolve(__dirname, '/../../dist')));

// REST API for memos
app.get('/getMemos', memoController.getMemos);
app.post('/addMemo', memoController.addMemo);
// app.put('/edit', memoController.editMemo);
app.delete('/deleteMemo', memoController.deleteMemo);

// REST API for todos
app.get('/getTodos', todoController.getTodos);
app.get('/todos/:id', todoController.getTodo);
app.post('/addTodo', todoController.addTodo);
app.post('/update/:id', todoController.updateTodo);
app.delete('/deleteTodo', todoController.deleteTodo);

// Catch all route for react-router
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

app.use(express.static(path.join(__dirname, '/../../dist')));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  else console.log('Connected to database...');
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on PORT 3000...');
});
