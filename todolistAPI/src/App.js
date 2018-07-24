import React, { Component } from 'react';
import './todo.css';
import InputContent from './container/InputContentContainer';
import Todos from './container/TodosContainer';
import FilterTodo from './container/FilterTodoContainer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Card } from 'antd';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
        <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <Card style={{width:400}}>
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
      </Col>
    </Row>
    );
  }
}

export default App;
