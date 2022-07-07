import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const saveDateHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter onChangeFilter={saveDateHandler} selected={filteredYear} />
    {props.expenses.map(expense => (
      <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>  
    ))}  
    </Card>
    </div>
  )
}

export default Expenses;