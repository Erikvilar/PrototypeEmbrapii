import React from 'react'

import CarouselType from '../carousel/carouselType'

import Box2  from './elements_compose/unity_content/box2'

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


      <Text_to_principal text1="A Unidade FEMEC UFU foi uma das primeiras Unidades da Embrapii, inaugurada em 2016 está localizada no Campus Santa Mônica da Universidade Federal de Uberlândia.  
Ela foi credenciada para desenvolver soluções industriais no contexto de equipamentos, metodologias e ferramentas de análise e desenvolvimentos tecnológicos. 
"
        text2={<>Uma das referências em estudos e desenvolvimento de diferentes materiais, atividades de reparo, processos de união e operações em metal-mecânica.
Nossa unidade é formada pelo laboratório de Tecnologia em Atrito e Desgaste <a href="https://www.youtube.com/watch?v=Xtqtgn-WtOg" className='link-inside-text'>LTAD</a>, e pelo Centro para Pesquisa e Desenvolvimento de Processos de Soldagem e manufatura aditiva <a href="https://youtu.be/iir0FqDMHW8">Laprosolda</a>.
  </>}text3="A Unidade Embrapii FEMEC UFU é credenciada para atender aos setores metalúrgico, óleo e gás e o metal-mecânico. Os pesquisadores da unidade Femec/UFU – Embrapii atuam nas linhas de tribologia, propriedades mecânicas, fragilização por hidrogênio, simulação, soldagem, manufatura aditiva, automação e instrumentação, desenvolvimento de equipamentos, indústria 4.0 e software."
        text4=" A Unidade Embrapii FEMEC UFU é credenciada para atender aos setores metalúrgico, óleo e gás e o metal-mecânico. Os pesquisadores da unidade Femec/UFU – Embrapii atuam nas linhas de tribologia, propriedades mecânicas, fragilização por hidrogênio, simulação, soldagem, manufatura aditiva, automação e instrumentação, desenvolvimento de equipamentos, indústria 4.0 e software." />

      <Box2 />
      <Box3 />

    </section>
  )
}

export default unity_content
