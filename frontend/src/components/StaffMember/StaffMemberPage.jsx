import React, { useState } from 'react'
import StaffMember from './StaffMember'
import Navbar from '../Navbar/Navbar'
import AddStaffMember from './AddStaffMember'
const StaffMemberPage = () => {

    const [addStaff,setaddStaff] = useState(false)
    const AddStaffOpen = () =>{
        setaddStaff(!addStaff)
        console.log(addStaff)
    }
    return (
        <div className="flex h-screen bg-gray-100">
          <Navbar/>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            </div>
            <div className="p-4">
                <div className='flex justify-center p-4  py-4'>
                <button
                    onClick={AddStaffOpen}
					class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
					Add Staff Member
				</button>
                </div>
                <StaffMember />
                {addStaff ? <AddStaffMember handleClose={()=>AddStaffOpen(false)}/> : ''}
            </div>
          </div>
    
        </div>
    
      )
}

export default StaffMemberPage