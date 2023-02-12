import ExpenseItem1 from './components/ExpenseItem1';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      place : 'Patna',
    },
    {
       id: 'e2', 
    title: 'New TV',
     amount: 799.49,
      date: new Date(2021, 2, 12), 
      place : 'Patna',
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      place : 'Patna',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      place : 'Patna',
    },
  ];
  return (
    <div>
      <h2> Expense Tracker</h2>
     {expenses.map((Val) => {
                return (
                    <div>
                        <ExpenseItem1 title={Val.title}
                            amount={Val.amount}
                            date={Val.date}
                            place={Val.place}>
                             </ExpenseItem1>
                    </div>
                )
            })}
      
            

      
    </div>
  );
}

export default App;
