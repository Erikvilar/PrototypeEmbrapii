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
    <NotesTitles title="Confira nossos projetos" class_style="notes_title_withBox"/>
      {projects.map((p) => (
        <div key={p.id} className={scss.ProjectsBox}>
          <div>
              
              <img src={p.img} alt="" width={100} height={100} />
          </div>
          <div className={scss.ProjectsTitle}>
       
            <h1>{p.titulo}</h1>
          <div>
            <p>Coordenador: Prof Louriel</p>
            <button value={p.id} onClick={(e)=> setValue(e.target.value)}>Veja mais</button>
            </div>
          </div>
         

        </div>
      ))}
    </section>
  );
};
export default BoxProjetos;
