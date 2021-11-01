import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import { setOper } from "./redux/action";
function Operat(){
    const dispatch = useDispatch();
    let history = useHistory();
    const operator = useSelector(state => state.val3.operator);

    //function to handle options
    const handleChange = (e) =>{
        dispatch(setOper( e.target.value));
        history.push("/result");
    }
    return(
        <div className = "options">
            <h4>Choose operator for calculation</h4>
            <select  className="option" onChange={handleChange}>
                <option selected disabled >--choose--</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
        </div>
    );
}
export default Operat;
