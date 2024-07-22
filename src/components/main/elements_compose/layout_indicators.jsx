import React from 'react'
import  "/src/styles/styles_main/indicators_layout.scss"
import CountUp from 'react-countup';
const layout_indicators = () => {
  return (
    <div className="layout_indicators"> 

         
            <h3>UNIDADE EMBRAPII FEMEC UFU</h3>
          
         <div className='indicators'>
            <div>
            <p>+ <CountUp end={20} duration={5} /></p>
            <span>Projetos desenvolvidos</span>
            
            </div>
            <div>
                <p>+ <CountUp end={50} duration={5} />mi</p>
                <span>Projetos desenvolvidos</span>
            </div>
            <div>
                <p>+ <CountUp end={1000} duration={5} /></p>
                <span>propriedades intelectuais registradas ou solicitadas</span>
            </div>
            <div>
                <p>+ <CountUp end={150} duration={5} /></p>
                <span>instituição pública que mais registra programas de computador no Brasil
                Ranking INPI 2021</span>
                </div>
            <div>
                <p>+ <CountUp end={1200} duration={5} /></p>
                <span>alunos participando de projetos desenvolvidos em parceria com empresas</span>
                
                </div>

      
        </div>
    </div>
  )
}
export default layout_indicators