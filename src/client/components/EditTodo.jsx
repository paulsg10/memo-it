import React, { Component } from 'react';
import axios from 'axios';

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoDescription: '',
      todoResponsible: '',
      todoPriority: '',
      todoCompleted: false,
    };
  }

  componentDidMount() {
    const { todoDescription, todoResponsible, todoPriority, todoCompleted } = this.state;
    const { match } = this.props;

    axios.get(`http://localhost:3000/todos/${match.params.id}`)
      .then((res) => {
        const { todoDescription, todoResponsible, todoPriority, todoCompleted } = res.data;

        this.setState({
          todoDescription,
          todoResponsible,
          todoPriority,
          todoCompleted,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

  handleTodoCompletedChange() {
    const { todoCompleted } = this.state;
    this.setState({
      todoCompleted: !todoCompleted,
    });
  }

  handleSubmit(event) {
    const { todoDescription, todoResponsible, todoPriority, todoCompleted } = this.state;
    const { match, history } = this.props;
    event.preventDefault();

    axios({
      method: 'post',
      url: `http://localhost:3000/update/${match.params.id}`,
      data: {
        todoDescription,
        todoResponsible,
        todoPriority,
        todoCompleted,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    history.push('/todos');
  }

  render() {
    const { todoDescription, todoResponsible, todoPriority, todoCompleted } = this.state;

    return (
      <div>
        <h3 align="center">Update Todo</h3>
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
              <input type="radio" className="form-check-input" name="priorityOptions" id="priorityLow" value="Low" checked={todoPriority === 'Low'} onChange={event => this.handleTodoPriorityChange(event)} />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="priorityOptions" id="priorityMedium" value="Medium" checked={todoPriority === 'Medium'} onChange={event => this.handleTodoPriorityChange(event)} />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="priorityOptions" id="priorityHigh" value="High" checked={todoPriority === 'High'} onChange={event => this.handleTodoPriorityChange(event)} />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div>
            <input type="checkbox" className="form-check-input" id="completedCheckbox" name="completedCheckBox" value={todoCompleted} onChange={() => this.handleTodoCompletedChange()} checked={todoCompleted} />
            <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
          </div>
          <div className="form-group">
            {/* <input type="submit" className="btn btn-primary" value="Update Todo" /> */}
            <button type="submit" className="btn btn-primary">Update Todo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditTodo;
