import React from 'react'



import "/src/styles/styles_main/main.scss"
import "/src/styles/styles_main/contents_embrapii.scss"
import "/src/styles/styles_main/contents_outlet.scss"
import "/src/styles/styles_main/contents_roll.scss"

import ListLink from './main/listLink'
import Notes_titles from './main/notes_titles'

import { Outlet } from 'react-router-dom'







function main() {
  

    
  return (
    <main>
      
        <section className='embrapii-content'>
        <div className='embrapii-outlet'>

            <div className='logo-embrapii'>
              <a href="http://www.embrapii.org.br/"><img src="./src/images/outlet/marca_embrapii-vertical.png" alt="" /></a>
            </div>
            <Notes_titles title="Unidade"/>
            <ListLink/>
            <Notes_titles title="Central de conteudos"/>
            <img src="./src/images/iconsoutlet.png" alt="" />
        </div>
      
        <div className='embrapii-roll'>
        <Outlet/>
        </div>
        </section>
  
    </main>
  )
}
export default main
