function nav_header() {
  return (
    <nav className="nav-style">
      <div>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
            alt="Bandeira do Brasil"
          />
          <span href="#menu">Brasil</span>
        </div>
        <ul>
          <li id="menu-toggle">

            <div className="hamburguer-toggle">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </li>
          <li>Simplifique!</li>
          <li>Comunica BR</li>
          <li>Participe</li>
          <li>Acesso a informação</li>
          <li>Legislação</li>
          <li>Canais</li>
          <img
            src="https://www.gov.br/mdh/pt-br/ondh/centrais-de-conteudo/imagens/libras.png"
            alt=""
            width={40}
          />
        </ul>
      </div>
    </nav>
  );
}
export default nav_header;
