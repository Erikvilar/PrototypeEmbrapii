import React from 'react'
import "/src/styles/styles_main/team_layout.scss"
import { Notes_titles, Box_team } from '../../../props/props_main'
 const box2= () => {
  return (
    <div className='layout_team'>
      <Notes_titles title="Responsável" class_style="notes_title"/>
    <div className='teams'>

    <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
      name="Louriel Oliveira Vilarinho"
      link="vilarinho@ufu.br"email="vilarinho@ufu.br"
      linkLattes="http://lattes.cnpq.br/8553716610264673" lattes="Currículo Lattes"

    />
   <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
      name="Guilherme Almeida"
      email="pessoa@exemplo.com"
      lattes="Currículo Lattes"
    />
  

</div>
    </div>
  
  )
}

export default box2
