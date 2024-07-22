import React from 'react'
import "/src/styles/styles_header/nav_header.scss"
function nav_header (){
  return (

        <nav className="nav-style">
          <div>
            <div className='logo'>
              <img src="https://cdn.icon-icons.com/icons2/1694/PNG/512/brbrazilflag_111698.png" alt=""  />
              <span href="#menu">Brasil</span>
            </div>
            <ul>
          
                <li>Simplifique!</li>
                <li>Comunica BR</li>
                <li>Participe</li>
                <li>Acesso a informação</li>
                <li>Legislação</li>
                <li>Canais</li>
                 <img src="https://www.gov.br/mdh/pt-br/ondh/centrais-de-conteudo/imagens/libras.png" alt="" width={40} />
             
               
            </ul>
            </div>
           
        
    </nav>
  )
}
export default nav_header
