import {connect} from 'react-redux'
import Count from "../component/Count";
import {decrement, increment, multiplication} from "../action";


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        onMultiplication:(index,multipler) => dispatch(multiplication(index,multipler)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Count)
