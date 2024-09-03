import { NotesTitles, TextArticles } from "../props/propsComponents";
import { UseFetchGet } from "../../hooks/useFetchGet";
import Articles from "../texts/ContentArticles";
import Cards from "../cards/cards";
import { useState } from "react";
import DropdownSearch from "./DropdownSearch/DropdownSearch";
import Searcher from "../header/Searcher/Searcher";

const infraestrutura = () => {
  const [info, setInfo] = useState({ value: "", title: "Categorias" });
  const insertValues = (e) => {
    setInfo({ ...info, value: [e.target.value], title: [e.target.id] });
  };

  const { title, value } = info;

  const { data } = UseFetchGet(value);
  console.log(title);
  return (
    <section id="infraestrutura">
      <NotesTitles
        title="Conheça nossa infraestrutura"
        class_style="notes_title"
      />
      <TextArticles text={Articles.InfraestruturaParagrafo[0]} />
      <TextArticles text={Articles.InfraestruturaParagrafo[1]} />
      <TextArticles text={Articles.InfraestruturaParagrafo[2]} />

      <NotesTitles
        title="Nossos equipamentos"
        class_style="notes_title_withBox"
      />
      <div className="searcher-content">
        <Searcher
          dropdown={
            <DropdownSearch
              list={[
                { name: "Todos", type: "" },
                { name: "Corrosão", type: "corrosion" },
                { name: "Análise de Imagens", type: "image" },
                { name: "Fragilização por Hidrôgenio", type: "hydrogen" },
                { name: "Propriedades Mecânicas", type: "mechanic" },
                { name: "Desgaste", type: "wear" },
                { name: "Minitestes", type: "smalltest" },
                { name: "Soldagem", type: "welding" },
                { name: "Manufatura Aditiva", type: "manufacture" },
              ].map((item, index) => {
                return (
                  <label key={index}>
                    <input
                      value={item.type}
                      id={item.name}
                      onClick={insertValues}
                      type="radio"
                    />
                    <span>{item.name}</span>
                  </label>
                );
              })}
              title={title}
            />
          }
          list="browser"
          placeholder="Pesquisar"
          event={insertValues}
        />
      </div>
      <div className="card-content">
        <div className="cards-align">
          {data.length != 0 ? (
            data.map((item, index) => (
              <Cards
                key={index}
                image={item.image}
                title={item.produto}
                description={
                  item.info ? (
                    <td>
                      <u>Descrição:</u> {item.info}
                    </td>
                  ) : null
                }
                details={[item.details].map((details) => {
                  const detalhamento = Object.entries(
                    details.detalhamento
                  ).filter(([key, value]) => value != "" && value != undefined);

                  const values = Object.entries(details.descritivo).filter(
                    ([key, value]) => value != "" && value != undefined
                  );

                  return (
                    <tbody key={item.id}>
                      <tr className="table-separator">
                        {values.map(([key, value]) => (
                          <td key={index}>
                            <u>{key}:</u>
                            <span>{value}</span>
                          </td>
                        ))}
                      </tr>

                      <tr className="table-column">
                        {detalhamento.map(([key, value]) => (
                          <td key={index}>
                            <u>{key}:</u>
                            <span>{value}</span>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  );
                })}
              />
            ))
          ) : (
            <div className="search-error">
              <span>Nenhum resultado foi encontrado para essa busca</span>
            </div>
          )}
        </div>
      </div>
      <NotesTitles
        title="Ir para projetos "
        link="#parceiros"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default infraestrutura;
