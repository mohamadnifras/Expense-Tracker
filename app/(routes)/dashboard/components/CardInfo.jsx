"use client"
import React from 'react'
import { PiggyBank, ReceiptText, Wallet } from 'lucide-react'

function CardInfo({budgetList}) {

    const totalBudget = budgetList?.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const totalSpend = budgetList?.reduce(
    (sum, item) => sum + (item.totalSpend || 0),
    0
  );

  return (
    <div>
        {budgetList.length>0?

    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <div className='p-7 border rounded-lg flex justify-between items-center'>
            <div>
                <h2 className='text-sm'>Total Budget</h2>
                <h2 className='font-bold text-2xl'>₹{totalBudget}</h2>
            </div>
            <PiggyBank className='bg-indigo-600 p-3 h-12 w-12 rounded-full text-white'/>
        </div>
        <div className='p-7 border rounded-lg flex justify-between items-center'>
            <div>
                <h2 className='text-sm'>Total Spend</h2>
                <h2 className='font-bold text-2xl'>₹{totalSpend}</h2>
            </div>
            <ReceiptText className='bg-indigo-600 p-3 h-12 w-12 rounded-full text-white'/>
        </div>
        <div className='p-7 border rounded-lg flex justify-between items-center'>
            <div>
                <h2 className='text-sm'>No. of Budget</h2>
                <h2 className='font-bold text-2xl'>{budgetList?.length}</h2>
            </div>
            <Wallet className='bg-indigo-600 p-3 h-12 w-12 rounded-full text-white'/>
        </div>
    </div> 
    :
    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {[1,2,3].map((item,index)=>(
         <div key={index} className='h-[110px] w-full bg-slate-200 animate-pulse rounded-lg'></div>
        ))}
    </div>
        }
    </div>
  )
}

export default CardInfo