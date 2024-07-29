import React from 'react'

import CarouselType from '../carousel/carouselType'
import Layout_indicators from './elements_compose/layout_indicators'


import { Notes_titles, Text_to_principal } from '../props/props_main'

import Box3  from './elements_compose/unity_content/box3'

function unity_content() {
  return (
    <section className='dynamic_layout'>

      <div className="carousel">
        <CarouselType />

        {/* Conteudo principal */}
      </div>
      <Notes_titles title="Conheça a unidade" class_style="notes_title"/>
      <Text_to_principal text1="A Unidade FEMEC UFU é formada por equipes multidisciplinares com professores, pesquisadores e colaboradores contratados de diversas áreas, somando mais de 100 profissionais e alunos envolvidos nos projetos de PD&I para os setores de óleo e gás e metalmecânico. 
    "
    text2="Em 2023 conquistou a nota máxima de satisfação do cliente, e dentro do Programa de Excelência Operacional da Embrapii, recebeu a classificação ouro. "
    text3="No mesmo ano implantou dois novos setores: o de escritório de projetos para o acompanhamento sistemático da evolução das etapas de todos os projetos garantindo eficiência e cumprimento dos prazos e o de comunicação para fortalecer o planejamento estratégico da prospecção, ampliando a conexão com as indústrias, com a sociedade e com o Governo."
/>

<Layout_indicators />

<Text_to_principal text1={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo quisquam quam at dolores numquam deleniti, veritatis, eveniet modi excepturi voluptas officia. Quod, perferendis possimus? Eligendi molestias facere harum aliquid?
Cupiditate animi fuga repellat excepturi, neque harum ea sapiente unde doloremque beatae dolores saepe, sequi iusto esse laboriosam provident ullam architecto suscipit! Exercitationem quasi vero harum nesciunt quam excepturi praesentium.
Nemo consectetur ad, enim sint ab dicta nulla assumenda quis non aut optio accusamus, dignissimos voluptatibus alias tempore debitis molestiae. Possimus illum aliquid minima quo sapiente at velit, eius sed.
Aliquam doloremque minima esse ullam nemo, hic dolor velit ab reprehenderit sequi modi nisi quia totam commodi itaque ut veniam atque voluptatibus neque repudiandae aut. Provident repellendus delectus harum voluptas?
Veritatis, earum quidem. Possimus repudiandae dolorem blanditiis magnam fugit dicta vel pariatur eligendi rerum, necessitatibus quidem, enim culpa. Consequuntur magnam a deleniti tempore illo ullam quam dolores quibusdam quidem unde?</>}
    text2={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam esse molestiae dolore libero. Quam non, laborum a qui, sit neque nulla debitis fugiat aperiam voluptatibus tempore dicta ea suscipit.
    Delectus, doloremque dicta assumenda nobis, alias sequi, illum fugit quod asperiores sed deleniti. Molestias voluptatem doloremque mollitia officiis, quas eveniet ea deleniti veritatis excepturi totam ab recusandae aspernatur consequuntur vero.</>}
    text3={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laudantium incidunt doloremque officia tempore, nulla quos, quam sapiente error labore eveniet corrupti officiis voluptas. Iste aut quia quo animi doloremque.
    Laborum quia quidem a consequatur molestias accusamus adipisci, odio qui omnis enim illo ratione accusantium ducimus animi itaque molestiae veritatis totam sunt? Veritatis, reiciendis consequuntur. Nostrum iste commodi tenetur voluptatem.
    Maiores ut harum quasi dolor. Quas, quidem? Eos optio ratione corrupti explicabo velit omnis minima rem voluptates molestiae incidunt accusantium enim ab quasi corporis, excepturi consequuntur totam dolore quos aperiam.
    Vitae dolor aliquid, quia magnam dolorum molestias qui quasi officiis culpa, itaque soluta odio doloremque repellat cumque molestiae dignissimos asperiores temporibus aperiam cupiditate, enim inventore rerum. Modi saepe eos excepturi.
    Dolores adipisci enim vel ab consequatur deserunt ducimus esse ex provident incidunt eveniet, illo nemo a laudantium iste repellendus. Saepe, non reprehenderit tempora magnam voluptatibus odio ut. Placeat, aspernatur distinctio?</>}
/>
      <Box3 />

    </section>
  )
}

export default unity_content
