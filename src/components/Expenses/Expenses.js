import React from "react";
import ExpenseItem1 from "./ExpenseItem1";
import './Expenses.css';
import Card from "../UI/Card";

function Expense() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            place: 'PATNA',
            amount: 900,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2',
         title: 'New TV',
          place: 'PATNA',
           amount: 800, 
           date: new Date(2021, 2, 12)
         },
        {
            id: 'e3',
            title: 'Car Insurance',
            place: 'PATNA',
            amount: 300,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            place: 'PATNA',
            amount: 500,
            date: new Date(2021, 5, 12),
        }
    ];
    return (


        <Card className='expenses'>
            

            {expenses.map((Val) => {
                return (
                    <div>
                        <ExpenseItem1 id={Val.id}
                        title={Val.title}
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