import {connect} from 'react-redux'
import Todos from "../components/Todos";
import todoApi from "../api/TodoApi"

const isFiltered = (todo,status) =>{
    if(status === undefined)
        return true
    return todo.status = status
}

const mapStateToProps = (state, ownProps) =>{
    const {todos} = state;
    //console.log(todos)
    const {match:{params:{status}}} = ownProps;
    //console.log(status)
    const currentTodos = todos.filter(todo=>isFiltered(todo,status))
    return {
        todos: currentTodos
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        toggleActiveHandler:(viewId,status) => {
            todoApi.toggleActive(viewId,status,dispatch);
        } ,
        updateItemContent:(viewId,content) => {
            todoApi.updateItem(viewId,content,dispatch);
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)