import React from 'react'
<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

const TransactionCount = ({countData}) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-2 mt-8 sm:grid-cols-3 sm:px-8">
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-green-600">
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Money</h3>
            <p className="text-3xl">{countData[0].total_package_amount}</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-green-300">
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Amount Paid</h3>
            <p className="text-3xl">{countData[0].total_amount_paid}</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-red-300">
        <svg fill="#ffffff" width="40px" height="40px" viewBox="-8 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.828 15.984A1.328 1.328 0 1 1 1.5 14.657a1.328 1.328 0 0 1 1.328 1.327zM1.5 13.244a1.03 1.03 0 0 1-1.03-1.03V2.668a1.03 1.03 0 0 1 2.06 0v9.548a1.03 1.03 0 0 1-1.03 1.029z"></path></g></svg>        </div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Amount Due</h3>
            <p className="text-3xl">{countData[0].total_amount_due}</p>
        </div>
    </div>
    
</div>
  )
}

export default TransactionCount