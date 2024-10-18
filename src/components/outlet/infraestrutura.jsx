import { NotesTitles, TextArticles } from "../tools/tools";
import { UseFetchGet } from "../../hooks/useFetchGet";
import Articles from "../texts/ContentArticles";
import Cards from "../reactBootstrap/cards/cards";
import DropdownSearch from "./DropdownSearch/DropdownSearch";
import Searcher from "../header/Searcher/Searcher";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";



const infraestrutura = () => {
  const [info, setInfo] = useState({
    value: "",
    title: "Categorias",
  });

  const insertValues = (e) => {
    setInfo({ ...info, value: [e.target.value], title: [e.target.id] });
  };
  
 
  const Navigate = useNavigate();
  const { title, value } = info;
  const { data } = UseFetchGet(value.toString());

  const handleDefineAndNavigate = (e) => {
    const productGetter = [e.target.value];
    Navigate("/equipamentos");
    sessionStorage.setItem("localValue", JSON.stringify(productGetter));
    console.log(productGetter);
  };

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
      <div className="searcher-content" >
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
          placeholder="Busca por palavra chave ex: sensores"
          event={insertValues}
        />
      </div>


   



      <div className="card-content">
        <div className="cards-align">
          {data.length != 0 ? (
            data.map((item, index) => (
              <Cards
                key={index}
                image={item.image[0]}
                title={item.produto}
                description={item.descricao ? <ReactMarkdown>{item.descricao}</ReactMarkdown> : null}
                details={item.categoria ? <span>{item.categoria}</span> : null}
                value={item.produto}
                others={[item.details].map((d, ) => {
                  return (
                    <>
                      {Object.entries(d.descritivo).map(([key, value]) => (
                        <span key={value}>
                          <b>{key}:</b> {value}
                        </span>
                      ))}
                    </>
                  );
                })}
                event={handleDefineAndNavigate}
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
        title={<>Veja nossas publicaçôes
        
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -860 360 1060" width="24px" fill="#2c66ce">
          
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></>}
        link="#noticias"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default infraestrutura;
