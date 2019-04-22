import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MemoContainer from './components/MemoContainer';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Memo It!</Link>
          <Link to="/memos" className="navbar-brand">Memos</Link>
          <Link to="/todos" className="navbar-brand">Todos</Link>
          <Link to="/create" className="navbar-brand">Create Todo</Link>
        </nav>
        <Route exact path="/" component={Header} />
        <Route path="/memos" component={MemoContainer} />
        <Route path="/todos" component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
};

export default App;
