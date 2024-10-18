import { NotesTitles, TextArticles } from "../ComponentEquipe";

import LinhasDePesquisas from "./LinhasDePesquisas";
function ComponentPesquisas() {
  return (
    <section className="ComponentPesquisas" id="pesquisas">
      <NotesTitles title="Linhas de pesquisa credenciadas ANP" class_style="notes_title" />
	  <TextArticles
        text={
          <>
            No credenciamento específico no setor de óleo e gás a Unidade tem
            como principal parceira a Petrobras. E, para desenvolver PD&I nessa
            área a Unidade conquistou o credenciamento junto à Agência Nacional
            do Petróleo, Gás Natural e Biocombustíveis do Brasil (ANP). O
            credenciamento é o reconhecimento formal para a Unidade atuar em
            atividades de PD&I em áreas de relevante interesse para o setor.
            Significa que possui infraestrutura e condições técnicas e
            operacionais adequadas para a execução das atividades de
            desenvolvimento de pesquisa e inovação. Os critérios e procedimentos
            estão estabelecidos no Regulamento Técnico específico da ANP.
          </>
        }
      />
		  <NotesTitles title="Seguimentos de pesquisa no setor óleo e gás " class_style="notes_title_withBox"/>

      {LinhasDePesquisas.map((pesquisas, index) => (
        <div key={pesquisas.id} style={{paddingTop:20}}>
          <h5>{pesquisas.titulo}</h5>
          <TextArticles text={pesquisas.text} />
		  <div style={{width:712, display:"flex", height:"auto", justifyContent:"center"}}>
	{pesquisas.images.map((i)=>(<img src={i} width={350} style={{margin:2}}/>))}
		  </div>
        </div>
      ))}
	  <NotesTitles
        title={<>Conheça nossa infraestrutura
        
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -860 360 1060" width="24px" fill="#2c66ce">
          
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></>}
        link="#infraestrutura"
        class_style="notes_title_baseboard"
      />
    </section>
  );
}
export default ComponentPesquisas;
