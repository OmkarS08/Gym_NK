import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2'

const TableBody = ({ data }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  const handleEdit = (member) => {
    setCurrentMember(member);
    setIsModalOpen(true);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8081/updateMember/${currentMember.id}`, currentMember)
      .then(res => {
        if (res.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Member information has been updated.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });
          setIsModalOpen(false);
          window.location.reload();
        } else {
          console.log('Update failed');
        }
      })
      .catch(err => {
        console.error('Error:', err); // Add error handling
      });
  };

  const handleChange = (e) => {
    setCurrentMember({
      ...currentMember,
      [e.target.name]: e.target.value
    });
  };

  const handleDelete = (id, name) => {

    Swal.fire({
      title: `Are you sure want to delete ${name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`http://localhost:8081/members/deleteMember/${id}`)
          .then(res => {
            if (res.status === 200) {
              Swal.fire({
                toast:true,
                position:'top-end',
                title: "Deleted!",
                text: `${name} has been deleted.`,
                icon: "error",
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
              });
              
              const myreload = ()=>{
                window.location.reload()
              }

              setTimeout(myreload,1590)

            } else {
              console.log('failed');
            }
          })
          .catch(err => {
            console.error('Error:', err); // Add error handling
          });
        console.log(`Deleting member with id: ${id}`); // Add console log
  
      }
    });


    // Navigate to the logout route or perform logout actions



  }

  return (
    <>

      {!data || data.length === 0 ? (
        <tr>
          <td colSpan="6" className='text-center'>No Data Available</td>
        </tr>
      ) : (
        data.map((ele, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">{ele.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{ele.age}</td>
            <td className="px-6 py-4 whitespace-nowrap">{ele.gender}</td>
            <td className="px-6 py-4 whitespace-nowrap">{ele.endDate}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button onClick={() => handleEdit(ele)} className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                Edit
              </button>
              <button onClick={() => handleDelete(ele.id, ele.name)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
        ))
      )}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4">Edit Member</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={currentMember.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                <input
                  type="text"
                  name="age"
                  value={currentMember.age}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={currentMember.gender}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={currentMember.endDate}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-600 transition duration-150 ease-in-out">
                  Save
                </button>
                <button onClick={() => setIsModalOpen(false)} type="button" className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TableBody