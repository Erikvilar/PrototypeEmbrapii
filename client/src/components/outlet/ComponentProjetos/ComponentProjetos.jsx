import { NotesTitles, TextArticles } from "../ComponentEquipe";
import BoxProjetos from "./BoxProjetos";
import scss from "./ComponentProjetos.module.scss";
const ComponentProjetos = () => {
  return (
    <section id="projetos" className={scss.ComponentProjetos}>
      <NotesTitles title="Projetos" class_style="notes_title" />
      <TextArticles
        text={
          <>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dicta recusandae dolorem est dignissimos? Provident necessitatibus
            saepe magnam nemo, nostrum a natus eligendi, minima eius, incidunt
            doloribus expedita? At, facilis. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quasi quibusdam rem soluta, alias
            perspiciatis veritatis quam rerum, dolore, ratione cum impedit?
            Praesentium ipsam vel tempore! Voluptatibus reiciendis adipisci
            optio earum. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Suscipit consequuntur dicta aspernatur quisquam aliquid neque
            dolorum natus distinctio ea inventore voluptas et harum dolore quo
            ad quibusdam, ullam sapiente hic?
          </>
        }
      />
	  <NotesTitles title="Densevolvendo diversos projetos para o futuro" class_style="notes_title_withBox"/>
	  <div className={scss.exposedProjetos}>
		
	<img src="https://comunica.ufu.br/sites/default/files/imagem-chamada/2023-09/Miniaturizada.jpg" alt="" width={237}/>
	<img src="https://comunica.ufu.br/sites/default/files/imagem/2023-10/unnamed.png" alt="" width={237}/>
	<img src="https://comunica.ufu.br/sites/comunica.ufu.br/files/conteudo/noticia/imagem_destaque_dsc03854_1.jpg" alt="" width={237}/>
	
	</div>
	  <BoxProjetos />
    </section>
  );
};
export default ComponentProjetos;
