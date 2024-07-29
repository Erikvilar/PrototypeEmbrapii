import React from 'react'
import { Text_to_principal, Notes_titles,Box_team } from '../props/props_main'

const team = () => {
  return (
    <div className='dynamic_layout'>
         <Notes_titles title="Apresentação" class_style="notes_title"/>
        <Text_to_principal text1="Nossas equipes são multidisciplinares e com variado nível de conhecimento com foco também na formação de pessoas"
              text2="Temos  alunos, pesquisadores contratados, professores e profissionais das mais diferentes áreas administrativas."
              text3="Em 2023 a Unidade FEMEC UFU implementou novos setores: o de escritório de projetos para acompanhar prazos e processos dentro das diretrizes do PMBOK e o de comunicação que desenvolve estratégias junto ao setor de prospecção de novas parcerias."       
        />
 
    <div className='apresentation_movie'>
      <iframe width="680" height="350" src="https://www.youtube.com/embed/Xtqtgn-WtOg?si=iLem2giuPoZlGiwf&amp;controls=0" title="YouTube video player" >
      </iframe></div>
      <Text_to_principal text1={<>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium dignissimos, ipsum deserunt perferendis tempora nobis ut soluta, officia distinctio impedit illum placeat quibusdam enim maxime voluptatibus. Modi praesentium omnis repudiandae!
      Quaerat nostrum deleniti maxime totam, cupiditate alias illum esse voluptatem corrupti! Assumenda numquam, ullam ex labore aperiam perspiciatis expedita quae obcaecati accusamus mollitia est, consectetur modi corporis dolor nesciunt quidem!
      Quisquam inventore consequatur accusantium repudiandae. Architecto et veritatis dolores similique labore dolor, itaque officiis dignissimos earum pariatur in atque eveniet temporibus, cupiditate deleniti. Dolorem, ex quia iste fugit nostrum dolor.
      Voluptate tempora doloribus minus exercitationem similique velit, asperiores ad inventore! Consequatur tempore error quidem? Nobis impedit quis rerum ullam quasi aliquam harum qui odit quas a, officia quod laborum reiciendis?
      Laudantium facere labore dolores enim sit? Porro laborum error inventore! Cum, qui explicabo ipsam odio repudiandae at illum voluptatum reiciendis molestiae eum nam perferendis, facere vel porro tempore. Ratione, natus!</>}
             
        />
      <div className='apresentation_movie'>
      <iframe width="680" height="350"  src="https://www.youtube.com/embed/iir0FqDMHW8?si=65q3p3uhHhGgj_Zq" ></iframe></div>

      <Text_to_principal text1={<>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium dignissimos, ipsum deserunt perferendis tempora nobis ut soluta, officia distinctio impedit illum placeat quibusdam enim maxime voluptatibus. Modi praesentium omnis repudiandae!
      Quaerat nostrum deleniti maxime totam, cupiditate alias illum esse voluptatem corrupti! Assumenda numquam, ullam ex labore aperiam perspiciatis expedita quae obcaecati accusamus mollitia est, consectetur modi corporis dolor nesciunt quidem!
      Quisquam inventore consequatur accusantium repudiandae. Architecto et veritatis dolores similique labore dolor, itaque officiis dignissimos earum pariatur in atque eveniet temporibus, cupiditate deleniti. Dolorem, ex quia iste fugit nostrum dolor.
      Voluptate tempora doloribus minus exercitationem similique velit, asperiores ad inventore! Consequatur tempore error quidem? Nobis impedit quis rerum ullam quasi aliquam harum qui odit quas a, officia quod laborum reiciendis?
      Laudantium facere labore dolores enim sit? Porro laborum error inventore! Cum, qui explicabo ipsam odio repudiandae at illum voluptatum reiciendis molestiae eum nam perferendis, facere vel porro tempore. Ratione, natus!</>}
             
        />

<Notes_titles title="Equipe" class_style="notes_title"/>
      <Box_team/>



    </div>
  )
}
export default team