import React from 'react'
import { Text_to_principal, Notes_titles,Box_team } from '../props/props_main'

const team = () => {
  return (
    <div className='dynamic_layout'>
         <Notes_titles title="Equipe" class_style="notes_title"/>
        <Text_to_principal text1="Nossas equipes são multidisciplinares e com variado nível de conhecimento com foco também na formação de pessoas"
              text2="Temos  alunos, pesquisadores contratados, professores e profissionais das mais diferentes áreas administrativas."
              text3="Em 2023 a Unidade FEMEC UFU implementou novos setores: o de escritório de projetos para acompanhar prazos e processos dentro das diretrizes do PMBOK e o de comunicação que desenvolve estratégias junto ao setor de prospecção de novas parcerias."       
        />
 

      <Box_team/>



    
    </div>
  )
}
export default team