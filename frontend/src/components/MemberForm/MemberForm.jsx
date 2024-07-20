import React from 'react'

const MemberForm = () => {
  return (
  <div>
    <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
    <h2 class="text-2xl font-medium mb-4">Survey</h2>
    <form>
        <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" id="name" name="name"
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        <div class="mb-4">
            <label for="age" class="block text-gray-700 font-medium mb-2">Age</label>
            <input type="number" id="age" name="age"
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        <div class="mb-4">
            <label for="gender" class="block text-gray-700 font-medium mb-2">Gender</label>
            <select id="gender" name="gender"
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">What is your favorite color?</label>
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                    <label for="color-red" class="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-red" name="color" value="red" class="mr-2"/>Red
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="color-blue" class="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-blue" name="color" value="blue" class="mr-2"/>Blue
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="color-green" class="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-green" name="color" value="green" class="mr-2"/>Green
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">What is your favorite animal?</label>
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                    <label for="animal-cat" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" id="animal-cat" name="animal[]" value="cat" class="mr-2"/>Cat
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-dog" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" id="animal-dog" name="animal[]" value="dog"
                            class="mr-2"/>Dog
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-bird" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" id="animal-bird" name="animal[]" value="bird" class="mr-2"/>Bird
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" name="message"
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
        </div>
        <div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
        </div>

    </form>
</div>
  </div>
  )
}

export default MemberForm