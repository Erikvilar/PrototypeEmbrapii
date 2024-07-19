import React from 'react'
import "../IconsCmponents/icons.scss"
const expostion = (props) => {
  return (
    <div class="exposition">
      <p>{props.type}</p>
      <p>{props.update}</p>
    </div>
  )
}

export default expostion
