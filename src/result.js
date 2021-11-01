import {useSelector} from 'react-redux';
import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";

function Result(){
    const history = useHistory();
    useEffect(() =>{
        if(!operator)
        {
            history.push('/')
        }
    },[])
    const [answer,setAnswer]= useState({
        val:""
    });
    const value1 = useSelector(state => state.val1.value1);
    const value2 = useSelector(state => state.val2.value2);
    const operator = useSelector(state => state.val3.operator);
    useEffect(() => {
        if(operator === '+'){
            setAnswer({val: (parseFloat(value1) + parseFloat(value2))});
        }
        if(operator === '-'){
            setAnswer({val: (parseFloat(value1) - parseFloat(value2))});
        }
        if(operator === '*'){
            setAnswer({val: (parseFloat(value1) * parseFloat(value2))});
        }
        if(operator === '/'){
            setAnswer({val: (parseFloat(value1) / parseFloat(value2))});
        }
    },[operator])
       return (
        <div className="result">
            the result of {value1} {operator} {value2} is {answer.val}.
        </div>
    );

}
export default Result;