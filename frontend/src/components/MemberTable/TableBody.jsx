import React from 'react'
import axios from 'axios';

import Swal from 'sweetalert2'

const TableBody = ({ data }) => {


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
        axios.post(`http://localhost:8081/deleteMember/${id}`)
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
              <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                Edit
              </button>
              <button onClick={() => handleDelete(ele.id, ele.name)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
        ))
      )}
    </>
  )
}

export default TableBody