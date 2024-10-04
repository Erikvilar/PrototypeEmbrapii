import { NotesTitles } from "../ComponentEquipe";
import { TextArticles } from "../ComponentEquipe";
import publicacoes from "./publicacoes";
const ComponentPublicacoes = () => {
  return (
    <section id="publicacoes">
      <NotesTitles title="Publicações" class_style="notes_title" />
      <TextArticles
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae magni quod, nesciunt delectus ea illo sit sint quas, animi sed. Molestias animi, recusandae aliquid suscipit temporibus sed expedita culpa!
      Similique fuga culpa quasi, nam laudantium harum. Adipisci, rem id illo nemo neque tempore voluptate dolor a temporibus eius fugit quas facilis culpa, ab laudantium ratione explicabo quam facere veritatis?"
        classtype="textArticle"
      />
      <div className="publicacoesList">
        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Autor</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            {publicacoes.map((p) => (
              <tr key={p.id}>
                <td>
                  <a href="">
                    {" "}
                    <img src="src\images\icons\pdfIcon.png" alt="" width={20} />
                    <span>{p.nome}</span>
                  </a>{" "}
                </td>
                <td>
                  <ul>
                  {p.autores.map((l)=> (<li>{l}</li>))}
                  </ul>
                  
                  </td>
                <td>{p.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NotesTitles
        title="Ir para Equipes "
        link="#equipe"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default ComponentPublicacoes;
