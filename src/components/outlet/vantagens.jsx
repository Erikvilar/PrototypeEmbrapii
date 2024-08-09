import React from 'react'
import { Notes_titles, TextArticles } from '../props/propsComponents'
import { RenderList } from '../props/propsComponents'
import Articles from '../texts/ContentArticles'
import Lists from '../texts/ContentLists'
import { CanvasJSChartVantagens } from '../charts/canvasChart'
const vantagens = () => {
  return (
    <div className="dynamic_layout">
        <Notes_titles title="Vantagens da unidade" class_style="notes_title"/>
   
     
        <div className='titleVantagens'>
        <h1>COMO A SUA EMPRESA FAZ PARCERIA COM A EMBRAPII?</h1>
        </div>
        
        <div className="vantagensWithChart">
        <CanvasJSChartVantagens/>
        <RenderList object={Lists.listaVantagens} classType="listaVantagens"/>
  
        </div>
        <TextArticles text={Articles.VantagensParagrafos[0]} classtype="textArticle"/>
        <TextArticles text={Articles.VantagensParagrafos[1]} classtype="textArticle"/>
        <TextArticles text={Articles.VantagensParagrafos[2]} classtype="textArticle"/>
        <iframe width="712" height="300" src="https://www.youtube.com/embed/4l0wF_L7kR8?si=PoUkq2Re46ASXuFk" title="YouTube video player"></iframe>
        <Notes_titles title="Nossas áreas de atuação" class_style="notes_title_withBox"/>
        <div className='boxAreaAtuacao'>
          <div>
            <img src="https://rijeza.com.br/wp-content/uploads/2023/09/Laser-Cladding-.jpeg" alt="" width={175} />
            <h4>Tribologia</h4>
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/proxy/lSoSu3d28bfJCfLeoW-AuX869afwCRvl-7uJtKF5MuSTzFzoWQkYEn3sDZsMTaQMg-qPAv4x4nTF6Fv5w25xRpIy6B9zoRNOWEnvRHkh5YCi76uY72-75MXiuULP20SZDBQt" alt=""  width={175}/>
            <h4>Soldagem</h4>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LK4uHYB46bni89SeDqf8uu2UW2cXbrBq1A&s" alt="" width={175} />
            <h4>Metal-Mecanica</h4>
          </div>
          <div>
            <img src="https://s1.static.brasilescola.uol.com.br/be/vestibular/o-engenheiro-manipula-os-materiais-ja-existentes-cria-novas-propriedades-59c562ffdca62.jpg" alt="" width={175} />
            <h4>Materiais</h4>
          </div>

        </div>
        <Notes_titles
        title="Ir para institucional "
        link="#institucional"
        class_style="notes_title_baseboard"
      />
    </div>
       
    
  )
}
export default vantagens
