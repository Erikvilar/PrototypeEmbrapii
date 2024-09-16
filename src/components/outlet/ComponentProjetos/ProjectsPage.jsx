import projects from "./projects";
import { NotesTitles } from "../ComponentEquipe";
import scss from "./ComponentProjetos.module.scss";
import Modals from "../../reactBootstrap/modals/modals";
import { useState } from "react";
export const ProjectsPage = () => {
  const data = projects[sessionStorage.getItem("Projetos")];
  const [modalShow, setModalShow] = useState(false);
  const [value, setValue] = useState("");

  const modalShowOption = (e) => {
    setModalShow(true);
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <section>
      <NotesTitles title="Projetos" class_style="notes_title" />
      <div className={scss.pageProject}>
        <div className={scss.presentationPage}>
          <img
            src="https://comunica.ufu.br/sites/comunica.ufu.br/files/conteudo/noticia/imagem_destaque_20230413_080615.jpg"
            alt=""
            width={712}
          />
          <h3>{data.titulo}</h3>
        </div>
        <div className={scss.row}>
          <div>
            <b>Prazo da proposta</b>
            <p>{data.prazo}</p>
          </div>
          <div>
            <b>Status</b>
            <p>{data.status}</p>
          </div>

          <div>
            <b>Agência</b>
            <p>{data.agencia}</p>
          </div>
          <div>
            <b>Area</b>
            <p>{data.area}</p>
          </div>
          <div>
            <b>Tema</b>
            <p>{data.tema}</p>
          </div>
          <div>
            <b>Subtema</b>
            <p>{data.subtema}</p>
          </div>
        </div>

        <div className={scss.presentationInformations}>
          <p>{data.desafio}</p>
          <p>{data.objetivo}</p>
        </div>

        <div className={scss.row}>
          <div>
            <b>
              TRL pretendido{" "}
              <button value="trl" onClick={modalShowOption}></button>
            </b>
            <p>{data.TRL}</p>
          </div>

          <div>
            <b>
              CRL pretendido{" "}
              <button value="crl" onClick={modalShowOption}></button>
            </b>
            <p>{data.TRL}</p>
          </div>

          <div>
            <b>Prazo para desenvolvimento da solução </b>
            <p>{data.TRL}</p>
          </div>
        </div>
      </div>
      {value === "trl" ? (
        <Modals
          show={modalShow}
          title="TRL pretendido"
          subtitle="TRL - Technology Readiness Level"
        
          onHide={() => setModalShow(false)}
        />
      ) : (
        <Modals
          show={modalShow}
          title="CRL pretendido"
          
          onHide={() => setModalShow(false)}
        />
      )}
    </section>
  );
};
export default ProjectsPage;
