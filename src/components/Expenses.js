import ExpenseItem1 from "./ExpenseItem1";
import './Expenses.css';
import Card from "./Card";
function Expense() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            place: 'PATNA',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2',
         title: 'New TV',
          place: 'PATNA',
           amount: 799.49, 
           date: new Date(2021, 2, 12)
         },
        {
            id: 'e3',
            title: 'Car Insurance',
            place: 'PATNA',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            place: 'PATNA',
            amount: 450,
            date: new Date(2021, 5, 12),
        }
    ];
    return (


        <Card className='expenses'>
            

            {expenses.map((Val) => {
                return (
                    <div>
                        <ExpenseItem1 title={Val.title}
                            amount={Val.amount}
                            date={Val.date}
                            place={Val.place}> </ExpenseItem1>
                            
                    </div>
                )
            })}
        </Card>
    )

}

export default Expense;