import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ActivityLogTable from './ActivityLogTable'
import axios from 'axios'
const ActivityLog = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8081/activityLog/getActivity')
            .then(res => {
                if (res.status === 200) {
                    setData(res.data)
                }
                else {
                    console.log(res.status)
                }
            })
            .catch(err => console.error(err))
    }, []
    )

    return (
        <div className="flex h-screen bg-gray-100">
            <Navbar />
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                </div>
                <div className="p-4">
                    <>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TimeStamp</th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                                {!data || data.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className='text-center'>No Data Available</td>
                                    </tr>
                                ) : (<ActivityLogTable data={data} />)}

                            </tbody>
                        </table>
                    </>
                </div>
            </div>

        </div>
    )
}

export default ActivityLog