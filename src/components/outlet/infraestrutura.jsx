import { Notes_titles, TextArticles } from "../props/propsComponents";
import { useFetchGet } from "../../api/requests";
import Articles from "../texts/ContentArticles";
import Cards from "../cards/cards";
import { useState } from "react";
const infraestrutura = () => {
  const [value, setValue] = useState("");

  const { data, error } = useFetchGet({ value });

  console.log(error);
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

      <form action="">
        <input
          type="text"
          placeholder="Buscando pelo item ... "
          maxLength={30}
          id="input"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>

      <ul>
        <li>
          {" "}
          <a href="" onClick={(e) => e.preventDefault()}>
            Todos
          </a>
        </li>
        <li>
          {" "}
          <a href="" onClick={(e) => e.preventDefault()}>
            Mecanico
          </a>
        </li>
        <li>
          {" "}
          <a href="" onClick={(e) => e.preventDefault()}>
            Corrosão
          </a>
        </li>
        <li>
          {" "}
          <a href="" onClick={(e) => e.preventDefault()}>
            Desgaste
          </a>
        </li>
        <li>
          {" "}
          <a href="" onClick={(e) => e.preventDefault()}>
            Fragilização por H
          </a>
        </li>
      </ul>

      <div className="card-content">
        <div className="cards-align">
          {data.map((item, key,) => (
            <Cards
              key={key}
              image={item.image}
              title={item.produto}
              description1={item.info}
              details={[
                `${item.pressao}`,
                `${item.vazao}`,
                `${item.software}`,
              ].map(
                (details) => (
                  
                  <td>{details ? details : undefined}</td>
                 
                )
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default infraestrutura;
