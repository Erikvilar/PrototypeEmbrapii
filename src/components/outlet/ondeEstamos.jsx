import { Notes_titles } from "../props/propsComponents";
import "/src/styles/styles_main/team_layout.css";
const ondeEstamos = () => {
  return (
    <>
      <Notes_titles title="Onde estamos ?" class_style="notes_title" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.27348133292!2d-48.26051042404003!3d-18.91928530763436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445749f09503b%3A0x71082187c6ec53c!2sLTAD%20-%20Laborat%C3%B3rio%20de%20Tecnologia%20em%20Atrito%20e%20Desgaste!5e0!3m2!1spt-BR!2sbr!4v1721405928137!5m2!1spt-BR!2sbr"
        width="712"
        height="250"
      ></iframe>
      <p>
        Av. João Naves de Ávila, 2121 - Bairro Santa Mônica - Bloco 5F - CEP:CEP
        38400-902
      </p>
    </>
  );
};
export default ondeEstamos;
