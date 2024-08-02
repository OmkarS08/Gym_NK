import React from 'react'
import Navbar from '../Navbar/Navbar'
const Setting = () => {
  return (
    <div className="flex h-screen bg-gray-100">
    <Navbar/>
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 ">
        <div className='flex-button-container'>
        </div>
      </div>
      <div className="p-4">
         <ul>
          <li >Payment toggle</li>
          <li>change fees strucutre</li>
          <li>Change in password</li>
         </ul>
      </div>
    </div>

  </div>
  )
}

export default Setting