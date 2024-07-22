import React from 'react'
import Notes_titles from '../main/elements_compose/notes_titles'
import Box1 from '../main/unity_content/box1'
import  Layout_indicators  from '../main/elements_compose/layout_indicators'

 const presentation = () => {
  return (
    <div className='dinamic_layout'>

    <Notes_titles title="Apresentação"/>
    <Box1 text1="A Unidade FEMEC UFU é formada por equipes multidisciplinares com professores, pesquisadores e colaboradores contratados de diversas áreas, somando mais de 100 profissionais e alunos envolvidos nos projetos de PD&I para os setores de óleo e gás e metalmecânico. 
    "
    text2="Em 2023 conquistou a nota máxima de satisfação do cliente, e dentro do Programa de Excelência Operacional da Embrapii, recebeu a classificação ouro. "
    text3="No mesmo ano implantou dois novos setores: o de escritório de projetos para o acompanhamento sistemático da evolução das etapas de todos os projetos garantindo eficiência e cumprimento dos prazos e o de comunicação para fortalecer o planejamento estratégico da prospecção, ampliando a conexão com as indústrias, com a sociedade e com o Governo."
/>

    <Layout_indicators />


    </div>
  )
}
export default presentation
