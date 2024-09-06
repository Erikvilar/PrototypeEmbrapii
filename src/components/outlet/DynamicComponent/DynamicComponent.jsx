import { RiH1 } from "react-icons/ri";
import { UseFetchGet } from "../../../hooks/useFetchGet";
import { NotesTitles } from "../ComponentEquipe";
import css from "./DynamicComponent.module.css";
const DynamicComponent = () => {
  const localValue = JSON.parse(localStorage.getItem("localValue"));
  const { data } = UseFetchGet(localValue[0]);

  console.log(data);
  return (
    <section className={css.ContentPage}>
      {data.map((item, index) => (
        <div className={item.produto} key={item.id}>
          <NotesTitles title="Equipamentos" class_style="notes_title" />
          <div className={css.ContentImage}>
            <span>{item.produto}</span>
            <img src={item.image[0]} alt="" />
          </div>
          <h4>{item.name}</h4>
          <p>
            {item.content.usability[0]}
          </p>

          {item.content.technical != "" ? (
            <ol type="a">
              <li>Caracteristicas:</li>
              {item.content.technical.map((descripton) => (
                <li>{descripton}</li>
              ))}
            </ol>
          ) : null}

          <article>
            <p>{item.content.usability[1]}</p>
            <p>{item.content.usability[2]}</p>
          </article>

          <div className={css.ContentImageRow}>
            <img src={item.image[1]} alt="" width={712} />
			{item.image[2]  ? <img src={item.image[2]} alt="" width={712} />:null}
          </div>
          <article>
		  { item.content.usability[3] ?<p>{item.content.usability[3]}</p>: null }
		  { item.content.usability[4] ?<p>{item.content.usability[4]}</p>: null }
            <div className={css.ContentImageRow}>
              <img src={item.image[3]} alt="" width={712} />
              {item.image[4] ? <img src={item.image[4]} alt="" width={712} />:null}
            </div>
            { item.content.usability[5] ?<p>{item.content.usability[5]}</p>: null }
            { item.content.usability[6] ?<p>{item.content.usability[5]}</p>: null }
            { item.content.usability[7] ?<p>{item.content.usability[5]}</p>: null }
      
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
