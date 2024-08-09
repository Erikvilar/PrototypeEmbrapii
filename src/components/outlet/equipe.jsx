import React from "react";
import { Notes_titles, Box_team } from "../props/propsComponents";
import { TextArticles } from "../props/propsComponents";
import Articles from "../texts/ContentArticles";

const equipe = () => {
  return (
    <div className="dynamic_layout" id="equipe">
      <Notes_titles title="Equipe" class_style="notes_title" />
      <TextArticles text={Articles.EquipeParagrafos[0]}classtype="textArticle"/>
      <TextArticles text={Articles.EquipeParagrafos[1]}classtype="textArticle"/>
      <TextArticles text={Articles.EquipeParagrafos[2]}classtype="textArticle"/>
      <TextArticles text={Articles.EquipeParagrafos[3]}classtype="textArticle"/>
      <TextArticles text={Articles.EquipeParagrafos[4]}classtype="textArticle"/>
      <TextArticles text={Articles.EquipeParagrafos[5]}classtype="textArticle"/>
      <TextArticles text={Articles.EquipeParagrafos[6]}classtype="textArticle"/>
      <hr />
      <div className="box_team_aligner">
        <Box_team />
      </div>
      <Notes_titles title="Ir para parceiros " link="#parceiros" class_style="notes_title_baseboard" />
    </div>
  );
};
export default equipe;
