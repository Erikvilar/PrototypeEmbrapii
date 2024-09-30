import { NotesTitles } from "../ComponentEquipe";
import { Accordion } from "react-bootstrap";
import dissertacoes from "./dissertacoes";
import { TextArticles } from "../ComponentEquipe";
const ComponentPublicacoes = () => {
  return (
    <section id="publicacoes">
      <NotesTitles title="Publicações" class_style="notes_title" />
      <TextArticles text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae magni quod, nesciunt delectus ea illo sit sint quas, animi sed. Molestias animi, recusandae aliquid suscipit temporibus sed expedita culpa!
      Similique fuga culpa quasi, nam laudantium harum. Adipisci, rem id illo nemo neque tempore voluptate dolor a temporibus eius fugit quas facilis culpa, ab laudantium ratione explicabo quam facere veritatis?"  classtype="textArticle"/>
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
      <TextArticles text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae magni quod, nesciunt delectus ea illo sit sint quas, animi sed. Molestias animi, recusandae aliquid suscipit temporibus sed expedita culpa!
      Similique fuga culpa quasi, nam laudantium harum. Adipisci, rem id illo nemo neque tempore voluptate dolor a temporibus eius fugit quas facilis culpa, ab laudantium ratione explicabo quam facere veritatis?"  classtype="textArticle"/>
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
      <NotesTitles
        title="Ir para Equipes "
        link="#equipe"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default ComponentPublicacoes;
