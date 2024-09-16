import { Link } from "react-router-dom";
import { NotesTitles } from "../tools/tools";
import routeLinks from "./routeLinks";
const menuLinks = () => {
  return (
    <div className="listLink">
      <ul >
       {routeLinks.menu.map(links=>(
        <li><Link to={links.link}>{links.title}</Link></li>
       ))}
      </ul>
      <NotesTitles title="Unidade Embrapii" class_style="notes_static" />
      <ul>
      {routeLinks.unidade.map(links=>(
        <li><Link to={links.link}>{links.title}</Link></li>
       ))}
      </ul>
      <NotesTitles title="Saiba mais" class_style="notes_static" />
      <ul>
      {routeLinks.saibaMais.map(links=>(
        <li><Link to={links.link}>{links.title}</Link></li>
       ))}
      </ul>

      <NotesTitles title="Central de conteudos" class_style="notes_static" />
 
    </div>
  );
};

export default menuLinks;



