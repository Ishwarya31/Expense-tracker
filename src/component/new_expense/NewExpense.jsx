import React from "react";
import "./NewExpense.css";
import {nanoid} from "nanoid";
import NewExpenseForm from "./new_Expense_form/NewExpenseForm";
// const onAddNewExpense=(expense)=>{
//     console.log("newexpense",expense);
// }
    const NewExpense=(props)=>{ 
        const {submitAction}=props;
    const onAddNewExpense=(expense)=>{
       
         const modified_expense={
            ...expense,
            id:nanoid(),
         }
         submitAction(modified_expense);
    }
    return(
        <div className="new-expense">
        <NewExpenseForm save={onAddNewExpense}/>
        </div>
    );
}
export default NewExpense;