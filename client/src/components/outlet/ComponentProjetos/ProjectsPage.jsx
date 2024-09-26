import projects from "./projects";
import { NotesTitles } from "../ComponentEquipe";
import scss from "./ComponentProjetos.module.scss";
import Modals from "../../reactBootstrap/modals/modals";
import { useState } from "react";
import ModalBoxTRL from "./ModalBoxTRL";
import { ModalBoxCRL } from "./ModalBoxCRL";
export const ProjectsPage = () => {
  const data = projects[sessionStorage.getItem("Projetos")];
  const [modalShow, setModalShow] = useState(false);
  const [value, setValue] = useState("");

  const modalShowOption = (e) => {
    setModalShow(true);
    setValue(e.target.value);
  };

  return (
    <section>
      <NotesTitles title="Tema do projeto" class_style="notes_title" />
      <div className={scss.pageProject}>
        <div className={scss.row}>
          <div className={scss.title_project}>
            <p>{data.titulo}</p>
          </div>

          <div className={scss.column_group}>
            <div>
              <b>Coordenador</b>
              <span>{data.coordenador}</span>
            </div>
          </div>

          <div className={scss.column_group}>
          <div>
            <b>Sigla</b>
            <p className={scss.sigla}>{data.prefixo}</p>
          </div>
            <div>
              <b>Início </b>
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
          </div>

          <div className={scss.column_group}>
            <div>
              <b>Palavras-chaves</b>
              <p>{data.palavrasChaves}</p>
            </div>
          
          </div>
        </div>

        <div className={scss.row}>
          <div className={scss.modals}>
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
              <p>{data.CRL}</p>
            </div>
          </div>
        </div>
        <div className={scss.presentationInformations}>
          <b>Desafio</b>
          <p>{data.desafio}</p>
          <b>Descrição</b>
          <p>{data.objetivo}</p>
          {data.listaDeProposta != null || undefined ? (
            <ul className={scss.unlist} >
              <li>Benefícios e aplicações do projeto na indústria:  </li>
              {data.listaDeProposta.map((list) => (
                <li>{list}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      {value === "trl" ? (
        <Modals
          show={modalShow}
          title="TRL pretendido"
          subtitle="TRL - Technology Readiness Level"
          modal={<ModalBoxTRL />}
          onHide={() => setModalShow(false)}
        />
      ) : (
        <Modals
          show={modalShow}
          title="CRL pretendido"
          subtitle="CRL - Commercial Readiness Level"
          modal={<ModalBoxCRL />}
          onHide={() => setModalShow(false)}
        />
      )}
      <NotesTitles
        title="Voltar para projetos"
        link="#projetos"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default ProjectsPage;
