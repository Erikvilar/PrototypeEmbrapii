import { Notes_titles, TextArticles } from "../props/propsComponents";
import { useFetchGet } from "../../api/requests";
import Articles from "../texts/ContentArticles";
import Cards from "../cards/cards";
import { useState } from "react";
const infraestrutura = () => {
  const [value, setValue] = useState("");
  const { data } = useFetchGet({ value });

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


        <input
          type="text"
          placeholder="🔍︎ Pesquisar"
          maxLength={30}
          list="browser"
          id="input"
          onChange={(e) => setValue(e.target.value)}
        />
       
     <datalist id="browser" onChange={(e) => setValue(e.target.value)}>
    
     <option value="fragilizacao por H"/>
     <option value=""/>
     <option value="mecanico"/>
     <option value="corrosao"/>
     <option value="Desgaste"/>
     <option value="Ministre"/>
     <option value=""/>
     <option value=""/>
   </datalist>

    
      <div className="card-content">
        <div className="cards-align">
          {data.map((item, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
export default infraestrutura;
