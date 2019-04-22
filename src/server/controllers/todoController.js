const Todos = require('../model/todoModel.js');

module.exports = {
  getTodos: (req, res) => {
    Todos.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  getTodo: (req, res) => {
    const { id } = req.params;

    Todos.findById(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  addTodo: (req, res) => {
    const newTodo = req.body;

    Todos.create(newTodo)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  updateTodo: (req, res) => {
    const { id } = req.params;

    Todos.findById(id)
      .then((data) => {
        data.todoDescription = req.body.todoDescription;
        data.todoResponsible = req.body.todoResponsible;
        data.todoPriority = req.body.todoPriority;
        data.todoCompleted = req.body.todoCompleted;

        data.save()
          .then((todo) => {
            res.json(todo);
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(400);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // editTodo: (req, res) => {
  //   Todos.findOneAndUpdate(req.body, { $set: { memoTile: , memoText: } }, { new: true })
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     res.sendStatus(404);
  //   })
  // },
  deleteTodo: (req, res) => {
    Todos.findOneAndRemove({ _id: req.body.memoId })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  },
};
