import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import SteamBathForm from './SteamBathForm'
import SteamBatchCard from './SteamBatchCard'
import axios from 'axios'
const SteamBath = () => {
  const [steamBathFormOn, setSteamBathFromOn] = useState(false);
  const [steamBathData, setSteamBathData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/steamBath/getSteamData')
      .then(res => {
        if (res.status === 200) {
          setSteamBathData(res.data)
        }
        else {
          console.log(res.status);
        }
      })
      .catch(err => console.log(err));

  }, [])

  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
        </div>
        <div className="p-4">
          <div className='flex justify-center p-4  py-4'>
            <button
              onClick={() => setSteamBathFromOn(!steamBathFormOn)}
              class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline flex flex-items-center">
              <svg className='mr-2' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.5 4.13516C3.5 3.23209 4.23209 2.5 5.13516 2.5C5.80379 2.5 6.40505 2.90708 6.65338 3.52788L6.79665 3.88607C6.20214 4.31929 5.71643 4.92335 5.41723 5.66014C4.99692 6.69515 5.01959 7.80665 5.3978 8.76651C5.47221 8.95535 5.61997 9.10596 5.80735 9.18396C5.99473 9.26197 6.20572 9.26069 6.39215 9.18044L12.3529 6.61436C12.725 6.45417 12.9026 6.02744 12.7541 5.65053C12.3758 4.69029 11.637 3.87189 10.6217 3.43813C9.81033 3.09152 8.94952 3.04489 8.15623 3.24613L8.04609 2.97079C7.56997 1.7805 6.41715 1 5.13516 1C3.40366 1 2 2.40366 2 4.13516V11H1.75C1.33579 11 1 11.3358 1 11.75C1 12.1642 1.33579 12.5 1.75 12.5H2V12.75C2 12.7538 2.00003 12.7576 2.00008 12.7614C1.99999 12.7799 2 12.7985 2.00001 12.8168L2.00001 12.8546C2 13.2298 2 13.4498 2.01557 13.6952C2.15751 15.9316 3.36604 17.9968 5.11758 19.3472C5.10383 19.3688 5.09106 19.3913 5.07934 19.4148L4.07934 21.4148C3.8941 21.7852 4.04427 22.2357 4.41475 22.421C4.78524 22.6062 5.23574 22.4561 5.42098 22.0856L6.3887 20.1501C7.19042 20.5559 8.0623 20.823 8.96911 20.9148C9.21355 20.9396 9.36275 20.9452 9.61687 20.9548L9.62369 20.955C10.3639 20.9828 11.0885 21 11.75 21C12.4115 21 13.1361 20.9828 13.8763 20.955L13.883 20.9548C14.1372 20.9452 14.2865 20.9396 14.5309 20.9148C15.4378 20.823 16.3098 20.5559 17.1116 20.15L18.0793 22.0856C18.2646 22.4561 18.7151 22.6062 19.0856 22.421C19.4561 22.2357 19.6062 21.7852 19.421 21.4148L18.421 19.4148C18.4092 19.3913 18.3964 19.3687 18.3827 19.347C20.1341 17.9966 21.3425 15.9315 21.4845 13.6952C21.5 13.4498 21.5 13.2299 21.5 12.8546L21.5 12.8168C21.5 12.7567 21.5001 12.6942 21.4963 12.6365C21.4933 12.5905 21.4886 12.545 21.4821 12.5H21.75C22.1642 12.5 22.5 12.1642 22.5 11.75C22.5 11.3358 22.1642 11 21.75 11H3.5V4.13516Z" fill="#ffffff"></path> </g></svg>


              Add Steam Schedule
            </button>
          </div>
          {steamBathFormOn ? <SteamBathForm close={setSteamBathFromOn} /> : null}
          {steamBathData.length > 0 ? <SteamBatchCard data={steamBathData} /> : <div className='bg-white w-full text-black-800 text-center'>No Steam Shedule </div>}
        </div>
      </div>

    </div>

  )
}

export default SteamBath