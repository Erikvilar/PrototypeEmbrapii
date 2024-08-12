import Articles from '../texts/ContentArticles'
import Lists from '../texts/ContentLists'
import { Notes_titles,TextArticles,RenderList } from '../props/propsComponents'
 const institucional = () => {
  return (
    <div className='dynamic_layout' id="institucional">

    <Notes_titles title="Institucional"  class_style="notes_title"/>

    <TextArticles text={Articles.InstitucionalParagrafos[0]} classtype="textArticle"/>
    <TextArticles text={Articles.InstitucionalParagrafos[1]} classtype="textArticle"/>
    <TextArticles text={Articles.InstitucionalParagrafos[2]} classtype="textArticle"/>

    <Notes_titles title="Nossos laborátorios" class_style="notes_title"/>

      <h3>Laborátorio de atrito e desgaste (LTAD)</h3>
      <iframe  width="712" height="350" src="https://www.youtube.com/embed/Xtqtgn-WtOg?si=iLem2giuPoZlGiwf&amp;controls=0" title="YouTube video player" ></iframe>
      <TextArticles text={Articles.InstitucionalParagrafos[3]} classtype="textArticle"/>
      <h4>Principais áreas de PD&I</h4>
      <RenderList object={Lists.listaPDILTAD} classType={"listaPDI"} />

      <hr />

      <h3>Laborátorio de Desenvolvimento em Processos de Soldagem (Laprosolda)</h3>
      <iframe width="712" height="350"  src="https://www.youtube.com/embed/iir0FqDMHW8?si=65q3p3uhHhGgj_Zq" ></iframe>
      <TextArticles text={Articles.InstitucionalParagrafos[4]} classtype="textArticle" />
      <h4>Principais áreas de PD&I</h4>
      <RenderList object={Lists.listaPDILAPROSOLDA} classType={"listaPDI"} />

<div className="anchor">
      <p><a href="#institucional">&#9652; Voltar ao topo</a></p>
    </div>
    <Notes_titles title="Ir para Equipes " link="#equipe" class_style="notes_title_baseboard" />
    </div>
  )
}
export default institucional
