import InputContext from "../components/InputContent";
import {connect} from 'react-redux'
import Todo from "../model/Todo";
import todoApi from "../api/TodoApi"

const mapStateToProps = (state, ownProps) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addHandler:(id,context) => { 
            const todo = new Todo(id,context); 
            todoApi.addItem(todo,dispatch) ;
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputContext)