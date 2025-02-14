import { UseFetchGet } from "../../../hooks/useFetchGet";
import { NotesTitles } from "../ComponentEquipe";
import css from "./DynamicComponent.module.css";
import ReactMarkdown from "react-markdown";
const DynamicComponent = () => {
  const localValue = JSON.parse(sessionStorage.getItem("localValue")) || [];
  const { data } = UseFetchGet(localValue[0]);

  const renderImages = (images, descriptions) =>
    images.map((imgSrc, index) => (
      <div key={index}>
        <img src={imgSrc} alt={descriptions[index]} />
        <p>
          <i>{descriptions[index]}</i>
        </p>
      </div>
    ));

  return (
    <section className={css.ContentPage}>
      {data.map((item) => (
        <div className={item.produto} key={item.id}>
          <NotesTitles title="Equipamentos" class_style="notes_title" />
          <div className={css.ContentImage}>
            <span>{item.name}</span>
            <img src={item.image[0]} alt={item.name} />
          </div>

          <ReactMarkdown className={css.startText}>
            {item.content.usability[0]}
          </ReactMarkdown>

          {item.content.technical.length > 0 && (
            <>
              <h3>Características do equipamento:</h3>
              <ul className={css.unlist} type="a">
                {item.content.technical.map((description) => (
                  <li key={description.id}>{description}</li>
                ))}
              </ul>
            </>
          )}

          {item.content.testing.length > 0 && (
            <>
              <h3>Características do ensaio:</h3>
              <ul className={css.unlist} type="a">
                {item.content.testing.map((description) => (
                  <li key={description.id}>{description}</li>
                ))}
              </ul>
            </>
          )}

          <article>
            {item.content.usability.slice(1, 3).map((usability, index) => (
              <ReactMarkdown key={index}>{usability}</ReactMarkdown>
            ))}
          </article>

          {item.id === 3 ? (
            <div className={css.imageTable}>
              {renderImages(
                item.image.slice(1, 4),
                item.descricaoImg.slice(0, 3)
              )}
            </div>
          ) : (
            <div className={css.ContentImageRow}>
              {renderImages(
                item.image.slice(1, 3),
                item.descricaoImg.slice(0, 2)
              )}
            </div>
          )}

          <article>
            {item.content.usability
              .slice(3)
              .map((usability, index) =>
                usability ? (
                  <ReactMarkdown key={index}>{usability}</ReactMarkdown>
                ) : null
              )}
            <div className={css.ContentImageRow}>
              {renderImages(
                [item.image[item.id === 3 ? 4 : 3]],
                [item.descricaoImg[2]]
              )}
              {item.image[3] &&
                renderImages([item.image[4]], [item.descricaoImg[5]])}
                
            </div>
          </article>
        </div>
      ))}
      <NotesTitles
        title="Voltar para infraestrutura"
        link="#infraestrutura"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default DynamicComponent;
