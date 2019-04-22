import React from 'react';
import { Link } from 'react-router-dom';

const Todo = (props) => {
  const { todo } = props;
  const { _id, todoDescription, todoResponsible, todoPriority, todoCompleted } = todo;

  return (
    <tr>
      <td className={todoCompleted ? 'completed' : ''}>{todoDescription}</td>
      <td className={todoCompleted ? 'completed' : ''}>{todoResponsible}</td>
      <td className={todoCompleted ? 'completed' : ''}>{todoPriority}</td>
      <td>
        <Link to={`/edit/${_id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default Todo;
