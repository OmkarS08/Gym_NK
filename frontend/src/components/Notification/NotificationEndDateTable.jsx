import React from 'react'

const NotificationEndDateTable = ({ data }) => {
    return (
        data.map((ele, index) => (
            <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{'-->'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ele.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ele.mobile}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ele.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ele.days_left}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <button
                        class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
                        Send Reminder
                    </button>
                </td>
            </tr>))
    )
}

export default NotificationEndDateTable