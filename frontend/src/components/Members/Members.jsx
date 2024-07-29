import React from 'react'
import Navbar from '../Navbar/Navbar'
import MemberTable from '../MemberTable/MemberTable'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
const Members = () => {
  useEffect(() => {
    const showSuccessAlert = localStorage.getItem('showSuccessAlert');
    if (showSuccessAlert === 'true') {
      Swal.fire({
        toast:true,
        position: "top-end",
        icon: "success",
        title: "New Member has been added",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar:"True"
      });
      localStorage.removeItem('showSuccessAlert');  // Remove flag
    }
  }, []);
  return (
    <div className="flex h-screen bg-gray-100">
    <Navbar/>
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 ">
        <div className='flex-button-container'>
        </div>
      </div>
      <div className="p-4">
        <MemberTable/>
      </div>
    </div>

  </div>
  )
}

export default Members