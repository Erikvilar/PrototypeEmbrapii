import css from "./ComponentVantagens.module.css";

import {
  NotesTitles,
  RenderList,
  TextArticles,
} from "../../tools/tools";
import Lists from "./Lists";
import { Articles } from "../ComponentEquipe";

const ComponentVantagens = () => {
  return (
    <section>
      <NotesTitles title="Seja um parceiro" class_style="notes_title" />

      <TextArticles
        text={Articles.VantagensParagrafos[0]}
        classtype="textArticle"
      />
      <TextArticles
        text={Articles.VantagensParagrafos[1]}
        classtype="textArticle"
      />

      <div className="notes_title_withBox">
        <h1>COMO FAZER PARCERIA COM A UNIDADE</h1>
      </div>

      <div className={css.ChartVantagens}>
        <img
          src="./src/images/outlet/Grafico2.png"
          alt="Grafico de representação embrapii"
        />
        <RenderList
          object={Lists.listaVantagens}
          classType={css.ListaVantagens}
        />
      </div>

      <TextArticles
        text={Articles.VantagensParagrafos[2]}
        classtype="textArticle"
      />
      <div className="notes_title_withBox">
        <h1>Embrapii como funciona</h1>
      </div>
      <iframe
        width="712"
        height="300"
        src="https://www.youtube.com/embed/4l0wF_L7kR8?si=PoUkq2Re46ASXuFk"
        title="YouTube video player"
      ></iframe>

      <NotesTitles
        title="Nossas áreas de atuação"
        class_style="notes_title_withBox"
      />

      <div className={css.boxAreaAtuacao}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <NotesTitles
        title={
          <>
            Veja nossos projetos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              viewBox="0 -860 360 1060"
              width="24px"
              fill="#2c66ce"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </>
        }
        link="#projetos"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default ComponentVantagens;
