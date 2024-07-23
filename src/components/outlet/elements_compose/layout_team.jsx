import React from 'react'
import "/src/styles/styles_main/team_layout.scss"

import { Box_team, Notes_titles } from '../../props/props_main'
const layout_team = () => {
  return (
    <div className='layout_team'>

      <h3>Equipe</h3>
      <div className='teams'>

      <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
        name="Erik Alves Vilar"
        email="erik.vilar@exemplo.com"
      />
     <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
        name="Guilherme Almeida"
        email="pessoa@exemplo.com"
      />
           <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
        name="Pessoal exemplo"
        email="pessoa@exemplo.com"
      />
           <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
        name="Pessoal exemplo"
        email="pessoa@exemplo.com"
      />
           <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
        name="Pessoal exemplo"
        email="pessoa@exemplo.com"
      />
           <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
        name="Pessoal exemplo"
        email="pessoa@exemplo.com"
      />
           <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
        name="Pessoal exemplo"
        email="pessoa@exemplo.com"
      />
           <Box_team component={<Notes_titles title="Diretoria Geral" class_style="team_title"/>} 
        name="Pessoal exemplo"
        email="pessoa@exemplo.com"
      />


      </div>
    </div>
  )
}
export default layout_team

