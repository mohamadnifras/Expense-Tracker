"use client"
import React, { useEffect, useState } from 'react'
import {db} from '../../../../utils/dbConfig'
import {Budgets,Expenses} from '../../../../utils/schema'
import {useUser} from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import ExpenseListTable from './_components/ExpenseListTable'

function MyExpenses() {
    const [expensesList,setExpensesList]=useState([])
    const {user} = useUser();
      const getAllExpenses = async () => {
        const result = await db
          .select({
            id: Expenses.id,
            name: Expenses.name,
            amount: Expenses.amount,
            createdAt: Expenses.createdAt,
          })
          .from(Budgets)
          .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
          .where(eq(Budgets.createBy, user?.primaryEmailAddress.emailAddress))
          .orderBy(desc(Expenses.id));
    
        setExpensesList(result);
      };

       useEffect(() => {
    if (!user) return;

    const load = async () => {
      await getAllExpenses();
    };

    load();
  }, [user]);
  return (
    <div className='p-5'>
        <ExpenseListTable expensesList={expensesList} refreshData={()=> getAllExpenses()}/>
    </div>
  )
}

export default MyExpenses