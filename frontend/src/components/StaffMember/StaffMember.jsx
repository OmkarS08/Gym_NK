import React, { useEffect, useState } from 'react'
import axios from 'axios';
const StaffMember = () => {

    const [staffMemberData , setStaffMemberData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/members/staffMembers')
            .then(res => {
                if (res.status === 200) {
                    setStaffMemberData(res.data)
                        console.log(staffMemberData)
                }
                else {
                    console.log(res.status)
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div class="flex items-center justify-center px-auto py-auto">
            <table class="w-[90%] text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr class="border-b">
                        <th class="text-left p-4 px-5">id</th>
                        <th class="text-left p-4 px-5">Email</th>
                        <th class="text-left p-4 px-5">Role</th>
                        <th class="text-left p-4 px-5">Actions</th>
                        <th></th>
                    </tr>
                    { staffMemberData ? 
                    staffMemberData.map((ele) =>(
                         <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-4 px-5">
                           {ele.id}
                        </td>
                        <td class="p-4 px-5">
                            {ele.username}
                        </td>
                        <td class="p-4 px-5">
                                <select id="role" value={ele.admin? 'admin' : 'staff'} >
                                    <option value="staff">Staff</option>
                                    <option value="admin">Admin</option>
                                </select>
                        </td>
                        <td class="p-3 px-5">
                            <button type="button"
                                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button
                                    type="button"
                                    class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                        </td>
                    </tr>)) : ''}
                </tbody>
            </table>
        </div>
    )
}

export default StaffMember