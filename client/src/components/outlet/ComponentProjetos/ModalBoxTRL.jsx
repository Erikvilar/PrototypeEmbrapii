import scss from  "./ComponentProjetos.module.scss"
const ModalBoxTRL = () => {
  return (
    <article className={scss.articleModal}>
      <h2>TRL - Technology Readiness Level</h2>
      <p>Nível de Maturidade Tecnológica</p>

      <h3>Conhecimento</h3>
      <div className={scss.contentModal}>
        <div className={scss.boxModal}>
          <span>TRL 1</span>
          <span>Hipotese de principios</span>
          <div>
            <p>
            Caracteriza-se pela identificação e constatação dos princípios que embasam a ideia com formulação da hipótese de pesquisa.
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>TRL 2</span>
          <span>Caracterização
          </span>
          <div>
            <p>
            Consiste na identificação e caracterizações dos elementos/componentes básicos da tecnologia e levantamento do estado da arte considerando-se a área de aplicação.
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>TRL 3</span>
          <span>Conceitos Básicos
          </span>
          <div>
            <p>
            Consiste na verificação dos aspectos críticos do processo e/ou produto por meio de estudo analítico e experimental ou prova de conceito. Os conceitos básicos da tecnologia e o desempenho esperado de seus elementos/componentes são validados em escala laboratorial.
            </p>
          </div>
        </div>
      </div>
      <h3>Teste e prototipagem</h3>

      <div className={scss.contentModal}>
        <div className={scss.boxModal}>
          <span>TRL 4</span>
          <span>Laboratório</span>
          <div>
            <p>
            Consistem na validação de componente e/ou sistema em ambiente laboratorial.
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>TRL 5</span>
          <span>Piloto
          </span>
          <div>
            <p>
            Objetiva-se viabilizar o escalonamento do desenvolvimento do nível piloto e validar a tecnologia em escala piloto sob condições representativas próximas ás reais, com aprimoramento dos limites para variáveis operacionais e parâmetros de segurança.
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>TRL 6</span>
          <span>Protótipo</span>
          <div>
            <p>
            Deve-se garantir que os componentes da escala protótipo/demonstração sejam totalmente compatíveis com os da escala comercial e comprovar a viabilidade técnica e econômica.
            </p>
          </div>
        </div>
      </div>

      <h3>Disponibilização</h3>

      <div className={scss.contentModal}>
        <div className={scss.boxModal}>
          <span>TRL 7</span>
          <span>Laboratório
          </span>
          <div>
            <p>
            Caracteriza-se pela validação da tecnologia em escala semicomercial de produção, por meio de um sistema totalmente integrado de demonstração em condições representativas (campo).
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>TRL 8</span>
          <span>Comercial</span>
          <div>
            <p>
            Caracteriza-se pela validação do sistema em escala comercial com teste de aceitação realizado ou pela introdução do produto no mercado atendendo às especificações.
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>TRL 9</span>
          <span>Plena Operação
          </span>
          <div>
            <p>
            Consiste no sistema em plena operação ou produto em uso, atendendo a todos os requisitos de projeto. É necessário garantir, portanto, que todas as etapas do processo de produção estejam sob controle e apresentem níveis de qualidade apropriados.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ModalBoxTRL;
