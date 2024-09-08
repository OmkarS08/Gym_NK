import React, { useEffect, useState } from 'react'

import axios from 'axios';
const DashboardCompo = () => {
  
    const [count,setCount] = useState({
        female: null,
        male:null,
        total:null,
    });

    useEffect(()=>{
        axios.get('http://localhost:8081/dashboard/memberCount')
        .then(res =>{
            if (res.status === 200) {
                // Assuming res.data contains an array of gender counts
                const genderData = res.data;
                const genderCount = {
                    female: genderData.find(g => g.gender === 'female')?.gender_count || 0,
                    male: genderData.find(g => g.gender === 'male')?.gender_count || 0,
                    total: genderData.find(g => g.gender === 'Total')?.gender_count || 0
                };
                setCount(genderCount);
            }
        })
        .catch(error => {
            console.error('Error fetching member count:', error);
        });
    },[count])


  return (
    <div>
    <div className="grid grid-cols-1 gap-4 px-2 mt-8 sm:grid-cols-3 sm:px-8">
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" className="text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                </path>
            </svg></div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Member</h3>
            <p className="text-3xl">{count.total}</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-400">
        <svg width="64px" height="64px" viewBox="-15.14 0 47.753 47.753" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="_20" data-name="20" d="M270.333,630.217h-3.194V616.968h-.718v31.2h-4.505V630.243h-.646v17.924h-4.5v-31.2h-.718v13.249h-3.194V615.683h.016v-.908c0-2.962,5.78-4.388,8.724-4.388s8.724,1.426,8.724,4.388v.908h.016Zm-8.578-21.847a3.978,3.978,0,1,1,4.038-3.978A4.02,4.02,0,0,1,261.755,608.37Z" transform="translate(-252.853 -600.414)" fill="#ffffff" fill-rule="evenodd"></path> </g></svg> </div>        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Male Members</h3>
            <p className="text-3xl">{count.male}</p>
        </div>
    </div>
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-indigo-400">
        <svg width="64px" height="64px" viewBox="-11.69 0 48.004 48.004" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_18" data-name="18" transform="translate(-843.13 -450.462)"> <path id="Path_195" data-name="Path 195" d="M855.564,458.219a3.88,3.88,0,1,1,3.77-3.878A3.837,3.837,0,0,1,855.564,458.219Z" fill="#ffffff" fill-rule="evenodd"></path> <path id="Path_196" data-name="Path 196" d="M860.373,473.407c-1.05-5.144-.788-7.4-.288-7.4s1.841,3.16,2.413,5.429c.492,1.948,1.668,6.281,1.668,6.281l3.584-.293s-.885-3.44-1.573-6.29-1.1-5.086-2.756-7.909c-1.761-3.006-7.138-2.945-7.981-2.916-.843-.029-6.22-.09-7.981,2.916-1.653,2.823-2.068,5.058-2.757,7.909s-1.572,6.29-1.572,6.29l3.647.3s1.225-4.3,1.717-6.247c.572-2.269,1.8-5.468,2.3-5.468s.762,2.258-.289,7.4c-.983,4.815-5.214,9.913-5.214,9.913a21.817,21.817,0,0,0,5.186,1.663,46.655,46.655,0,0,0,4.668.358,58.8,58.8,0,0,0,5.913-.6,21.113,21.113,0,0,0,4.529-1.418S861.357,478.222,860.373,473.407Z" fill="#ffffff" fill-rule="evenodd"></path> <g id="Group_264" data-name="Group 264"> <rect id="Rectangle_64" data-name="Rectangle 64" width="4" height="15" transform="translate(850 483.466)" fill="#ffffff"></rect> <rect id="Rectangle_65" data-name="Rectangle 65" width="4" height="15" transform="translate(856 483.466)" fill="#ffffff"></rect> </g> <path id="Path_197" data-name="Path 197" d="M854.412,485.963" fill="#ffffff" fill-rule="evenodd"></path> </g> </g></svg>
        </div>
        <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Female Members</h3>
            <p className="text-3xl">{count.female}</p>
        </div>
    </div>
    
</div>

</div>
  )
}

export default DashboardCompo