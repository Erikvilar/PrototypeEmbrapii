import projects from "./projects";
import { NotesTitles } from "../ComponentEquipe";
import scss from "./ComponentProjetos.module.scss";
import Modals from "../../reactBootstrap/modals/modals";
import { useState } from "react";
import ModalBoxTRL from "./ModalBoxTRL";
import  { ModalBoxCRL }  from "./ModalBoxCRL";
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
            src="https://yt3.googleusercontent.com/gUhObrCmgvxvLzM6FTE2Us_MTjUEJm4skolIe4CUUUJNla7odTScm5UBs5YDFW5zo1QzGH0n1g=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            width={512}
           
          />

        </div>
        <div className={scss.row}>
        <div>
            <b>Projeto</b>
            <p>{data.titulo}</p>
          </div>

          <div>
            <b>Sigla</b>
            <p>{data.prefixo  }</p>
          </div>
          <div>
            <b>Empresa parceira</b>
            <img src={data.img} alt="" width={100} />
          </div>

          <div>
            <b>Coordenador</b>
            <p>Prof Louriel</p>
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
            <p>{data.CRL}</p>
          </div>

        
        </div>
        <div className={scss.presentationInformations}>
          <b>Desafio</b>
          <p>{data.desafio}</p>
          <b>Objetivo</b>
          <p>{data.objetivo}</p>
        </div>
      </div>
      {value === "trl" ? (
        <Modals
          show={modalShow}
          title="TRL pretendido"
          subtitle="TRL - Technology Readiness Level"
          modal={
            <ModalBoxTRL/>
          }
          onHide={() => setModalShow(false)}
        />
      ) : (
        <Modals
          show={modalShow}
          title="CRL pretendido"
          subtitle="CRL - Commercial Readiness Level"
          modal={<ModalBoxCRL/>}
          onHide={() => setModalShow(false)}

        />
      )}
          <NotesTitles title="Voltar para projetos" link="#projetos" class_style="notes_title_baseboard" />
    </section>
  );
};
export default ProjectsPage;
