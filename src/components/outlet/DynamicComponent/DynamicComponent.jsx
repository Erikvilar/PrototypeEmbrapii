import { UseFetchGet } from "../../../hooks/useFetchGet";
import { NotesTitles } from "../ComponentEquipe";
import css from "./DynamicComponent.module.css";
import ReactMarkdown from "react-markdown";
const DynamicComponent = () => {
  const localValue = JSON.parse(sessionStorage.getItem("localValue"));
  const { data } = UseFetchGet(localValue[0]);

  console.log(data);
  return (
    <section className={css.ContentPage}>
      {data.map((item, index) => (
        <div className={item.produto} key={item.id}>
          <NotesTitles title="Equipamentos" class_style="notes_title" />
          <div className={css.ContentImage}>
            <span>{item.name}</span>
            <img src={item.image[0]} alt="" />
          </div>
       
          <ReactMarkdown className={css.startText}>
           {item.content.usability[0]}
          </ReactMarkdown>

          {item.content.technical != "" ? (
            <>
              <h3>Características do equipamento:</h3>
              <ul className={css.unlist} type="a">
                {item.content.technical.map((descripton, index) => (
                  <li key={descripton.id}>{descripton}</li>
                ))}
              </ul>
            </>
          ) : null}
          {item.content.testing != "" ? (
            <>
              <h3>Características do ensaio:</h3>
              <ul className={css.unlist} type="a">
                {item.content.testing.map((descripton, index) => (
                  <li key={descripton.id}>{descripton}</li>
                ))}
              </ul>
            </>
          ) : <></>}
         
          <article>
            <ReactMarkdown>{item.content.usability[1]}</ReactMarkdown>
            <ReactMarkdown>{item.content.usability[2]}</ReactMarkdown>
          </article>

          <div className={css.ContentImageRow}>
            <div>
            <img src={item.image[1]} alt=""  />

            <p><i>{item.descricaoImg[0]}</i></p>
            </div>
            <div>
            {item.image[2] ? (
              <img src={item.image[2]} alt=""  />
              
            ) : null}
                    <p><i>{item.descricaoImg[1]}</i></p>
            </div>
          </div>
          <article>
            {item.content.usability[3] ? (
              <ReactMarkdown>{item.content.usability[3]}</ReactMarkdown>
            ) : null}
            {item.content.usability[4] ? (
              <ReactMarkdown>{item.content.usability[4]}</ReactMarkdown>
            ) : null}
            <div className={css.ContentImageRow}>
              <div>
              <img src={item.image[3]} alt="" />
              <p><i>{item.descricaoImg[2]}</i></p>
              </div>
              <div>
              {item.image[4] ? (
                <img src={item.image[4]} alt=""  />
              ) : null}
                      <p><i>{item.descricaoImg[3]}</i></p>
              </div>
            </div>
            {item.content.usability[5] ? (
              <ReactMarkdown>{item.content.usability[5]}</ReactMarkdown>
            ) : null}
            {item.content.usability[6] ? (
              <ReactMarkdown>{item.content.usability[5]}</ReactMarkdown>
            ) : null}
            {item.content.usability[7] ? (
              <p>{item.content.usability[5]}</p>
            ) : null}
          </article>
        </div>
      ))}
      <NotesTitles
        title="Voltar para infraestrutura "
        link="#infraestrutura"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default DynamicComponent;
