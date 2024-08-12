import React from "react";
import CarouselType from "../carousel/carouselType";
import Indicators from "./indicators";
import Articles from "../texts/ContentArticles";
import { Notes_titles, TextArticles } from "../props/propsComponents";
import OndeEstamos from "./ondeEstamos";
import {CanvasJSChartInicio} from "../charts/canvasChart";
function inicio() {
  return (
    <section className="dynamic_layout" id="/">
      <CarouselType className="carousel" />
      <Notes_titles title="Conheça a unidade" class_style="notes_title" />
      <TextArticles text={Articles.InicioParagrafos[0]} classtype="textArticle"/>
      <TextArticles text={Articles.InicioParagrafos[1]} classtype="textArticle"/>
      <Indicators />
      <TextArticles text={Articles.InicioParagrafos[2]} classtype="textArticle"/>
      <TextArticles text={Articles.InicioParagrafos[3]} classtype="textArticle"/>

  
      <CanvasJSChartInicio/>
      <TextArticles text={<a href="" target="_blank">Veja mais em Projetos </a>} classtype="textArticle"/>
      <TextArticles text={Articles.InicioParagrafos[4]} classtype="textArticle"/>
      <TextArticles text={Articles.InicioParagrafos[5]} classtype="textArticle"/>
      <OndeEstamos />
      <p>
        <a href="#">&#9652; Voltar ao topo</a>
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
