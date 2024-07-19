import React from 'react'

import CarouselType from '../carousel/carouselType'
import Notes_titles from '../main/notes_titles'
import Notice from '../main/notice'
import Logos from '../IconsCmponents/logos'
function unidade ()  {
  return (
    <section>
       
           
            <div className="carousel">
             <CarouselType />
    
            </div>
            <Notice 

text1="A Unidade FEMEC UFU foi uma das primeiras Unidades da Embrapii, inaugurada em 2016 está localizada no Campus Santa Mônica da Universidade Federal de Uberlândia.  
Ela foi credenciada para desenvolver soluções industriais no contexto de equipamentos, metodologias e ferramentas de análise e desenvolvimentos tecnológicos. 
"
text2="Uma das referências em estudos e desenvolvimento de diferentes materiais, atividades de reparo, processos de união e operações em metal-mecânica.
Nossa unidade é formada pelo laboratório de Tecnologia em Atrito e Desgaste (LTAD link do vídeo), e pelo Centro para Pesquisa e Desenvolvimento de Processos de Soldagem e manufatura aditiva (Laprosolda link do vídeo).
  A Unidade Embrapii FEMEC UFU é credenciada para atender aos setores metalúrgico, óleo e gás e o metal-mecânico. Os pesquisadores da unidade Femec/UFU – Embrapii atuam nas linhas de tribologia, propriedades mecânicas, fragilização por hidrogênio, simulação, soldagem, manufatura aditiva, automação e instrumentação, desenvolvimento de equipamentos, indústria 4.0 e software."
text3=" A Unidade Embrapii FEMEC UFU é credenciada para atender aos setores metalúrgico, óleo e gás e o metal-mecânico. Os pesquisadores da unidade Femec/UFU – Embrapii atuam nas linhas de tribologia, propriedades mecânicas, fragilização por hidrogênio, simulação, soldagem, manufatura aditiva, automação e instrumentação, desenvolvimento de equipamentos, indústria 4.0 e software."

/>
<p><b>Coordenador da unidade</b></p>
<p>Louriel Oliveira Vilarinho</p>

<a href=""><p>Email:vilarinho@ufu.br</p></a>


<div>
<Notes_titles title="Onde estamos?"/>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.27348133292!2d-48.26051042404003!3d-18.91928530763436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445749f09503b%3A0x71082187c6ec53c!2sLTAD%20-%20Laborat%C3%B3rio%20de%20Tecnologia%20em%20Atrito%20e%20Desgaste!5e0!3m2!1spt-BR!2sbr!4v1721405928137!5m2!1spt-BR!2sbr" width="712" height="450"></iframe>
 
  <ul className='bold-list'>
    <li>Av. João Naves de Ávila, 2121 - Bairro Santa Mônica</li>
    <li>Bloco 5F</li>
    <li>Ao lado FEMEC</li>
   <div className="logos_to">   
     
     <Logos link="https://www.youtube.com/?app=desktop&hl=pt" 
    img="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
    
     <Logos link="https://www.instagram.com/" 
    img="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" />
     
     
     <Logos link="https://www.linkedin.com/" 
    img="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" />
  
  <Logos link="mailto:lcontato@ltad.com.br" 
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vtphMtxRWfK6nO2CIbGfSETyEs79Dr6oPw&s" />
  


       </div>  
  </ul>


   </div> 

    
    </section>
  )
}

export default unidade
