import React from 'react'
import Apresentation from './componentsHeader/apresentation'
import Baseboard from './componentsHeader/baseboard'
import Searcher from './componentsHeader/searcher'
function hero() {
  return (
    <section className='hero'>
      <div className='content'>
      <Baseboard/>
        {/* Alinhar apresentação e search */}
        <div className='apresentation-align'>
         <Apresentation/>
         <Searcher/>
        </div>

      </div>
      <div className='apresentation-baseboard-main'>
        <div className='apresentation-baseboard-2'>
          <ul>
            <li> Dados abertos </li>
            <li>Serviços</li>
            <li>Telefones</li>
            <li>Perguntas frequentes</li>
            <li>Fale conosco</li>

          </ul>
        </div>
      </div>
    </section>
  )
}
export default hero
