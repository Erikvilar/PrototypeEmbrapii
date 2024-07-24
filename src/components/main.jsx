import React from 'react'



import "/src/styles/styles_main/principal_layout.scss"
import "/src/styles/styles_main/contents_embrapii.scss"
import "/src/styles/styles_main/static_compose.scss"
import "/src/styles/styles_main/dynamic_layout.scss"
import {Static_compose} from './props/props_main'
import Static_links from './props/static_links'
import { Outlet } from 'react-router-dom'




function main() {
  

    
  return (
    <main className="principal_layout">
      
        <section className='embrapii-content'>
        <Static_compose links={<Static_links/>}/>
        <div className="dynamic_layout">
        <Outlet/>
        </div>
        </section>
  
    </main>
  )
}
export default main
