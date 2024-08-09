import React from 'react'
import { useNavigate } from 'react-router-dom'
import logActivity from '../../globalFunction/ActivityLog'
import Swal from 'sweetalert2'
const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = (event) => {

        if (event.target.name === '') {
            Swal.fire({
                title: "Are you sure want to Logout?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes,Logout"
            }).then((result) => {
                if (result.isConfirmed) {
                    logActivity(localStorage.getItem('loginId'),'Logged Out');
                    localStorage.removeItem('loginId');
                    navigate('/');
                }
            });
        }
        else {
            navigate(`/${event.target.name}`)
        }

    }

    return (
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <span className="text-white font-bold uppercase">NK Gym Dashboard</span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800">
                    <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                        name='Dasboard'
                        onClick={handleClick}>
                        Home
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='Members'
                        onClick={handleClick}>
                        Member
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='AddMember'
                        onClick={handleClick}>
                        Add Member
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='Notification'
                        onClick={handleClick}
                    >
                        Notification
                    </a>

                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='ActivityLogs'
                        onClick={handleClick}
                    >
                        Activity Logs
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='Setting'
                        onClick={handleClick}
                    >
                        Setting
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name=''
                        onClick={handleClick}
                    >
                        Logout
                    </a>

                </nav>
            </div>
        </div>
    )
}

export default Navbar