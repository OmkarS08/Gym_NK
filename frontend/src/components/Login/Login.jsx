import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();


    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        console.log(values);
    }

    const handleSubmit = (event) => {
       
        console.log('submit');
        axios.post('http://localhost:8081/login', values)
            .then(res => {
                if (res.data === "Success") {
                    navigate('/Dasboard');
                    console.log(res)
                    setValues({username: '',password: ''})
                }
                
                else {
                    alert("No Record Existed");
                    console.log(res)
                }
            })
            .catch(err => console.log(err));
     
    }




    return (
        <div class="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div class="relative py-3 sm:max-w-xs sm:mx-auto">
                <div class="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
                    <div class="flex flex-col justify-center items-center h-full select-none">
                        <div class="flex flex-col items-center justify-center gap-2 mb-8">
                            <a href="https://amethgalarcio.web.app/" >
                                <img src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg" alt='logi' class="w-8" />
                            </a>
                            <p class="m-0 text-[16px] font-semibold dark:text-white">NK</p>
                            <span class="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Get started with our app, just start section and enjoy experience.
                            </span>
                        </div>
                        <div class="w-full flex flex-col gap-2">
                            <label class="font-semibold text-xs text-gray-400 ">Username</label>
                            <input onChange={handleInput} name='username' value={values.username} class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="Username" />

                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-2">
                        <label class="font-semibold text-xs text-gray-400 ">Password</label>
                        <input onChange={handleInput} name='password' value={values.password} type="password" class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="••••••••" />

                    </div>
                    <div className="mt-5">
                        <button onClick={handleSubmit} class="py-1 px-8 bg-gray-500 hover:bg-gray-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login