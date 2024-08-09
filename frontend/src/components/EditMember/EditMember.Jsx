import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import logActivity from '../../globalFunction/ActivityLog';

const EditMember = ({ member, handleClose }) => {
  const [formData, setFormData] = useState({
    name: member.name,
    age: member.age,
    mobile: member.mobile,
    gender: member.gender,
    package: member.package ,
    startDate: member.startDate,
    payment: member.paymentMethod,
  });
  const oldMemberName = member.name;
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8081/members/updateMember/${member.id}`, formData)
      .then(res => {
        if (res.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Member information has been updated.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar:"True"
          });
          handleClose(); // Close the modal after successful update
                  
          const myreload = ()=>{
            window.location.reload()
          }
          setTimeout(myreload,1600)

          logActivity(localStorage.getItem('loginId'),`Member with name id ${oldMemberName === formData.name ? oldMemberName : formData.name } has been edited`)
        } else {
          console.log('Update failed');
        }
      })
      .catch(err => {
        console.error('Error:', err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white border rounded-lg px-8 py-5 mx-auto my-10 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Member</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            {/* Name Input */}
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

            {/* Age Input */}
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

            {/* Mobile Input */}
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile:</label>
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

            {/* Gender Dropdown */}
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

            {/* Package Radio Buttons */}
            <div className="mb-2 col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Package:</label>
              <div className="grid grid-cols-2 gap-4">
                {["1", "3", "6", "12"].map((pkg) => (
                  <label key={pkg} className="flex items-center text-gray-700 font-medium mb-2">
                    <input
                      type="radio"
                      name="package"
                      value={pkg}
                      checked={formData.package == pkg}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {pkg} Month{pkg !== "1" && "s"}
                  </label>
                ))}
              </div>
            </div>

            {/* Start Date Input */}
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

            {/* Payment Dropdown */}
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
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={handleEditSubmit}
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
        </form>
      </div>
    </div>
  );
}

export default EditMember;