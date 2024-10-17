/* ========================================================================== 
                          Component Equipe 
   ========================================================================== */
/*
*
* Autor: Erik Alves Vilar
* Data 20-08
* JSX
* Tipo de estrutura : Modules
* Refatorado: Refatorar se possivel
*/

import {
  Contacts,
  Articles,
  TextArticles,
  BoxEquipeStructure,
  NotesTitles,
  css,
} from "./index";

const ComponentEquipe = () => {
  return (
    <section id="equipe" >
      <NotesTitles title="Equipe" class_style="notes_title" />
      <TextArticles
        text={Articles.EquipeParagrafos[0]}
        classtype="textArticle"
      />
      <TextArticles
        text={Articles.EquipeParagrafos[1]}
        classtype="textArticle"
      />
  <img src="http://www.ltad.mecanica.ufu.br/sites/ltad.mecanica.ufu.br/files/ltad_.jpeg" alt="" width={712} />
   
      
      <hr />
      <div className={css.BoxTeamAligner}>
        {Contacts.map((item, key) => (
          <BoxEquipeStructure
            key={key}
            occupation={item.occupation}
            iconEmail={item.iconEmail}
            name={item.name}
            email={item.email}
            phone={item.phone}
          />
        ))}
      </div>
      <NotesTitles
        title="Ir para Parceiros "
        link="#parceiros"
        class_style="notes_title_baseboard"
      />
    </section>
  );
};
export default ComponentEquipe;
