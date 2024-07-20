import React from 'react'
import MemberForm from '../MemberForm/MemberForm'
import Navbar from '../Navbar/Navbar'
import MemberTable from '../MemberTable/MemberTable'
const Members = () => {
  return (
    <div class="flex h-screen bg-gray-100">
    <Navbar/>
    <div class="flex flex-col flex-1 overflow-y-auto">
      <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200 ">
        <div className='flex-button-container'>
        </div>
      </div>
      <div class="p-4">
        <MemberTable/>
      </div>
    </div>

  </div>
  )
}

export default Members