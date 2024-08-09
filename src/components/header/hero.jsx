import React from 'react'
import Presentation from './componentsHeader/principal_title'
import Baseboard from './componentsHeader/baseboard'
import Searcher from './componentsHeader/searcher'
function hero() {
  return (
    <section className='hero'>
      <div className='content'>
      <Baseboard/>
        {/* Alinhar apresentação e search */}
        <div className="presentation-align">
         <Presentation/>
         <Searcher/>
        </div>

      </div>
      <div className="presentation-baseboard-main">
        <div className="presentation-baseboard-2">
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