import React, { Component } from 'react';
import './todo.css';
import InputContent from './container/InputContentContainer';
import Todos from './container/TodosContainer';
import FilterTodo from './container/FilterTodoContainer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Card } from 'antd';

class App extends Component {
  render() {
    return (
      <Card className="container" style={{ align:"cente"}}>
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <InputContent />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Todos} />
            <Route path="/:status" component={Todos} />
          </div>
        </BrowserRouter>
        <FilterTodo />
      </Card>
    );
  }
}

export default App;
