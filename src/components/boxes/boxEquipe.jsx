import React from "react";
import { Notes_titles } from "../props/propsComponents";
const boxEquipe = (props) => {
  return (
    <div className="box_team">
      <Notes_titles title={props.occupation} class_style="notes_title" />
      <ul key={props.keyValue}>
        <li>{props.name}</li>
 
        <li><span>{props.iconEmail}</span><a href="" target="_blank" rel="noopener noreferrer">
            {props.email}
          </a>
        </li>
        <li>
          <span>{props.phone}</span>
        </li>
      </ul>
    </div>
  );
};
export default boxEquipe;
