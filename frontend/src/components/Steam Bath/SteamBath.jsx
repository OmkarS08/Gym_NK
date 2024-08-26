import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import SteamBathForm from './SteamBathForm'
import SteamBatchCard from './SteamBatchCard'
import axios from 'axios'
const SteamBath = () => {
    const [steamBathFormOn , setSteamBathFromOn] = useState(false);
    const [steamBathData,setSteamBathData] = useState([]);

    useEffect( () =>{
       axios.get('http://localhost:8081/steamBath/getSteamData')
        .then(res=>{
          if(res.status === 200)
          {
            setSteamBathData(res.data)
            console.log(steamBathData);
          }
          else
          {
            console.log(res.status);
          }
        })
        .catch(err => console.log(err));
      
    },[])

    return (
        <div className="flex h-screen bg-gray-100">
          <Navbar/>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            </div>
            <div className="p-4">
            <div className='flex justify-center p-4  py-4'>
            <button
                    onClick={() => setSteamBathFromOn(!steamBathFormOn)}
					class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
					Add Steam Schedule
				</button>
              </div>   
             {steamBathFormOn ? <SteamBathForm  close={setSteamBathFromOn}/> :null}
             {steamBathData.length > 0 ?<SteamBatchCard data={steamBathData}/> : <div className='bg-white w-full text-black-800 text-center'>No Steam Shedule </div>}
            </div>
          </div>
    
        </div>
    
      )
}

export default SteamBath