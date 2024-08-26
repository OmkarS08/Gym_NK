import React from 'react'
import DashboardCompo from '../DashboardCompo/DashboardCompo'
import Navbar from '../Navbar/Navbar'
import DashboardTChart from '../DashboardCompo/DashboardTChart'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import logActivity from '../../globalFunction/ActivityLog'
import DashboardPieChart from '../DashboardCompo/DashboardPieChart'
const Dashboard = () => {

  const navigate = useNavigate();
  const isadmin = localStorage.getItem('admin');
  console.log(isadmin)

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Clear session on the client side
      logActivity(localStorage.getItem('loginId'),'Logged Out');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginId'); // Clear user ID
      // Redirect to the login page
  
      navigate('/');
    }, 8 * 60 * 1000); // 8 minutes

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar isadmin={isadmin}/>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
        </div>
        <div className="p-4">
          <DashboardCompo />
          <div className='w-full flex mx-6 px-2 my-4  justify-center'>
          <div className='w-90 '>
              <DashboardPieChart/>
            </div>
            <div className='w-1/2'>
              <DashboardTChart/>
            </div>
         </div>
        </div>
      </div>

    </div>

  )
}

export default Dashboard