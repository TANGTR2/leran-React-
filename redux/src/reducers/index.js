import {INCREMENT,DECREMENT,MULTIPLICATION} from '../constants/ActionTypes'

export default (state = [0,0], action) => {
    switch (action.type){
        case INCREMENT:
        {
            const newState = [...state]
            newState[action.index]++
            return newState
        }
        case DECREMENT:
        {
            const newState = [...state]
            newState[action.index]--
            return newState
        }
        case MULTIPLICATION:
        {
            const newState = [...state]
            newState[action.index] *= action.multiper
            return newState
        }
        default:
            return state
    }
}