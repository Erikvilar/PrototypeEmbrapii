import React from 'react'
import { Notes_titles, TextArticles } from '../props/propsComponents'
import { RenderList } from '../props/propsComponents'
import Articles from '../texts/ContentArticles'
import Lists from '../texts/ContentLists'
const vantagens = () => {
  return (
    <section >
        <Notes_titles title="Vantagens da unidade" class_style="notes_title"/>
   
     
        <div className='titleVantagens'>
        <h1>COMO FAZER PARCEIRA COM NOSSA UNIDADE</h1>
        </div>
        
        <div className="vantagensWithChart">
        <img src=''/>
        <RenderList object={Lists.listaVantagens} classType="listaVantagens"/>
  
        </div>
        <TextArticles text={Articles.VantagensParagrafos[0]} classtype="textArticle"/>
        <TextArticles text={Articles.VantagensParagrafos[1]} classtype="textArticle"/>
        <TextArticles text={Articles.VantagensParagrafos[2]} classtype="textArticle"/>
        <iframe width="712" height="300" src="https://www.youtube.com/embed/4l0wF_L7kR8?si=PoUkq2Re46ASXuFk" title="YouTube video player"></iframe>
        <Notes_titles title="Nossas áreas de atuação" class_style="notes_title_withBox"/>
        <div className='boxAreaAtuacao'>
          <div>
           
            <h4>Tribologia</h4>
          </div>
          <div>
           
            <h4>Soldagem</h4>
          </div>
          <div>
            <h4>Metal-Mecanica</h4>
          </div>
          <div>

            <h4>Materiais</h4>
          </div>

        </div>
        <Notes_titles
        title="Ir para institucional "
        link="#institucional"
        class_style="notes_title_baseboard"
      />
    </section>
       
    
  )
}
export default vantagens
