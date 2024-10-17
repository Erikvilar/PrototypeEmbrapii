import css from "./ComponentFAC.module.css";
import { NotesTitles, TextArticles } from "../ComponentEquipe";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const ComponentFAC = () => {
  return (
    <section className="ComponentFAC" >
      <NotesTitles title="Fale conosco" class_style="notes_title" />
      <div className={css.FormsFAC}>
        <TextArticles
          text={
            <>
              Olá usuário! Este espaço é para você fazer perguntas, comentários,
              sugestões, reclamações ou mesmo relatar alguma situação que
              vivenciou utilizando os serviços oferecidos pela Unidade Embrapii
              FEMEC UFU. As questões recebidas neste canal serão encaminhadas à
              coordenação para que possam ser respondidas o mais breve. Você
              pode usar este canal de comunicação para nos ajudar a melhorar e
              otimizar os serviços oferecidos pela Rede.
            </>
          }
        />
        <b style={{color:"#0d6efd"}}>Acesse nossos canais de atendimento:</b>
        <ul style={{padding:0, display:"flex", fontWeight:400, color:"gray"}} >
       
        <div style={{paddingRight:80}}>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
           <span>embrapii@femec.ufu.br</span> </li>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="22px" fill="#666666"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
            <span>(34) 3239-4555</span></li>
          </div>
       
        </ul>
        <form>
          <label htmlFor="">Seu nome *</label>
          <input type="text" />
          <label htmlFor="">Seu Email *</label>
          <input type="text" />
          <label htmlFor="">Assunto *</label>
          <input type="text" />
          <label htmlFor="">Mensagem *</label>
          <textarea rows={5} cols="33"></textarea>
          <button>Enviar mensagem</button>
        </form>
     
        <NotesTitles
        title={<>Voltar ao Inicio
        
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -860 360 1060" width="24px" fill="#2c66ce">
          
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></>}
        link="#"
        class_style="notes_title_baseboard"
      />
      </div>
     


      <FloatingWhatsApp 
        phoneNumber='+55119975499248'
        accountName='Unidade Embrapii'
        
        chatMessage='Olá, tudo bem? Em que posso te ajudar?'
        statusMessage='Online'
        allowClickAway={true}
      
        placeholder='Digite a sua mensagem'
        avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXXfnEauk6cEjo9-6eNKwUv05lFqcCZi0Ww&s"}
          
         />


    </section>
  );
};
export default ComponentFAC;
