import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logActivity from '../../globalFunction/ActivityLog';

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        axios.post('http://localhost:8081/auth/login', values)
            .then(res => {
                if (res.data.status === 'success') {
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('loginId', res.data.userId); // Store the user ID 
                    localStorage.setItem('admin', res.data.admin > 0 ? 'true' : 'false');
                    Swal.fire({
                        toast: true,
                        position: "top-end",
                        icon: "success",
                        title: `Welcome ${res.data.userName}`,
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true
                    });
                    navigate('/Dashboard'); // Redirect to dashboard

                    logActivity(res.data.userId, 'User logged in');
                } else {
                    Swal.fire('Login Failed', res.data.message, 'error');
                }
            })
            .catch(err => console.error(err));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    }

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:max-w-xs sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                    <div className="flex flex-col justify-center items-center h-full select-none">
                        <div className="flex flex-col items-center justify-center gap-2 mb-8">
                            <img src="/2DPNG.png" alt='logi' className="w-22" />
                            <p className="m-0 text-[16px] font-semibold dark:text-white">NK</p>
                            <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Let's get this fitness party started!</span>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-400 ">Username</label>
                            <input onChange={handleInput} name='username' type='text' value={values.username} className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="Username" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold text-xs text-gray-400 ">Password</label>
                        <input onChange={handleInput} onKeyDown={handleKeyPress} name='password' value={values.password} type="password" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="••••••••" />
                    </div>
                    <div className="mt-5">
                        <button onKeyDown={handleKeyPress} onClick={handleSubmit} className="py-1 px-8 bg-gray-500 hover:bg-gray-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
