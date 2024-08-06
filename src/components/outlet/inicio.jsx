import React from "react";
import CarouselType from "../carousel/carouselType";
import Indicators from "./indicators";
import articles from "../texts";
import { Notes_titles, TextArticles } from "../props/propsComponents";
import OndeEstamos from "./ondeEstamos";
import ChartProjects from "../charts/pieChart";
function inicio() {
  return (
    <section className="dynamic_layout" id="/">
      <CarouselType className="carousel" />
      <Notes_titles title="Conheça a unidade" class_style="notes_title" />
      <TextArticles text={articles.InicioParagrafos[0]} />
      <TextArticles text={articles.InicioParagrafos[1]} />
      <Indicators />
      <TextArticles text={articles.InicioParagrafos[2]} />
      <TextArticles text={articles.InicioParagrafos[3]} />

      <TextArticles
        text={
          <a href="" target="_blank">
            {" "}
            Veja mais projetos
          </a>
        }
      />
      <ChartProjects/>
      <TextArticles text={articles.InicioParagrafos[4]} />
      <TextArticles text={articles.InicioParagrafos[5]} />
      <OndeEstamos />
      <p>
        <a href="#">&#9652; Volta ao topo</a>
      </p>
      <Notes_titles
        title="Ir para institucional "
        link="#institucional"
        class_style="notes_title_baseboard"
      />
    </section>
  );
}

export default inicio;
