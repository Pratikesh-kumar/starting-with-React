import './ExpenseItem1.css';

function ExpenseItem1(props) {
   
    return(
    <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item_description">
            <h2>{props.title}</h2>
            <h3>{props.place}</h3>
        </div>
         <div className="expense-item__price">₹ {props.amount}</div>
        
    </div>
    );
  }
   export default ExpenseItem1;