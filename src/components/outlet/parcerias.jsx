import React from 'react'
import { Notes_titles, RenderImages, TextArticles } from '../props/propsComponents'
import Articles from '../texts/ContentArticles'
import Links from '../texts/ContentLinks'
function parceiros(){
  return (
    <div className="dynamic_layout" id="parceiros">
    <Notes_titles title="Nossos Parceiros" class_style="notes_title"/>
    <TextArticles text={Articles.ParceirosParagrafos[0]} classtype="textArticle"/>
    <TextArticles text={Articles.ParceirosParagrafos[1]} classtype="textArticle"/>
    <TextArticles text={Articles.ParceirosParagrafos[2]} classtype="textArticle"/>
    <TextArticles text={Articles.ParceirosParagrafos[3]} classtype="textArticle"/>
    <Notes_titles title="Instituições que apoia nossos projetos" class_style="notes_title_withBox"/>
    <RenderImages object={Links.ParceirosGovernamentais} width={100} height={100}/>
    <Notes_titles title="Empresas que apoiam nossos projetos" class_style="notes_title_withBox"/>
    <RenderImages object={Links.ParceirosServicos} width={100} height={100}/>
    <Notes_titles title="Ir para vantagens " link="#vantagens" class_style="notes_title_baseboard" />
    </div>
  )
}
export default parceiros