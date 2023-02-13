import './ExpenseItem1.css'

function ExpenseDetails(props){
    return(
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.place}</h2>
        <div className='expense-item__price'>₹{props.amount}</div>
    </div>
    )

}

export default ExpenseDetails;