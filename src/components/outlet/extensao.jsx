import React from 'react'

import CarouselType from '../carousel/carouselType'
import Notes_titles from '../main/notes_titles'
import Notice from '../main/notice'

function extensao ()  {
  return (
    <section className="extensao" >
       
           
            <div className="carousel">
             <CarouselType />
    
            </div>
            <Notice/>
          <Notes_titles title="Destaques"/>
        
         
    </section>
  )
}

export default extensao
