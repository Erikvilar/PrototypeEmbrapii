import React from 'react'

import CarouselType from '../carousel/carouselType'
import Notes_titles from '../main/notes_titles'
import Notice from '../main/notice'
import Icons from '../IconsCmponents/icons'
function extensao ()  {
  return (
    <div className="extensao" >
           <Notes_titles title="Extensão"/>
           
            <div className="carousel">
             <CarouselType />
    
            </div>
            <Notice/>
          <Notes_titles title="Destaques"/>
          <div className='extensao-icons'>
          <Icons src="./src/images/user.png" title="Bolsa extensao"/>
          <Icons src="./src/images/institucional.png" title="Bolsa extensao"/>
          <Icons src="./src/images/notes.png" title="Bolsa extensao"/>
          <Icons src="./src/images/notes.png" title="Bolsa extensao"/>
          <Icons src="./src/images/notes.png" title="Bolsa extensao"/>
          <Icons src="./src/images/notes.png" title="Bolsa extensao"/>
          <Icons src="./src/images/notes.png" title="Bolsa extensao"/>
          </div>
         
    </div>
  )
}

export default extensao
