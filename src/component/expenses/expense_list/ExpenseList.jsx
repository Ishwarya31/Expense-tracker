import React from 'react';
import "./ExpenseList.css";
import Expenseitem from '../expense_item/Expenseitem';
const ExpenseList=(props)=>{
    const {expenses=[]}=props;
    if(expenses.length===0){
        return(
            <h2> No expenses found!</h2>
        )
    }
    return(
        <ul className='expenses-list'>
            {expenses.map((each_expense)=>{
                return(
                    <Expenseitem 
                    key={each_expense.id || each_expense._id}
                    title={each_expense.title}
                    amount={each_expense.amount}
                    date={each_expense.date}
                    />
                )
            })}
        </ul>
    )
} 
export default ExpenseList;