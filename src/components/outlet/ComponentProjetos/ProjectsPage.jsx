import projects from "./projects";
import { NotesTitles, TextArticles } from "../ComponentEquipe";
import scss from "./ComponentProjetos.module.scss";
import Modals from "../../reactBootstrap/modals/modals";
import { useState } from "react";
import ModalBoxTRL from "./ModalBoxTRL";
import { ModalBoxCRL } from "./ModalBoxCRL";
export const ProjectsPage = () => {
  const data = projects[sessionStorage.getItem("Projetos")];
  const [modalShow, setModalShow] = useState(false);
  const [value, setValue] = useState("");
console.log(data)
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
            <p>{data.titulo.toUpperCase()}</p>
          </div>

          <div className={scss.column_group}>
            <div>
              <b>Coordenador</b>
              <span>{data.coordenador}</span>
            </div>
          </div>

          <div className={scss.column_group}>
          
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
          <div className={scss.row}>
          <div className={scss.modals}>
            <div>
              <b>
                TRL pretendido{" "}
                <button value="trl" onClick={modalShowOption}></button>
              </b>
              {Object.entries(data.TRL).map(([key, value]) => (
                <span key={key}>TRL-{value}</span>
              ))}
            </div>

            <div>
              <b>
                CRL pretendido{" "}
                <button value="crl" onClick={modalShowOption}></button>
              </b>
              {Object.entries(data.CRL).map(([key, value]) => (
                <span key={key}>CRL-{value}</span>
              ))}
            </div>
          </div>
        </div>
          <div className={scss.column_group}>
            <div>
              <b>Palavras-chaves</b>
              {/* <p>{data.palavrasChaves}</p> */}
              <ul>
              {data.palavrasChaves.map((l)=>(<li>{l}</li>))}
              </ul>
            </div>
          </div>
        </div>

        
        <div className={scss.presentationInformations}>
          <b>Descrição</b>
          {data.descricao ? (
            data.descricao.map((d) => (
              <TextArticles text={d} classtype="textArticle" />
            ))
          ) : (
            <h1>Vazio</h1>
          )}

          {data.listaDeProposta != null || undefined ? (
            <>
              <h4>Benefícios e aplicações do projeto na indústria:</h4>

              <ol className={scss.unlist}>
                {data.listaDeProposta.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ol>
            </>
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
