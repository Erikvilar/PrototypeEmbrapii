import "/src/styles/styles_main/indicators_layout.scss";
import CountUp from "react-countup";
function indicators() {
  return (
    <div className="layout_indicators">
      <div className="title_indicators">
        <img
          src="https://github.com/Erikvilar/PrototypeEmbrapii/blob/main/src/images/icons/ouro.png?raw=true"
          alt=""
          width={50}
        />
        <h3>UNIDADE OURO EMBRAPII FEMEC UFU</h3>
      </div>
      <div className="indicators">
        <IndicatorBox
          value="70"
          duration="5"
          delay="2"
          text="projetos em parcerias com empresas"
        />
        <IndicatorBox
          value="130"
          duration="5"
          delay="2"
          text="de R$ em projetos desenvolvidos"
        />
        <IndicatorBox
          value="25"
          duration="5"
          delay="2"
          text="propriedades intelectuais requeridas"
        />
        <IndicatorBox
          value="250"
          duration="5"
          delay="2"
          text="alunos que participaram de projetos em parceria com empresas"
        />
      </div>
    </div>
  );
}
export default indicators;
export const IndicatorBox = (props) => {
  return (
    <div>
      <div>
      <p>
        +{" "}
        <CountUp
          end={props.value}
          duration={props.duaration}
          delay={props.delay}
        />
        
      </p>
      </div>
      <span>{props.text}</span>
      
    </div>
  );
};
