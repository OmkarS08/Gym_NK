import React from 'react'

const ChangePassword = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white border rounded-lg px-8 py-5 mx-auto my-10 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Member</h2>
        <form>
          
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
   

        </form>
      </div>
    </div>
  )
}

export default ChangePassword