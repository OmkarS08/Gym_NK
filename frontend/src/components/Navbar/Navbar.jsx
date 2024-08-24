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
                    logActivity(localStorage.getItem('loginId'), 'Logged Out');
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('loginId'); // Clear user ID
                    // Redirect to the login page
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
                <img className='mx-2'  src="2DPNG.png" alt="logo" width="50" height="50"/>
                <span className="text-white font-bold uppercase">NK Gym Dashboard</span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800">

                    <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                        name='Dashboard'
                        onClick={handleClick}>
                        <svg fill="#ffffff" className='mx-2' width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"></path></g></svg>
                        Home
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='Members'
                        on  Click={handleClick}>
                        <svg className='mx-2' width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        
                        Member
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='AddMember'
                        onClick={handleClick}>
                        <svg className='mx-2' width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3249 15.0763C12.8883 15.0257 12.4456 15 12 15C10.0188 15 8.09292 15.5085 6.52112 16.4465C5.30069 17.1749 4.34666 18.1307 3.74108 19.2183C3.46638 19.7117 3.79562 20.2902 4.34843 20.4054C7.85678 21.1365 11.4437 21.3594 15 21.074V21H14C12.3431 21 11 19.6569 11 18C11 16.5753 11.9932 15.3825 13.3249 15.0763Z" fill="#ffffff"></path> <path d="M18 14L18 22" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"></path> <path d="M22 18L14 18" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"></path> <circle cx="12" cy="8" r="5" fill="#ffffff"></circle> </g></svg>
                        Add Member
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='StaffMember'
                        onClick={handleClick}
                    >
                    <svg className='mx-2' width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                        Staff Member
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='steamBath'
                        onClick={handleClick}
                    >
                    <svg className='mx-2' width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.5 4.13516C3.5 3.23209 4.23209 2.5 5.13516 2.5C5.80379 2.5 6.40505 2.90708 6.65338 3.52788L6.79665 3.88607C6.20214 4.31929 5.71643 4.92335 5.41723 5.66014C4.99692 6.69515 5.01959 7.80665 5.3978 8.76651C5.47221 8.95535 5.61997 9.10596 5.80735 9.18396C5.99473 9.26197 6.20572 9.26069 6.39215 9.18044L12.3529 6.61436C12.725 6.45417 12.9026 6.02744 12.7541 5.65053C12.3758 4.69029 11.637 3.87189 10.6217 3.43813C9.81033 3.09152 8.94952 3.04489 8.15623 3.24613L8.04609 2.97079C7.56997 1.7805 6.41715 1 5.13516 1C3.40366 1 2 2.40366 2 4.13516V11H1.75C1.33579 11 1 11.3358 1 11.75C1 12.1642 1.33579 12.5 1.75 12.5H2V12.75C2 12.7538 2.00003 12.7576 2.00008 12.7614C1.99999 12.7799 2 12.7985 2.00001 12.8168L2.00001 12.8546C2 13.2298 2 13.4498 2.01557 13.6952C2.15751 15.9316 3.36604 17.9968 5.11758 19.3472C5.10383 19.3688 5.09106 19.3913 5.07934 19.4148L4.07934 21.4148C3.8941 21.7852 4.04427 22.2357 4.41475 22.421C4.78524 22.6062 5.23574 22.4561 5.42098 22.0856L6.3887 20.1501C7.19042 20.5559 8.0623 20.823 8.96911 20.9148C9.21355 20.9396 9.36275 20.9452 9.61687 20.9548L9.62369 20.955C10.3639 20.9828 11.0885 21 11.75 21C12.4115 21 13.1361 20.9828 13.8763 20.955L13.883 20.9548C14.1372 20.9452 14.2865 20.9396 14.5309 20.9148C15.4378 20.823 16.3098 20.5559 17.1116 20.15L18.0793 22.0856C18.2646 22.4561 18.7151 22.6062 19.0856 22.421C19.4561 22.2357 19.6062 21.7852 19.421 21.4148L18.421 19.4148C18.4092 19.3913 18.3964 19.3687 18.3827 19.347C20.1341 17.9966 21.3425 15.9315 21.4845 13.6952C21.5 13.4498 21.5 13.2299 21.5 12.8546L21.5 12.8168C21.5 12.7567 21.5001 12.6942 21.4963 12.6365C21.4933 12.5905 21.4886 12.545 21.4821 12.5H21.75C22.1642 12.5 22.5 12.1642 22.5 11.75C22.5 11.3358 22.1642 11 21.75 11H3.5V4.13516Z" fill="#ffffff"></path> </g></svg>
                        Steam Bath
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='Notification'
                        onClick={handleClick}
                    >
                    <svg  className='mx-2' width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z" fill="#ffffff"></path> <path d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z" fill="#ffffff"></path> </g></svg>
                        Notification
                    </a>

                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='ActivityLogs'
                        onClick={handleClick}
                    > 
                    <svg fill="#ffffff" className='mx-2'  width="32px" height="32px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Artboard</title><path d="M768 307.2V384H384v-76.8h384zM384 537.6h384v-76.8H384v76.8zm0 153.6h384v-76.8H384v76.8zM256 384h76.8v-76.8H256V384zm76.8 153.6v-76.8H256v76.8h76.8zM256 691.2h76.8v-76.8H256v76.8z" fill-rule="evenodd"></path></g></svg>                        Activity Logs
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name='Setting'
                        onClick={handleClick}
                    >
                    <svg fill="#ffffff"   width="45px" height="45px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M698.8 563.1l69.2-.1V460.8l-69.1-.2-7.7.2c-14.4-.1-18.4-12-18.4-26.5 0-7.2 2.9-13.7 7.6-18.4l48.8-48.8-72.4-72.4-48.9 48.9c-4.7 4.7-11.2 7.6-18.4 7.6-14.5 0-26.2-11.7-26.3-26.1v-69.2H460.8v68.9h-.1c-.1 14.5-11.8 26.2-26.3 26.2-7.1 0-13.5-2.9-18.2-7.4l-49.1-49.1-72.3 72.4 48.8 48.8s0 .1-.1.1c4.7 4.8 7.6 11.3 7.6 18.5 0 14.4-4 26.2-18.4 26.5H256v102.4l69-.2v.2c14.4.1 26.1 11.8 26.1 26.3 0 7.1-2.9 13.5-7.4 18.2l-49 49 72.4 72.4 48.8-48.8s.1 0 .1.1c4.7-4.6 11.2-7.6 18.4-7.6 14.4 0 26.2 4.1 26.4 18.5 0 0-.1 7.5 0 7.5v69.3l102.4-.2v-69.1h.1c.2-14.4 11.8-26 26.2-26 7.2 0 13.6 2.9 18.4 7.5h.1l48.8 48.8 72.4-72.4-48.8-48.8c-4.6-4.7-7.5-11.2-7.5-18.4-.1-14.6 11.5-26.3 25.9-26.4zM512 614c-56.5 0-102.3-45.8-102.3-102.3S455.5 409.3 512 409.3s102.3 45.8 102.3 102.4C614.4 568.2 568.5 614 512 614z"></path></g></svg>
                        Setting
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                        name=''
                        onClick={handleClick}
                    >
                        <svg width="30px" height="30px" className='mx-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H6zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414z" clip-rule="evenodd"></path></g></svg>
                        Logout
                    </a>

                </nav>
            </div>
        </div>
    )
}

export default Navbar