import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setResult1 } from "./redux/action";
import { useHistory } from "react-router-dom";
import "./App.css"

function Value1(){
    const dispatch = useDispatch();
    const history = useHistory();
    const value1 = useSelector(state => state.val1.value1);

    //get the value inside the form
    const getValue = (e) => {
        dispatch(setResult1(e.target.value));
    };
    const submit = (e) =>{
        e.preventDefault();
        if(isNaN(value1) || value1 === ""){
            alert("you have to enter number!");
        }
        else{
            dispatch(setResult1(value1));
            history.push("/value2",value1);
        }

    };
    return(
    <div >
        <form>
            <label>Enter your value1</label><br />
        <input type="text" placeholder="enter number1" onChange={getValue}/>
        <button onClick={submit} >enter</button>
        </form>
    </div>
    );
}
export default Value1;
