import React from 'react'
import "/src/styles/main.scss"
import CarouselType from './carousel/carouselType'




function main() {
  return (
    <main>
        <section className='embrapii-content'>
        <div className='embrapii-outlet'>
            <div className='logo-embrapii'>
                <img src="https://proexc.ufu.br/sites/proexc.ufu.br/files/media/image/logo_proexc.png" alt="" width={150}/>
            </div>
        </div>
        <div className='embrapii-roll'>
            <div className='carousel'>
               <CarouselType/>
            </div>
        </div>
        </section>
    </main>
  )
}
export default main
