import React from 'react'

import Notes_titles from '../elementsCompose/notes_titles'
function box1(props) {

  return (
    <div className="notice">
    <Notes_titles title="Conheça a unidade"/>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>    
    </div>
  )
}

export default box1
