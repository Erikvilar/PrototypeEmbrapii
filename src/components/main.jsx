import React from 'react'



import "/src/styles/styles_main/main.scss"
import "/src/styles/styles_main/contents_embrapii.scss"
import "/src/styles/styles_main/contents_outlet.scss"
import "/src/styles/styles_main/contents_roll.scss"

import ListLink from './main/listLink'
import Notes_titles from './main/notes_titles'
import Extensao from './outlet/extensao'
import { Outlet } from 'react-router-dom'







function main() {
  

    
  return (
    <main>
      
        <section className='embrapii-content'>
        <div className='embrapii-outlet'>
            <div className='logo-embrapii'>
                <img src="https://proexc.ufu.br/sites/proexc.ufu.br/files/media/image/logo_proexc.png" alt="" />
            </div>
            <ListLink/>
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
