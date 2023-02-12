import './ExpenseItem1.css';

function ExpenseItem1(props) {
    const month = props.date.toLocaleString("en-us", { month: "long" })
    const day = props.date.toLocaleString("en-us", {day:'2-digit'})
    const year = props.date.getFullYear()
    return (
        <div className="expense-item">
            <div>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </div>
    
        <div className="expense-item_description">
            <h2>{props.title}</h2>
            <h3>{props.place}</h3>
        </div>
         <div className="expense-item__price">₹ {props.amount}</div>
        
    </div>  
    );
  }
   export default ExpenseItem1;