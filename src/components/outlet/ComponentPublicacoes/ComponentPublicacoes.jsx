import { NotesTitles } from "../ComponentEquipe";
import { TextArticles } from "../ComponentEquipe";
import publicacoes from "./publicacoes";
const ComponentPublicacoes = () => {
  return (
    <section id="publicacoes">
      <NotesTitles title="Boletins Técnicos" class_style="notes_title" />
      <TextArticles
        text="Veja as publicações de alguns de nossos projetos que poderão mostrar um pouco de nossa capacidade instalada e de conhecimento para PD&I, em favor da nacionalização de produtos e equipamentos, bem como do fortalecimento da indústria nacional."
        classtype="textArticle"
      />
      <div className="publicacoesList">
        <table>
          <thead>
            <tr>
              <td>Nome</td>
         
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            {publicacoes.map((p) => (
              <tr key={p.id}>
                <td>
                  <a href={p.link} target="_blank">
                    {" "}
                    <img src="src\images\icons\pdfIcon.png" alt="" width={20} />
                    <span>{p.nome}</span>
                  </a>{" "}
                </td>
                <td>{p.data}</td>
              </tr>
            ))}
          </tbody>
          <NotesTitles title="Artigos" class_style="notes_title" />

          <thead>
            <tr>
              <td>Nome</td>
         
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            {publicacoes.map((p) => (
              <tr key={p.id}>
                <td>
                  <a href={p.link} target="_blank">
                    {" "}
                    <img src="https://static-00.iconduck.com/assets.00/external-link-icon-1024x1024-5e5o782g.png" alt="" width={12} />
                    <span>{p.nome}</span>
                  </a>{" "}
                </td>
                <td>{p.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NotesTitles
        title={<>Ir para Laboratórios
        
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -860 360 1060" width="24px" fill="#2c66ce">
          
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></>}
        link="#laboratorios"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default ComponentPublicacoes;
