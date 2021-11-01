import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setResult2 } from "./redux/action";
import { useHistory } from "react-router-dom";
import "./App.css"

function Value2(){
    const dispatch = useDispatch();
    let history = useHistory();
    const value2 = useSelector(state => state.val2.value2);

    //get the value inside the form
    const getValue = (e) => {
        dispatch(setResult2(e.target.value));
    };
    const submit = (e) =>{
        e.preventDefault();
        if(!isNaN(value2)){
            dispatch(setResult2(value2));
            console.log(value2);
            history.push("/operat");
        }
        else{
            alert("enter numbers only");
        }
    }
    return(
    <div className="val-dets">
        <form>
            <label htmlFor="">Enter your value 2</label><br />
        <input type="text" placeholder="enter number2" onChange={getValue}/>
        <button className="btn" onClick={submit}>enter</button>
        </form>
    </div>
    );
}
export default Value2;