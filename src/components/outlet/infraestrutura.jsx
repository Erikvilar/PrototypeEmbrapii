import { Notes_titles, TextArticles } from "../props/propsComponents";
import { useFetchGet } from "../../hooks/useFetchGet";
import Articles from "../texts/ContentArticles";
import Cards from "../cards/cards";
import {useState } from "react";
import DropdownSearch from "./dropdown-search/dropdown-search";
import Searcher from "../header/Searcher/Searcher";

const infraestrutura = () => {
  const [value, setValue] = useState("");
  const { data, thisError } = useFetchGet({ value });
  const [thisOpen, setThisOpen] = useState(false);

console.log(data)

 
  return (
    <section id="infraestrutura">
      <Notes_titles
        title="Conheça nossa infraestrutura"
        class_style="notes_title"
      />
      <TextArticles text={Articles.InfraestruturaParagrafo[0]} />
      <TextArticles text={Articles.InfraestruturaParagrafo[1]} />
      <TextArticles text={Articles.InfraestruturaParagrafo[2]} />

      <Notes_titles
        title="Nossos equipamentos"
        class_style="notes_title_withBox"
      />

      <Searcher
        list="browser"
        placeholder="Pesquisar"
        open={() => setThisOpen(true)}
        event={(e) => setValue(e.target.value)}
      />

      {thisOpen &&   (
        <DropdownSearch
          list={["Mecanico","Desgaste", "Corrosao","Ministre", "Fragilização por Hidrogenio", ].map((item,index) => {
            return(
            <label  value="sla" >
              <input key={index} value={item}  onClick={(e)=> setValue(e.target.value)}  type="radio"  />
              <span >{item}</span>
            </label>
            )
          })}
        />
      )}

      <div className="card-content">
        <div className="cards-align">
          {data.length != 0 ? data.map((item, index) => (
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
              details={[item.details].map((details, index) => {
                return (
                  <tbody>
                    <tr key={index}>
                      {details.software ? (
                        <td>
                          <u>Software:</u>
                          {details.software}
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
                    </tr>
                  </tbody>
                );
              })}
            />
          )):(
            <div className="search-error">
              <span>
                Nenhum resultado foi encontrado para essa busca
              </span>
            </div>
          )}
        </div>
      </div>
      <Notes_titles title="Ir para projetos " link="#parceiros" class_style="notes_title_baseboard" />
    </section>
  );
};
export default infraestrutura;
