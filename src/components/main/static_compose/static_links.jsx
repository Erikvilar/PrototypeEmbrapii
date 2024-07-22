import { Link } from "react-router-dom";

const static_links= () => {

    return (
    <ul className="listLink">
        <li className="title-link">Unidade</li>
        <li className=""><Link to="apresentacao">Apresentação</Link></li>
        <li>... Em construção</li>
        
     
    </ul>
    );


}

export default  static_links