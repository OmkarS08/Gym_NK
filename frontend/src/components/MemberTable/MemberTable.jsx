import React, { useEffect, useState } from 'react'
import TableBody from './TableBody'
import axios from 'axios'

const MemberTable = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/getMemeber')
        .then(res => {
            if (res.status === 200) {
                setData(res.data)
                console.log('pass')
            }
            else {
                console.log(res.status)
            }
        })
        .catch(err => console.log(err))
    },[])
    console.log(data)
  return (
 <>   
    <table className="min-w-full divide-y divide-gray-200">
    <thead>
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">

    {!data ?"No data": <TableBody data = {data}  setData ={setData}/> }

    </tbody>
</table>
</>
  )
}

export default MemberTable