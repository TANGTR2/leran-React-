import React, {Component} from 'react';
import './todo.css';
import InputContent from './container/InputContentContainer'
import Todos from './container/TodosContainer'
import FilterTodo from './container/FilterTodoContainer'
import {BrowserRouter,Route,Link} from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Jquery To Do List</h2>
                    <p>
                        <em>Simple Todo List with adding and filter by diff status.</em>
                    </p>
                </div>
                <InputContent />   
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Todos}></Route>
                        <Route path="/:status" component={Todos}></Route>
                    </div>
                </BrowserRouter>
                <FilterTodo />
            </div>);
    }
}

export default App;
