import { NotesTitles } from "../ComponentEquipe";
import { Accordion } from "react-bootstrap";
import css from "./ComponentPublicacoes.module.css";
const ComponentPublicacoes = () => {
  return (
    <section>
      <NotesTitles title="Publicações" class_style="notes_title" />
	  <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        
        </Accordion.Body>
      </Accordion.Item>
	  </Accordion>
    </section>
  );
};
export default ComponentPublicacoes;
