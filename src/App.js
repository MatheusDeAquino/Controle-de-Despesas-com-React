import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseDisplay from './components/Expenses/ExpenseDisplay';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Bolo de Maracuja',
      amount: 49.99,
      date: new Date(2020,4, 30),
    },
    { id: 'e2', title: 'Controle PS4', amount: 1200.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'iphone xr',
      amount: 3000.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Microfone Condensador',
      amount: 1800.99,
      date: new Date(2021, 5, 12),
    },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);  
  
  const addExpenseHandler = (expense) => {
      setExpenses ((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };
  /*
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(ExpenseDisplay, {items: expenses})
  );
  */

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseDisplay items={expenses} />
    </div>
  );
};

export default App;
