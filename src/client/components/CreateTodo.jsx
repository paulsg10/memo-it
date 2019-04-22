import React, { Component } from 'react';
import axios from 'axios';

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoDescription: '',
      todoResponsible: '',
      todoPriority: '',
      todoCompleted: false,
    };
  }

  handleTodoDescriptionChange(event) {
    const { todoDescription } = this.state;
    this.setState({
      todoDescription: event.target.value,
    });
  }

  handleTodoResponsibleChange(event) {
    const { todoResponsible } = this.state;
    this.setState({
      todoResponsible: event.target.value,
    });
  }

  handleTodoPriorityChange(event) {
    const { todoPriority } = this.state;
    this.setState({
      todoPriority: event.target.value,
    });
  }

  handleSubmit(event) {
    const { todoDescription, todoResponsible, todoPriority, todoCompleted } = this.state;
    event.preventDefault();

    console.log('Form Submitted!');
    console.log(`Todo Description: ${todoDescription}`);
    console.log(`Todo Responsible: ${todoResponsible}`);
    console.log(`Todo Priority: ${todoPriority}`);

    axios({
      method: 'post',
      url: 'http://localhost:3000/addTodo',
      data: {
        todoDescription,
        todoResponsible,
        todoPriority,
        todoCompleted,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      todoDescription: '',
      todoResponsible: '',
      todoPriority: '',
      todoCompleted: false,
    });
  }

  render() {
    const { todoDescription, todoResponsible, todoPriority } = this.state;
    return (
      <div className="todo-creator">
        <h3>Create a New Todo</h3>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Description: </label>
            <input type="text" className="form-control" value={todoDescription} onChange={event => this.handleTodoDescriptionChange(event)} />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input type="text" className="form-control" value={todoResponsible} onChange={event => this.handleTodoResponsibleChange(event)} />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="priorityOptions" id="priorityLow" value="Low" checked={todoPriority==='Low'} onChange={event => this.handleTodoPriorityChange(event)} />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="priorityOptions" id="priorityMedium" value="Medium" checked={todoPriority==='Medium'} onChange={event => this.handleTodoPriorityChange(event)} />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="priorityOptions" id="priorityHigh" value="High" checked={todoPriority==='High'} onChange={event => this.handleTodoPriorityChange(event)} />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="Create" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
