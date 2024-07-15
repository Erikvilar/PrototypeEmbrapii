import { Link } from "react-router-dom";

const listLink = () => {

    return (
    <ul className="listLink">
        <li className="title-link"><Link to="extensao">Extensão</Link></li>
       <li> <Link to="projetos">Casos de estudos</Link></li>
         <li><Link to="parcerias">Nossas parcerias</Link></li>
        <li>Publicações</li>
        <li>Programas Institucionais de Extensão</li>
    </ul>
    );


}

export default listLink;