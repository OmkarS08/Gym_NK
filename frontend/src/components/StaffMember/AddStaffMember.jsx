import React from 'react'

const AddStaffMember = ({handleClose}) => {

    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white border rounded-lg px-8 py-5 mx-auto my-10 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add StaffMember Member</h2>
        <form>
          <div className="grid grid-cols-1 gap-4">
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"

                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                readOnly
              />
            </div>

            {/* Age Input */}
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Password:</label>
              <input
                type="number"
                id="age"
                name="age"
 
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Mobile Input */}
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Confirm Password:</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"

                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          

          {/* Submit Button */}
          <div className="flex justify-center items-center mx-auto mt-4">
            <button
              type="button"
              
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
}

export default AddStaffMember