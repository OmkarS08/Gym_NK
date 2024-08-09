import React from 'react'

const ActivityLogTable = ({data}) => {

  return (
    
    <>{data.map((ele, index) => (
      <tr key={index}>
        <td className="px-6 py-4 whitespace-nowrap">{'-->'}</td>
        <td className="px-6 py-4 whitespace-nowrap">{ele.username}</td>
        <td className="px-6 py-4 whitespace-nowrap">{ele.activity}</td>
        <td className="px-6 py-4 whitespace-nowrap">{ele.time_stamp}</td>
        </tr>
  
        ))
        }
        </>
  )
}

export default ActivityLogTable