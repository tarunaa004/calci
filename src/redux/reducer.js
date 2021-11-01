import {GET_VALUE1,GET_VALUE2,GET_OPERAT} from "./constant";
import { combineReducers } from 'redux';
const val1initialState = {
    value1:""
}
const val2initialState = {
    value2:""
}

const operinitialState = {
    operator:""
}
const rootReducer = combineReducers({
    val1:res1Reducer,
    val2:res2Reducer,
    val3:res3Reducer
})

export function res1Reducer (state = val1initialState, action){
    switch (action.type){
        case GET_VALUE1:
            return{
                ...state,
               value1:action.up_val1
                }
                break;
                default: return state;
    }
}

export function res2Reducer (state = val2initialState, action){
    switch (action.type){
        case GET_VALUE2:
            return{
                ...state,
               value2:action.up_val2
                }
                break;
                default: return state;
    }
}

export function res3Reducer (state = operinitialState, action){
    switch (action.type){
        case GET_OPERAT:
            return{
                ...state,
                operator :action.up_op
                }
                break;
                default: return state;
    }
}
export default rootReducer;
