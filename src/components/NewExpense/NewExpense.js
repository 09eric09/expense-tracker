import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    //the function we're using to pass up the data to App.js
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const [isEditing, setIsEditing] = useState(false);
  //sets the editing state to true when the "Add New" button is clicked, showing the form & hiding the button we clicked
  const editHandler = () => {
    setIsEditing(true);
  }
  //sets isEditing to false, so we can pass to ExpensForm on the 'cancel' button click
  const stopEditHandler = () => {
    setIsEditing(false);
  }
  
  return (
    <div className="new-expense">
        {!isEditing && <button onClick={editHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onEditClick={stopEditHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense;