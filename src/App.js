import React from 'react';
import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  
  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expense></Expense>
     </div>
  )
  }

export default App;
