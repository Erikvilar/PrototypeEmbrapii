import { useState } from "react";
import { NotesTitles } from "../ComponentEquipe";
import scss from "./ComponentProjetos.module.scss";
import projects from "./projects";

const BoxProjetos = () => {
  const [value, setValue] = useState();
  localStorage.setItem("Projetos", JSON.stringify(value))
  console.log(value)

  return (
    <section className={scss.BoxProjects}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique
        odio dolorum eaque maiores expedita error vitae a? Nostrum, nihil
        itaque. Delectus enim et accusamus nostrum consequuntur error maxime
        neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        sit. Maxime, perspiciatis? Cumque voluptate tempore, minima quae unde
        odit? Tenetur minus quae illo optio? Maxime omnis sed necessitatibus
        fugit aliquam.
      </p>
    <NotesTitles title="Confira nossos projetos" class_style="notes_title"/>
      {projects.map((p) => (
        <div key={p.id} className={scss.ProjectsBox}>
          <div>
              
              <img src={p.img} alt="" width={100} height={100} />
          </div>
          <div className={scss.ProjectsTitle}>
       
            <h1>{p.titulo}</h1>
          <div>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2c66ce"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>Coordenador: Prof Louriel</p> 
            <button value={p.id} onClick={(e)=> setValue(e.target.value)}>Veja mais</button>
            </div>
          </div>
         

        </div>
      ))}
    </section>
  );
};
export default BoxProjetos;
