import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem1.css";
import Card from '../UI/Card';


function ExpenseItem1(props) {
  const deleteHandler = ()=>{
    let ParentAmount=document.querySelector('.expense-item').parentElement;
    console.log(ParentAmount)
     ParentAmount.removeChild(document.querySelector('.expense-item'));
  }
  
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.place}</h2>
        <div className="expense-item__price"> ₹{props.amount}</div>
       
      </div>
      <button onClick={deleteHandler}>delete</button>
      
    </Card>
  );  

}
export default ExpenseItem1;
