import React from 'react'

import CarouselType from '../carousel/carouselType'

import  Box1  from '../main/unity_content/box1'
import Box2  from '../main/unity_content/box2'
import Box3  from '../main/unity_content/box3'

function unity_content() {
  return (
    <section>


      <div className="carousel">
        <CarouselType />

        {/* Conteudo principal */}
      </div>
      <Box1 text1="A Unidade FEMEC UFU foi uma das primeiras Unidades da Embrapii, inaugurada em 2016 está localizada no Campus Santa Mônica da Universidade Federal de Uberlândia.  
Ela foi credenciada para desenvolver soluções industriais no contexto de equipamentos, metodologias e ferramentas de análise e desenvolvimentos tecnológicos. 
"
        text2="Uma das referências em estudos e desenvolvimento de diferentes materiais, atividades de reparo, processos de união e operações em metal-mecânica.
Nossa unidade é formada pelo laboratório de Tecnologia em Atrito e Desgaste (LTAD link do vídeo), e pelo Centro para Pesquisa e Desenvolvimento de Processos de Soldagem e manufatura aditiva (Laprosolda link do vídeo).
  A Unidade Embrapii FEMEC UFU é credenciada para atender aos setores metalúrgico, óleo e gás e o metal-mecânico. Os pesquisadores da unidade Femec/UFU – Embrapii atuam nas linhas de tribologia, propriedades mecânicas, fragilização por hidrogênio, simulação, soldagem, manufatura aditiva, automação e instrumentação, desenvolvimento de equipamentos, indústria 4.0 e software."
        text3=" A Unidade Embrapii FEMEC UFU é credenciada para atender aos setores metalúrgico, óleo e gás e o metal-mecânico. Os pesquisadores da unidade Femec/UFU – Embrapii atuam nas linhas de tribologia, propriedades mecânicas, fragilização por hidrogênio, simulação, soldagem, manufatura aditiva, automação e instrumentação, desenvolvimento de equipamentos, indústria 4.0 e software." />

      <Box2 />


      <Box3 />



    </section>
  )
}

export default unity_content
