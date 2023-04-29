import React from "react";
import './ExpenseDate.css';
const ExpenseDate=(props)=>{
    var {date}=props;
    date=new Date(date);
    const month=date.toLocaleString('en-US',{month:'long'});
    const day=date.toLocaleString('en-US',{day:'numeric'});
    return(
            <div className="expense-date"> 
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__year">{date.getFullYear()}</div>
                 
            </div>
    );
}
export default ExpenseDate;