import Articles from "../texts/ContentArticles";
import CarouselType from "../reactBootstrap/carousel/carouselType";
import { NotesTitles, TextArticles } from "../tools/tools";
import ComponentIndicators from "./ComponentIndicators/ComponentIndicators";
import ComponentMaps from "./ComponentMaps/ComponentMaps";
import news from "./ComponentNoticias/news";
import ReactMarkdown from "react-markdown";

function inicio() {
  return (
    <section id="/">
      <CarouselType classlType="carousel" object={news.CarouselInicio} />
      <NotesTitles title="Conheça a unidade" class_style="notes_title" />
      <TextArticles
        text={Articles.InicioParagrafos[0]}
        classtype="textArticle"
      />
      <ComponentIndicators />

      <TextArticles
        text={Articles.InicioParagrafos[1]}
        classtype="textArticle"
      />

      <TextArticles
        text={Articles.InicioParagrafos[2]}
        classtype="textArticle"
      />
      <NotesTitles
        title="Fonte de recursos para projetos de P&D"
        class_style="notes_title_withBox"
      />
      <img
        src="./src/images/outlet/Gráfico.png"
        alt=""
        width={712}
        height={400}
      />

      <TextArticles
        text={Articles.InicioParagrafos[3]}
        classtype="textArticle"
      />
      <p style={{ fontFamily: "Arial, sans-serif", paddingTop: 20 }}>
        {Articles.InicioParagrafos[4]}
        <a href="#projetos">
          <strong>projetos.</strong>{" "}
        </a>
      </p>

      <ComponentMaps />
      <p>
        <a href="#">&#9652; Voltar ao topo</a>
      </p>
      <NotesTitles
        title={
          <>
            Ir para Institucional
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
        link="#institucional"
        class_style="notes_title_baseboard"
      />
    </section>
  );
}

export default inicio;
