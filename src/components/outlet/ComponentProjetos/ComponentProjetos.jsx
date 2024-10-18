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
           A Unidade Embrapii FEMEC UFU, no ano de 2024, comemorou a marca de 40 projetos de PD&I. Foram mais de R$ 62 milhões contratados em parceria com empresas dos setores óleo e gás, indústria de transformação, agroindustrial, metalúrgico, ferroviário, automotivo e metalmecânico em geral. Os projetos são desenvolvidos no prédio que compõe o Laboratório de Tecnologia em Atrito e Desgaste (LTAD) e em outros 2 que compõe o Centro para Pesquisa e Desenvolvimento de Processos de Soldagem (Laprosolda). 
          </>
        }
      />
      <TextArticles
        text={
          <>
          O credenciamento é o reconhecimento formal para a Unidade atuar em atividades de PD&I em áreas de relevante interesse para o setor. Significa que possui infraestrutura e condições técnicas e operacionais adequadas para a execução das atividades de desenvolvimento de pesquisa e inovação. Os critérios e procedimentos estão estabelecidos no Regulamento Técnico específico da ANP
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
    <NotesTitles
        title={<>Veja nossas linhas de pesquisa
        
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -860 360 1060" width="24px" fill="#2c66ce">
          
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></>}
        link="#pesquisas"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default ComponentProjetos;
