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


import {CountUp} from "./index"
export const BoxIndicators = (props) => {
    return (
      <div>
        <div>
        <p>
          +{" "}
          <CountUp
            end={props.value} 
            duration={props.duration}
            delay={props.delay}
          />
          <span>{props.unity}</span>
        </p>
        </div>
        <span>{props.text}</span>
        
      </div>
    );
  };