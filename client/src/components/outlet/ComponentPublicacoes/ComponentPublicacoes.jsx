import { NotesTitles } from "../ComponentEquipe";
import { Accordion } from "react-bootstrap";
import dissertacoes from "./dissertacoes";
const ComponentPublicacoes = () => {
  return (
    <section id="publicacoes">
      <NotesTitles title="Publicações" class_style="notes_title" />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header as="div">
            Dissertações <button>+</button>
          </Accordion.Header>

          <Accordion.Body>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Periódico</th>
                  <th>Titulo</th>
                  <th>Autores</th>
                </tr>
              </thead>

              <tbody>
                {dissertacoes.map((d) => (
                  <tr key={d.id}>
                    <td>{d.data}</td>
                    <td>
                      {d.periodico}
                    </td>
                    <td>
                      <a href={d.link}>
                      {d.titulo}
                      </a>
                    </td>
                    <td>
                      <ul>
                        {d.composicao.map((c)=>(
                     <li>{c}</li>
                        ))}
                   
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header as="div">
            Teses <button>+</button>
          </Accordion.Header>

          <Accordion.Body>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Periódico</th>
                  <th>Titulo</th>
                  <th>Autores</th>
                </tr>
              </thead>

              <tbody>
                {dissertacoes.map((d) => (
                  <tr key={d.id}>
                    <td>{d.data}</td>
                    <td>
                      {d.periodico}
                    </td>
                    <td>
                      <a href={d.link}>
                      {d.titulo}
                      </a>
                    </td>
                    <td>
                      <ul>
                        {d.composicao.map((c)=>(
                     <li>{c}</li>
                        ))}
                   
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};
export default ComponentPublicacoes;
