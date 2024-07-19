import React from 'react'
import "../IconsCmponents/icons.scss"
const icons = ({title,src}) => {
  return (
    <div className="icon">
      <img src={src}alt=""/>
      <div className='icon-title'>
      <p>{title}</p>
      </div>
    </div>
  )
}

export default icons
