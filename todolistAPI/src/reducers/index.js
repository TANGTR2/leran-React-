import Todo from "../model/Todo";

export default  (state={todos:[],allStatus:Todo.ALL}, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = [...action.todosObject.afeterHandleTodos];
            return newState
        }
        case 'TOGGLE_TODO':{
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = [...action.todosObject.afeterHandleTodos];
            return newState
        }
        case 'CHANGE_TODO': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = [...action.todosObject.afeterHandleTodos];
            return newState
        }
        case 'FILTER_TODO': {      
            let newState = JSON.parse(JSON.stringify(state));
            newState.allStatus = [...action.todosObject.filter];
            newState.todos = [...action.todosObject.afeterHandleTodos];
            return newState
        }
        case 'INIT_TODO': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.allStatus = [...action.todosObject.filter];
            newState.todos = [...action.todosObject.afeterHandleTodos];
            return newState
        }
        default:
            return state
    }
}

