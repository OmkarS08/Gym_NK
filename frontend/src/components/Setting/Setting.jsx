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
      <div className='grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8'>
            <button
              class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
              Payment toggle
            </button>
            <button
              class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
              change fees strucutre
            </button>
            <button
              class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
              Change in password
            </button>
            <button
              class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
              Add staff Member
            </button>
      </div>
      </div>
    </div>

  </div>
  )
}

export default Setting