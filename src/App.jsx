import React,{ useEffect, useState } from 'react';

import './App.css';
// import ExpenseItem from './component/expenses/expense_item/Expenseitem';
// import ExpenseList from './component/expenses/expense_list/ExpenseList';
import Expenses from './component/expenses/Expenses';
import NewExpense from './component/new_expense/NewExpense';
// import Counter from '../../counter';
import {  createExpense, getAllExpenses} from './api.js';


// const DUMMY_DATA = [
//   {
//     id: 'e1',
//     title: 'Groceries',
//     amount: 94.12,
//     date: new Date(2021, 7, 14),
//   },
//   { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Repair',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New work desk',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];


function App() {
 
  const [expenses,setExpenses]=useState('')
  useEffect(() => {
    getAllExpenses(setExpenses);
  }, []);
  
  const add=(expense)=>{
    createExpense(expense,()=>{
     setExpenses((previous_expenses)=>{
       return[...previous_expenses,expense]
     })
    });
   }
    
   

 
   

    
 
    
  
  return (
    <div className="App">
       
      <NewExpense submitAction={add}/>
 
     <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;