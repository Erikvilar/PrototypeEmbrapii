import { NotesTitles } from "../ComponentEquipe";
import css from "./ComponentLaboratorio.module.css";

const ComponentLaboratorio =() =>{

  return (
  <section className={css.ComponentLaboratorio}>

	<NotesTitles title="Laborátorio"  class_style="notes_title"/>

	<div className={css.boxLab}>
		<img src="https://comunica.ufu.br/sites/comunica.ufu.br/files/conteudo/noticia/imagem_destaque_20230413_080615.jpg" alt="" width={200} height={100} />
		<span>Laborátorio em atrito e desgaste </span>
		<ul>
		
				
				<li> Av. João Naves de Ávila, 2121 </li>
				<li>Santa Mônica - bloco 5F</li>
				<li>Uberlândia - 38408-100</li>
				
			</ul>
	</div>

	<div className={css.boxLab}>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUuxdGWiwlaUm6WCmGa5ezGGRwPgiZg8I0w&s" alt="" width={200} height={100} />
		<span>Laborátorio em atrito e desgaste </span>
		<ul>
		
				
		<li> Av. João Naves de Ávila, 2121 </li>
		<li>Santa Mônica - bloco 5F</li>
		<li>Uberlândia - 38408-100</li>
		
	</ul>
	</div>
	<div className={css.boxLab}>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUuxdGWiwlaUm6WCmGa5ezGGRwPgiZg8I0w&s" alt="" width={200} height={100} />
		<span>Laborátorio em atrito e desgaste </span>
		<div>
		<ul>
		
				
		<li> Av. João Naves de Ávila, 2121 </li>
		<li>Santa Mônica - bloco 5F</li>
		<li>Uberlândia - 38408-100</li>
		
	</ul>
		</div>
	</div>
	<NotesTitles
        title={<>Voltar para inicio 
        
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -860 360 1060" width="24px" fill="#2c66ce">
          
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></>}
        link="#"
        class_style="notes_title_baseboard"
      />
  </section>
  )
}
export default ComponentLaboratorio;
