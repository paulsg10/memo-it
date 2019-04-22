import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    const { todoList } = this.state;
    let todoListCopy;

    axios.get('http://localhost:3000/getTodos')
      .then((res) => {
        todoListCopy = todoList.slice();
        todoListCopy = res.data;
        if (todoListCopy) {
          this.setState({
            todoList: todoListCopy,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { todoList } = this.state;
    const displayTodos = todoList.map((todo) => {
      const { _id } = todo;
      return (
        <Todo key={_id} todo={todo} />
      );
    });

    return (
      <div>
        <h3>Todo List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayTodos}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
