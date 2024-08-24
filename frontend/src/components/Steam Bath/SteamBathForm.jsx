import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
const SteamBathForm = () => {

    const [members, setMembers] = useState([]);
   const [steamBathData,setSteamBathData]= useState({
    members:'',
    date:'',
    time:''
   })
    

  useEffect(()=>{
 
        axios.get(`http://localhost:8081/members/getOnlyMember`)
        .then(res=>{
            if(res.status === 200)
            {
                setMembers(res.data);
                console.log(members)
            }
            else
            {
                console.log(res.status)
            }
        })
    
  },[])

  const SteamFormSubmit = ()=>{
    console.log('submit');
  }
  

  console.log(members)



return (
    <div>
        {/* Form */}
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                Book an Appointment
            </div>
            <form className="py-4 px-6" action={SteamFormSubmit} Method ='post'>
                {/* Search for Members */}
                <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Add Members</label>
            <Select 
              options={members}
             
              isMulti
              placeholder="Search and select members"
            />
          </div> 
                {/* Date and Time */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Date</label>
                    <input type="date" id="date" className="shadow border rounded w-full py-2 px-3 text-gray-700" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Time</label>
                    <input type="time" id="time" className="shadow border rounded w-full py-2 px-3 text-gray-700" />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center mb-4">
                    <button type="button" className="bg-blue-500 mx-4 my-4 text-white px-6 py-2 rounded-lg" >
                        Book Appointment
                    </button>
                    <button type="button" className="mx-4 my-4 bg-red-600 text-white px-6 py-2 rounded-lg">
                        Cancel
                    </button>
                </div>
            </form>
        </div>

    </div>
   

  );

};

export default SteamBathForm;
