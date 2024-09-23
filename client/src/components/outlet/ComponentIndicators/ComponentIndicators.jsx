
/* ========================================================================== 
                        		Box Structure
   ========================================================================== */
/*
*
* Autor: Erik Alves Vilar
* Data 20-08
* JSX
* Tipo de estrutura : Modules
* Refatorado: Refatorar se possivel
*/
import {css, BoxIndicators} from "./index"
const ComponentIndicators = () => {
  return (
    <section className={css.SectionComponentIndicators}>
 
        <div className="notes_title_withBox">
        <img
          src="https://github.com/Erikvilar/PrototypeEmbrapii/blob/main/src/images/icons/ouro.png?raw=true"
          alt=""
          width={30}
        />
          <h1>UNIDADE OURO FEMEC EMBRAPII</h1>
        </div>
        
 
      <div className={css.ComponentIndicators}>
        <BoxIndicators
          value="70"
          duration="5"
          delay="2"
          text="projetos em parcerias com empresas"
        />
        <BoxIndicators
          value="130"
          unity="mi"
          duration="5"
          delay="2"
          text="de R$ em projetos desenvolvidos"
        />
        <BoxIndicators
          value="25"
          duration="5"
          delay="2"
          text="propriedades intelectuais requeridas"
        />
        <BoxIndicators
          value="250"
          duration="5"
          delay="2"
          text="alunos que participaram de projetos em parceria com empresas"
        />
      </div>
    </section>
  );
}
export default ComponentIndicators