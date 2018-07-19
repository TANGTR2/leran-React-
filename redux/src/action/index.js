import {INCREMENT,DECREMENT,MULTIPLICATION} from '../constants/ActionTypes'

export const increment = (index) =>{
    return {type: INCREMENT,index}
}

export const decrement = (index) =>{
    return { type: DECREMENT,index}
}

export const multiplication = (index,multiper) =>{
    return { type: MULTIPLICATION ,index,multiper:multiper}
}