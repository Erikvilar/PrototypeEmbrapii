import articles from '../texts'
import { Notes_titles,TextArticles,RenderList } from '../props/propsComponents'
 const institucional = () => {
  return (
    <div className='dynamic_layout' id="institucional">

    <Notes_titles title="Institucional"  class_style="notes_title"/>

    <TextArticles text={articles.InstitucionalParagrafos[0]}/>
    <TextArticles text={articles.InstitucionalParagrafos[1]}/>
    <TextArticles text={articles.InstitucionalParagrafos[2]}/>

    <Notes_titles title="Laborátorios" class_style="notes_title"/>

      <h3>Unidade de atrito e desgaste (LTAD)</h3>
      <iframe  width="712" height="350" src="https://www.youtube.com/embed/Xtqtgn-WtOg?si=iLem2giuPoZlGiwf&amp;controls=0" title="YouTube video player" ></iframe>
      <TextArticles text={articles.InstitucionalParagrafos[3]}/>
      <h4>Principais áreas de PD&I</h4>
      <RenderList object={articles.listaPDILTAD} classType={"listaPDI"} />

      <hr />

      <h3>Unidade de Desenvolvimento em Processos de Soldagem (Laprosolda)</h3>
      <iframe width="712" height="350"  src="https://www.youtube.com/embed/iir0FqDMHW8?si=65q3p3uhHhGgj_Zq" ></iframe>
      <TextArticles text={articles.InstitucionalParagrafos[4]} />
      <h4>Principais áreas de PD&I</h4>
      <RenderList object={articles.listaPDILAPROSOLDA} classType={"listaPDI"} />

<div className="anchor">
      <p><a href="#">&#9652; Volta ao topo</a></p>
    </div>
    <Notes_titles title="Ir para inicio " link="#/" class_style="notes_title_baseboard" />
    </div>
  )
}
export default institucional
