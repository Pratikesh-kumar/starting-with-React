import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem1.css";
import Card from '../UI/Card';


const  ExpenseItem1 = (props) => {
 
    const[title,setTitle]=useState(props.title);
    console.log("expenseItem evaluated by React");

    const clickHandler = ()=>{
       setTitle('updated');
       console.log(title);
    }; 
  return (
    <Card  className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"> 
      <h2>{title}</h2>
        <h2>{props.place}</h2>
       
        <div className="expense-item__price"> ₹{props.amount}</div>
       
      </div>
      <button onClick={clickHandler}>click</button>
      
    </Card>
  ) 

}
export default ExpenseItem1;
