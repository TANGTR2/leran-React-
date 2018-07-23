import {addTodo, toggleTodo, changeContent, initTodo} from "../actions";

const axios = require('axios');
const todoApi = {
    todoObject: {
        todos: [],
        filter: "all"
    },

    updateServerData(dispatch, oprationType) {
        axios.get('http://localhost:8080/api/todos')
            .then((response) => {
                this.todoObject.todos = response.data._embedded.todos.map(serviceData => {
                    const {id, content, status} = serviceData;
                    return {id, content, status};
                });
                switch (oprationType) {
                    case "INIT":
                        dispatch(addTodo(this.filterTodos()));
                        break;
                    case "ADD":
                        dispatch(addTodo(this.filterTodos()));
                        break;
                    case "TOGGLE":
                        dispatch(toggleTodo(this.filterTodos()));
                        break;
                    case "EDIT":
                        dispatch(changeContent(this.filterTodos()));
                        break;
                    case "FILLTER":
                        dispatch(initTodo(this.filterTodos()));
                        break;
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    initData(dispatch, oprationType) {
        this.updateServerData(dispatch, oprationType)
    },

    filterTodos() {
        let todos = this.todoObject.todos;
        let filter = this.todoObject.filter;
        if (filter === 'all') {
            let afeterHandleTodos = todos;
            return {afeterHandleTodos, filter};
        } else if (filter === 'active') {
            let afeterHandleTodos = todos.filter(item => item.status === 'active')
            return {afeterHandleTodos, filter}
        } else {
            let afeterHandleTodos = todos.filter(item => item.status === "completed")
            return {afeterHandleTodos, filter}
        }
    },

    addItem(item, dispatch) {
        axios.post('http://localhost:8080/api/todos', {content: item.content, status: item.status})
            .then((response) => {
                this.updateServerData(dispatch, "ADD");
            }).catch(function (error) {
            console.log(error);
        });
    },

    toggleActive(viewId, status, dispatch) {
        axios.patch(`http://localhost:8080/api/todos/${viewId}`, {
            status: (status === "active" ? "completed" : "active")
        })
            .then((response) => {
                this.updateServerData(dispatch, "TOGGLE");
            }).catch(function (error) {
            console.log(error);
        });
    },

    changeStatus(filter, dispatch) {
        this.todoObject.filter = filter;
        this.updateServerData(dispatch, "FILLTER");
    },

    updateItem(viewId, content, dispatch) {
        axios.patch(`http://localhost:8080/api/todos/${viewId}`, {
            content: content
        })
            .then((response) => {
                this.updateServerData(dispatch, "EDIT");

            }).catch(function (error) {
            console.log(error);
        });
    }
}

export default todoApi;