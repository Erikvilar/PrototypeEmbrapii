import React from "react";
import scss from "./ComponentProjetos.module.scss"
export const ModalBoxCRL = () => {
  return (
    <article className={scss.articleModal}>
      <h2>CRL - Commercial Readiness Level</h2>
      <p>Nível de Prontidão Comercial</p>

      <h3>Viabilidade teórica</h3>
      <div className={scss.contentModal}>
        <div className={scss.boxModal}>
          <span>CRL 1</span>
          <span>Hipótese de base</span>
          <div>
            <p>
              É definido o problema ou oportunidade e descrita a entrega, com
              suas premissas, benefícios e incertezas.
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>CRL 2</span>
          <span>Conhecimento de mercado</span>
          <div>
            <p>
              São mapeadas as soluções oferecidas pelo mercado, sua forma de
              comercialização, seus pontos fortes e fracos e analisada a
              diferença entre as mesmas e a solução proposta.
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>CRL 3</span>
          <span>Aplicação de tecnologia</span>
          <div>
            <p>
              São analisadas a valoração e a análise inicial da cadeia de valor.
              São definidos os potenciais fornecedores e parceiros, o local alvo
              e o custo da implantação, a abrangência e requisitos legais. É
              confirmado o interesse do cliente.
            </p>
          </div>
        </div>
      </div>
      <h3>Viabilização comercial</h3>

      <div className={scss.contentModal}>
        <div className={scss.boxModal}>
          <span>CRL 4</span>
          <span>Proposta de valor</span>
          <div>
            <p>
              É realizada a valoração e a análise inicial da cadeia de valor.
              São definidos os potenciais fornecedores e parceiros, o local alvo
              e o custo da implantação, a abrangência e requisitos legais. É
              confirmado o interesse do cliente.
            </p>
          </div>
        </div>


        <div className={scss.boxModal}>
          <span>CRL 5</span>
          <span>Alinhamento do mercado</span>
          <div>
            <p>
              É realizado o alinhamento com parceiros, assumido o compromisso de
              implantação com o cliente e apresentada proposta de plano de
              implantação.
            </p>
          </div>
        </div>


        <div className={scss.boxModal}>
          <span>CRL 6</span>
          <span>Otimização da solução</span>
          <div>
            <p>
              São definidos os fornecedores, o plano de implantação validado
              pelo cliente, o modelo de negócio para a abrangência e o modelo
              contratual. São assumidos os compromissos com os parceiros e feita
              a revisão da valoração.
            </p>
          </div>
        </div>
      </div>

      <h3>Disponibilização</h3>

      <div className={scss.contentModal}>
       

        <div className={scss.boxModal}>
          <span>CRL 7</span>
          <span>Hipotese de principios</span>
          <div>
            <p>
              É realizada a 1ª implantação e revisada a valoração, é concluída a
              contratação do plano de implantação pelo cliente e atendidos todos
              os requisitos legais para o produto/solução e operações de
              suporte.
            </p>
          </div>
        </div>

        <div className={scss.boxModal}>
          <span>CRL 8</span>
          <span>Ida ao mercado</span>
          <div>
            <p>
              É concluída a implantação conforme o plano de implantação, é
              apurado o retorno, validado o plano de abrangência com os
              potenciais novos clientes e revisada a valoração.
            </p>
          </div>
        </div>
        <div className={scss.boxModal}>
          <span>CRL 9</span>
          <span>Lançamento/ implementação
          </span>
          <div>
            <p>
            É concluída a implantação conforme o plano de abrangência, com a apuração de retorno.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
