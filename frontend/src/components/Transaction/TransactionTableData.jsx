import React, { useState } from 'react';
import TransactionEdit from './TransactionEdit';

const TransactionTableData = ({ data }) => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleClose = () => {
    setSelectedTransaction(null);
  };

  return (
    <>
      {data.map((ele, index) => (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{ele.member_name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{ele.member_package} months</td>
          <td className='px-6 py-4 whitespace-nowrap'>{ele.endDate}</td>
          <td className='px-6 py-4 whitespace-nowrap'>{ele.transaction_time_stamp} </td>
          <td className="px-6 py-4 whitespace-nowrap">{ele.transaction_package_amount}</td>
          <td className="px-6 py-4 whitespace-nowrap text-green-500">{ele.transaction_amount_paid}</td>
          <td className='px-6 py-4 whitespace-nowrap text-red-500'>{ele.transaction_amount_due} </td>
          <td className="px-2 py-2 whitespace-nowrap">
            <button
              onClick={() => handleEditClick(ele)}
              className="px-2 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
            >
              <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fill-rule="evenodd" d="M15.198 3.52a1.612 1.612 0 012.223 2.336L6.346 16.421l-2.854.375 1.17-3.272L15.197 3.521zm3.725-1.322a3.612 3.612 0 00-5.102-.128L3.11 12.238a1 1 0 00-.253.388l-1.8 5.037a1 1 0 001.072 1.328l4.8-.63a1 1 0 00.56-.267L18.8 7.304a3.612 3.612 0 00.122-5.106zM12 17a1 1 0 100 2h6a1 1 0 100-2h-6z"></path> </g></svg>
            </button>
          </td>
        </tr>
      ))}
      {selectedTransaction && (
        <TransactionEdit
          transaction={selectedTransaction}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default TransactionTableData;
