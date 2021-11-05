import {useSelector} from 'react-redux';
import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";

function Result(){
    const history = useHistory();
    const value1 = parseFloat(useSelector(state => state.val1.value1));
    const value2 = parseFloat(useSelector(state => state.val2.value2));
    const operator = useSelector(state => state.val3.operator);
    //upon refresh go back to default page
    useEffect(() =>{
        if(history.location.state !== operator)
        {
            history.push('/');
        }
    },[])
    const [answer,setAnswer]= useState({
        val:""
    });
    useEffect(() => {
        if(operator === '+'){
            // setAnswer({val: (parseFloat(value1) + parseFloat(value2))});
            setAnswer({val: (value1 + value2)});
        }
        if(operator === '-'){
            // setAnswer({val: (parseFloat(value1) - parseFloat(value2))});
            setAnswer({val: (value1 - value2)});
        }
        if(operator === '*'){
            // setAnswer({val: (parseFloat(value1) * parseFloat(value2))});
            setAnswer({val: (value1 * value2)});
        }
        if(operator === '/'){
            // setAnswer({val: (parseFloat(value1) / parseFloat(value2))});
            setAnswer({val: (value1 / value2)});
        }
    },[operator])
       return (
        <div>
            the result of {value1} {operator} {value2} is {answer.val}.
        </div>
    );

}
export default Result;