import {connect} from 'react-redux'
import FilterTodo from "../components/FilterTodo";
import todoApi from "../api/TodoApi";

const mapStateToProps = (state, ownProps) =>{
    return {
        allStatus: state.allStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        changeStatusHandler:(ViewStatus) => {
            todoApi.changeStatus(ViewStatus,dispatch);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)