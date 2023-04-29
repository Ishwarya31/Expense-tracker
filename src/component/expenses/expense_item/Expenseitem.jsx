import React, { useState } from 'react';
import './Expenseitem.css';
import ExpenseDate from "../expense_date/ExpenseDate";
const Expenseitem=(props)=>{
    // console.log('Expenseitem',props);
    const{title,amount,date}=props;
    const [title1,settitle1]=useState(title);
    function onTitleChange(){
        settitle1('updated');
    }
   
    
    // const date=new Date().toISOString();
    // const title='hello world';
    // const amount=100;
    return(
        <li className='expenses-list__fallback '>
        <div className='expense-item'>
             <ExpenseDate  date={date} />
            <div className='expense-item__description'>
            <h2>{title1}</h2>
            <div className='expense-item__price'>${amount}</div>
            </div>
            {/* <button onClick={onTitleChange}>Update</button> */}
            {/* onTitleChange()  -> infinitevloop or to many times rerenders  
            js loop runs 10000 times and stop if we use generator it can run more than 10000 times */}
        </div>
        </li>
    );
};
export default Expenseitem;