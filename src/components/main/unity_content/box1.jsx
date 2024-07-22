import React from 'react'

import Notes_titles from '../elements_compose/notes_titles'
function box1(props) {

  return (
    <div className="notice">
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>    
    </div>
  )
}

export default box1
