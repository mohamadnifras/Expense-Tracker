import React from 'react'
import { Trash } from 'lucide-react'
import {db} from '../../../../../utils/dbConfig' 
import { Expenses } from '../../../../../utils/schema'
import { eq } from 'drizzle-orm'
import { toast } from 'sonner'

function ExpenseListTable({expensesList,refreshData}) {
    console.log(expensesList,'expensesList')

    const deleteExpense = async(expenses)=>{
   const result = await db.delete(Expenses)
   .where(eq(Expenses.id,expenses.id)).returning()

   if(result){
    toast("Expense Deleted!")
    refreshData()
   }

    }
  return (
    <div className='mt-3'>
       <h2 className="font-bold text-lg">Latest Expenses</h2>
        <div className='grid grid-cols-4 bg-slate-200 p-2 font-bold mt-3'>
            <h2>Name</h2>
            <h2>Amount</h2>
            <h2>Date</h2>
            <h2>Action</h2>
        </div>
        {expensesList.map((expenses,index)=>(
           <div className='grid grid-cols-4 bg-slate-50 p-2' key={index}>
            <h2>{expenses?.name}</h2>
            <h2>{expenses.amount}</h2>
            <h2>{expenses.createdAt}</h2>
            <h2>
                <Trash 
                onClick={()=> deleteExpense(expenses)}
                className='text-red-600 cursor-pointer'/>
            </h2>
        </div>
        ))}
    </div>
  )
}

export default ExpenseListTable