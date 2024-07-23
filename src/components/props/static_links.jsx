import { Link } from "react-router-dom";

const static_links= () => {

    return (
    <ul className="listLink">
        <List_link id="unidade" link="/" title="Unidade"/>
        <List_link id="unidade" link="apresentacao" title="Apresentação"/>
        <List_link id="unidade" link="equipe" title="Equipe"/>
        <List_link id="unidade" link="" title="Unidade"/>
    </ul>
    );


}

export default  static_links

export const List_link = (props)=>{
    return (
        <li id={props.id}><Link to={props.link}>{props.title}</Link></li>
    )
}