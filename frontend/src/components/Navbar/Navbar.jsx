import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = (event) => {
          navigate(`/${event.target.name}`)
    }

    return (
        <div class="hidden md:flex flex-col w-64 bg-gray-800">
            <div class="flex items-center justify-center h-16 bg-gray-900">
                <span class="text-white font-bold uppercase">NK Gym Dashboard</span>
            </div>
            <div class="flex flex-col flex-1 overflow-y-auto">
                <nav class="flex-1 px-2 py-4 bg-gray-800">
                    <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                        name='Dasboard'
                        onClick={handleClick}>
                        Home
                    </a>
                    <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='Members'
                        onClick={handleClick}>
                        Member
                    </a>
                    <a
                        href="#"
                        class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
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