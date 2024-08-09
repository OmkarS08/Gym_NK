import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logActivity from '../../globalFunction/ActivityLog';

const MemberForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      mobile:'',
      gender: '',
      package: '',
      startDate: '',
      payment:''
    });
  const navigate = useNavigate()
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // handle form submission
      console.log(formData);
      axios.post('http://localhost:8081/members/AddMember', formData)
            .then(res => {
                if (res.data === "Success") {
                    console.log(res)
                    localStorage.setItem('showSuccessAlert', 'true'); 
                    navigate('/Members')
                    logActivity(localStorage.getItem('loginId'),`New Member Added--> ${formData.name}`)
                }
                
                else {
                    console.log(res)
                }
            })
            .catch(err => console.log(err));
    };
  
    return (
      <div className="bg-white border rounded-lg px-8 py-5 mx-auto my-8 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              // pattern="(\+91[\-\s]?)?[0]?(91)?[789]\d{9}" 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Package:</label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/4">
                <label htmlFor="color-red" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="radio"
                    id="color-red"
                    name="package"
                    value="1"
                    checked={formData.package === '1'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  1 Month
                </label>
              </div>
              <div className="px-2 w-1/4">
                <label htmlFor="color-blue" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="radio"
                    id="color-blue"
                    name="package"
                    value="3"
                    checked={formData.package === '3'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  3 Months
                </label>
              </div>
              <div className="px-2 w-1/4">
                <label htmlFor="color-green" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="radio"
                    id="color-green"
                    name="package"
                    value="6"
                    checked={formData.package === '6'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  6 Months
                </label>
              </div>
              <div className="px-2 w-1/4">
                <label htmlFor="color-green" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="radio"
                    id="color-green"
                    name="package"
                    value="12"
                    checked={formData.package === '12'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  12 Months
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Start date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="payment" className="block text-gray-700 font-medium mb-2">Payment:</label>
            <select
              id="payment"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            >
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
          <div className="p-10 text-center">
            <button type="submit" className="bg-blue-500 text-white h-200 px-12 py-4 rounded-full hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    );
  };
export default MemberForm