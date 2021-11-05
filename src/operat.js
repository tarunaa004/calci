import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import { setOper } from "./redux/action";

function Operat(){
    const value1 = useSelector(state => state.val1.value1);
    let history = useHistory();
    useEffect(() =>{
        if(history.location.state !== value1)
        {
            history.push('/');
        }
    },[])
    const dispatch = useDispatch();
    const operator = useSelector(state => state.val3.operator);

    //function to handle options
    const handleChange = (e) =>{
        dispatch(setOper( e.target.value));
        history.push("/result",e.target.value);
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
