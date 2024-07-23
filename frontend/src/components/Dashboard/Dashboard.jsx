import React from 'react'
import DashboardCompo from '../DashboardCompo/DashboardCompo'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Dashboard = () => {

  const [data,setData] =useState()

  useEffect(()=>{
    axios.get('http://localhost:8081/dashboardCount')
    .then(res => {
        if (res.status === 200) {
            setData(res.data)
            console.log('pass')
            console.log(res)
        }
        else {
            console.log(res.status)
        }
    })
    .catch(err => console.log(err))
},[])


  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar/>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
        </div>
        <div className="p-4">
          <DashboardCompo />
        </div>
      </div>

    </div>

  )
}

export default Dashboard