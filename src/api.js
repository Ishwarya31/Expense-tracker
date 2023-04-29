import React from "react";
export let getAllExpenses=(setExpenses)=>{
     fetch('http://localhost:3002/api/v2/getexpenses')
    .then((response)=>response.json())
    .then((expense_data)=>setExpenses(expense_data.data));

  }
  export const   createExpense=(postData={},callback)=>{
    fetch('http://localhost:3002/api/v2/expenses',
    {
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(postData)
    
    
    })
    .then((response)=>response.json())
    .then((data)=>{callback && callback();})
}
