import React from 'react'

const NotificationEndDateTable = ({ data }) => {

    const handleReminder = (ele) =>{
        const text = `Hi ${ele.name}, your gym membership is about to expire on ${ele.endDate}   ! Keep the momentum going—renew your membership today and continue achieving your fitness goals. See you at the gym`
        const whatsappUrl = `https://api.whatsapp.com/send?phone=91${ele.mobile}&text=${text}`
        window.open(whatsappUrl,'_blank')
    }
    return (
        data.map((ele, index) => (
            <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{'-->'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ele.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ele.mobile}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ele.endDate}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${ele.days_left <= 0 ? 'text-red-600':'text-green-600' }`}>{ele.days_left}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <button
                        onClick={() =>handleReminder(ele)}
                        class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
                        Send Reminder
                    </button>
                </td>
            </tr>))
    )
}

export default NotificationEndDateTable