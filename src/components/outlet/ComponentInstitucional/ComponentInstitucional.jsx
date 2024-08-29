import Lists from "./Lists";
import {
  NotesTitles,
  TextArticles,
  RenderList,
} from "../../props/propsComponents";
import { Articles } from "../ComponentEquipe";
import css from "./ComponentInstitucional.module.css"
const ComponentInstitucional = () => {
  return (
    <section id="institucional" className={css.ComponentInstitucional}>
      <NotesTitles title="Institucional" class_style="notes_title" />

      <TextArticles
        text={Articles.InstitucionalParagrafos[0]}
        classtype="textArticle"
      />
      <TextArticles
        text={Articles.InstitucionalParagrafos[1]}
        classtype="textArticle"
      />
      <TextArticles
        text={Articles.InstitucionalParagrafos[2]}
        classtype="textArticle"
      />

      <NotesTitles title="Nossos laborátorios" class_style="notes_title" />

	<div className={css.TitleLaboratorios}>
      <h3>Laborátorio de Atrito e Desgaste (LTAD)</h3>
	  </div>
      <iframe
        width="712"
        height="350"
        src="https://www.youtube.com/embed/Xtqtgn-WtOg?si=iLem2giuPoZlGiwf&amp;controls=0"
        title="YouTube video player"
      ></iframe>
      <TextArticles
        text={Articles.InstitucionalParagrafos[3]}
        classtype="textArticle"
      />
      <h4>Principais áreas de PD&I</h4>
      <RenderList object={Lists.listaPDILTAD} />

      <hr />
	  <div className={css.TitleLaboratorios}>
      <h3>
        Laborátorio de Soldagem (Laprosolda)
		</h3>
	  </div>
      <iframe
        width="712"
        height="350"
        src="https://www.youtube.com/embed/iir0FqDMHW8?si=65q3p3uhHhGgj_Zq"
        title="Video institucional Laprosolda"
      ></iframe>
      <TextArticles
        text={Articles.InstitucionalParagrafos[4]}
        classtype="textArticle"
      />
	  
      <h4>Principais áreas de PD&I</h4>
      <RenderList object={Lists.listaPDILAPROSOLDA}  />

      <div className="anchor">
        <p>
          <a href="#institucional">&#9652; Voltar ao topo</a>
        </p>
      </div>
      <NotesTitles
        title="Ir para Equipes "
        link="#equipe"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default ComponentInstitucional;
