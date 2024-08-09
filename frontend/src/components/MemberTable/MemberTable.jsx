import React, { useEffect, useState } from 'react'
import TableBody from './TableBody'
import axios from 'axios'

const MemberTable = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/members/getMember')
            .then(res => {
                if (res.status === 200) {
                    setData(res.data)
    
                }
                else {
                    console.log(res.status)
                }
            })
            .catch(err => console.log(err))
    }, [])
    console.log(data)
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredData(filtered);
    }

    return (
        <>
        <>
            <div className="flex justify-start mb-4 ">
                <input 
                    type="search" 
                    placeholder="Search by name" 
                    value={searchTerm} 
                    onChange={handleSearch} 
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
            </div>
        </>
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

                {filteredData.length === 0 ? <TableBody data={data } setData={setData} /> : <TableBody data={filteredData} setData={setData} />}

                </tbody>
            </table>
        </>
    )
}

export default MemberTable