import React from 'react'



import "/src/styles/styles_main/main.scss"
import "/src/styles/styles_main/contents_embrapii.scss"
import "/src/styles/styles_main/contents_outlet.scss"
import "/src/styles/styles_main/contents_roll.scss"

import Box_left_links from './main/box_left_links'
import Notes_titles from './main/elementsCompose/notes_titles'

import { Outlet } from 'react-router-dom'







function main() {
  

    
  return (
    <main>
      
        <section className='embrapii-content'>
        <div className='embrapii-outlet'>

            <div className='logo-embrapii'>
              <a href="./src/images/icons/logo oficial horizontal.jpg">
              <img src="./src/images/icons/logo oficial horizontal.jpg" alt="" />
            </a>
            </div>
            <Notes_titles title=""/>
            <Box_left_links/>
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
