import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FeeStructure = () => {
  const [packageData, setPackageData] = useState([]);
  const [editAmount, setEditAmount] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8081/package/getPackage')
      .then(res => {
        if (res.status === 200) {
          setPackageData(res.data);
        } else {
          console.log(res.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleAmountChange = (package_id, value) => {
    setEditAmount(prevState => ({
      ...prevState,
      [package_id]: value
    }));
  };

  const handleSave = (package_id) => {
    const amount = editAmount[package_id] !== undefined ? editAmount[package_id] : packageData.find(ele => ele.package_id === package_id).packagePrice;

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to update the amount!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('http://localhost:8081/package/updateAmount', { package_id, amount })
          .then(res => {
            if (res.status === 200) {
              Swal.fire(
                'Updated!',
                'The package amount has been updated.',
                'success'
              );
              // Optionally refresh the data
              setPackageData(prevData =>
                prevData.map(ele =>
                  ele.package_id === package_id ? { ...ele, packagePrice: amount } : ele
                )
              );
            }
          })
          .catch(err => console.log(err));
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'The package amount is unchanged.',
          'error'
        );
      }
    });
  };

  return (
    <>
      <div className=' text-center text-xl py-4 px-4 mx-2 my-4 w-full bg-blue-500'>
        <h1>Fee Structure</h1>
      </div>
      <div className="flex items-center justify-center px-auto py-auto">
        <table className="w-[90%] text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-center p-4 px-5">ID</th>
              <th className="text-center p-4 px-5">Package in Months</th>
              <th className="text-center p-4 px-5">Amount</th>
              <th className="text-center p-4 px-5">Actions</th>
            </tr>
            {packageData.length > 0 ? packageData.map((ele) => (
              <tr className="border-b hover:bg-orange-100 bg-gray-100" key={ele.package_id}>
                <td className="p-4 px-5 text-center">
                  {ele.package_id}
                </td>
                <td className="p-4 px-5 text-center">
                  {ele.packageMonth}
                </td>
                <td className="p-4 px-5 text-center">
                  <input
                    type="number"
                    value={editAmount[ele.package_id] !== undefined ? editAmount[ele.package_id] : ele.packagePrice}
                    onChange={(e) => handleAmountChange(ele.package_id, e.target.value)}
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 text-center"
                  />
                </td>
                <td className="p-3 px-5 text-center">
                  <button
                    type="button"
                    onClick={() => handleSave(ele.package_id)}
                    className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" fill="#ffffff"></path> </g></svg>
                  </button>
                </td>
              </tr>
            )) : <tr><td colSpan="6" className='text-center'>Package not found</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FeeStructure;
