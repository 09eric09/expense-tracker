import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const saveDateHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() === filteredYear) {
      return true;
    }
  });

  let expensesContent;

  if (filteredExpenses.length === 0) {
    expensesContent = <p>No Items to Show</p>;
  } else {
    expensesContent =  filteredExpenses.map(expense => (
      <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>  
    )) 
  }

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter onChangeFilter={saveDateHandler} selected={filteredYear} /> 
    {expensesContent}
    </Card>
    </div>
  )
}

export default Expenses;