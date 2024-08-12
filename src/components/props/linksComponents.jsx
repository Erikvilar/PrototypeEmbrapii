import { Link } from "react-router-dom";
import { Notes_titles } from "./propsComponents";
const static_links= () => {

    return (
        <div>
    <ul className="listLink">
        <List_link id="Apresentação" link="/" title="Início"/>
        <List_link id="" link="institucional" title="Institucional"/>
        <List_link id="" link="Equipe" title="Equipe"/>
        <List_link id="" link="parceiros" title="Parceiros"/>
        <List_link id="" link="vantagens" title="Vantagens"/>
       
    </ul>
    <Notes_titles title="Unidade Embrapii" class_style="notes_static"/>
    

    <ul className="listLink">
    <List_link id="" link="infraestrutura" title="Infraestrutura"/>
        <List_link id="unidade" link="" title="Projetos"/>
        <List_link id="unidade" link="" title="Serviços"/>
        <List_link id="unidade" link="" title="Publicações"/>
    </ul>
    <Notes_titles title="Saiba mais" class_style="notes_static"/>
    <ul className="listLink">
        <List_link id="unidade" link="" title="Noticias"/>
        <List_link id="unidade" link="" title="Laborátorios"/>
        <List_link id="unidade" link="" title="Fale conosco"/>
     
    </ul>

    <Notes_titles title="Central de conteudos" class_style="notes_static"/>
    <ul className="listLink">
    
    </ul>
    </div>
    );


}

export default  static_links

export const List_link = (props)=>{
    return (
        <li id={props.id}><Link to={props.link}>{props.title}</Link></li>
    )
}