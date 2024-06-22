import React from 'react'
export default function AlarmIcon({number}) {
  return (
    <div className="alarm-icon">
      <i className="fa-solid fa-bell " style={{color: "#ffffff"}}></i>
      <span className="badge rounded rounded-circle px-1 py-1">{number}</span>
    </div>
  )
}