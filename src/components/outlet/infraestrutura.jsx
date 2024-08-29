import { NotesTitles, TextArticles } from "../props/propsComponents";
import { UseFetchGet } from "../../hooks/useFetchGet";
import Articles from "../texts/ContentArticles";
import Cards from "../cards/cards";
import { useState } from "react";
import DropdownSearch from "./DropdownSearch/DropdownSearch";
import Searcher from "../header/Searcher/Searcher";

const infraestrutura = () => {
  const [value, setValue] = useState("");
  const { data } = UseFetchGet({ value });
  const [title, setTitle] = useState("Categorias");

  console.log(value);

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
                      onClick={ (e) =>{setValue(e.target.value),  setTitle(e.target.id)}}
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
          onInput={(e) => setTitle("Personalizado")}
          event={(e) => setValue(e.target.value)}
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
                  return (
                    <tbody key={item.id}>
                      <tr>
                        {details[1] ? (
                          <td>
                            <u>Software:</u>
                            {details[1]}
                          </td>
                        ) : null}
                      </tr>
                      <tr>
                        {details.vazao ? (
                          <td>
                            <u>Pressao:</u>
                            {details.vazao}
                          </td>
                        ) : null}
                        {details.pressao ? (
                          <td>
                            <u>Vazão:</u>
                            {details.pressao}
                          </td>
                        ) : null}
                        {details.ASTM ? (
                          <td>
                            <u>Vazão:</u>
                            {details.pressao}
                          </td>
                        ) : null}
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
