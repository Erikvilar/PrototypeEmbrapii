import { Link } from "react-router-dom";

const listLink = () => {

    return (
    <ul className="listLink">
        <li className="title-link">Unidade</li>
        <li className="title-link"><Link to="teste">teste</Link></li>
        <li>... Em construção</li>
        
     
    </ul>
    );


}

export default listLink;