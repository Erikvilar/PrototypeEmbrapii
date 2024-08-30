import { Link } from "react-router-dom";
import { NotesTitles } from "./propsComponents";
const static_links = () => {
  return (
    <div>
      <ul className="listLink">
        <li id="main-menu"></li>
        <List_link id="Apresentação" link="/" title="Início" />
        <List_link id="" link="institucional" title="Institucional" />
        <List_link id="" link="Equipe" title="Equipe" />
        <List_link id="" link="parceiros" title="Parcerias" />
        <List_link id="" link="vantagens" title="Seja um parceiro" />
      </ul>
      <NotesTitles title="Unidade Embrapii" class_style="notes_static" />

      <ul className="listLink">
        <List_link id="projetos" link="projetos" title="Projetos" />
        <List_link id="" link="infraestrutura" title="Infraestrutura" />

        <List_link id="noticias" link="noticias" title="Notícias" />
        <List_link id="" link="onBuilding" title="Publicações" />
      </ul>
      <NotesTitles title="Saiba mais" class_style="notes_static" />
      <ul className="listLink">

        <List_link id="unidade" link="onBuilding"  title="Laborátorios" />
        <List_link id="unidade" link="onBuilding"  title="Fale conosco" />
      </ul>

      <NotesTitles title="Central de conteudos" class_style="notes_static" />
      <ul className="listLink"></ul>
    </div>
  );
};

export default static_links;

export const List_link = (props) => {
  return (
    <li id={props.id}>
      <Link to={props.link}>{props.title}</Link>
    </li>
  );
};
