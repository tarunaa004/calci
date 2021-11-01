import {GET_VALUE1,GET_VALUE2,GET_OPERAT} from "./constant";
export const setResult1 = (up_val1) => ({
    type: GET_VALUE1,
    up_val1
})
export const setResult2 = (up_val2) => ({
    type: GET_VALUE2,
    up_val2
})
export const setOper = (up_op) =>({
    type: GET_OPERAT,
    up_op
})