import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddStaffMember = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    role: '0',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const { name, password, confirmPassword, role } = formData;
    console.log(formData);

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
      return;
    }


    axios.post('http://localhost:8081/staffMember/addStaffMember', {
      name,
      password,
      role,
    }).then(res => {
      if (res.status === 200) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "New Member has been added",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        handleClose();  // Close the form on success
        const myreload = () => {
          window.location.reload()
        }

        setTimeout(myreload, 1590)
      }
    })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something went wrong! ${err}`,
        });
      })


  }


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white border rounded-lg px-16 py-6 mx-auto my-10 w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Staff Member</h2>
        <form>
          <div className="grid grid-cols-1 gap-4">
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>

            {/* Show Password Toggle */}
            <div className="mb-4">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={toggleShowPassword}
              />
              <label htmlFor="showPassword" className="ml-2 text-gray-700 font-medium">Show Password</label>
            </div>

            {/* Role Input */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 font-medium mb-2">Role:</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              >
                <option value='0'>Staff</option>
                <option value='1'>Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center mx-auto mt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="ml-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffMember;
