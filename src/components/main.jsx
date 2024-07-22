import React from 'react'



import "/src/styles/styles_main/principal_layout.scss"
import "/src/styles/styles_main/contents_embrapii.scss"
import "/src/styles/styles_main/static_compose.scss"
import "/src/styles/styles_main/dynamic_layout.scss"
import  Static_compose from './main/static_compose/static_compose'
import Notes_titles from './main/elements_compose/notes_titles'
import Static_links from './main/static_compose/static_links'
import { Outlet } from 'react-router-dom'




function main() {
  

    
  return (
    <main className="principal_layout">
      
        <section className='embrapii-content'>
        <Static_compose notes={<Notes_titles title="LTAD"/>} links={<Static_links/>}/>
        <div className="dynamic_layout">
        <Outlet/>
        </div>
        </section>
  
    </main>
  )
}
export default main
