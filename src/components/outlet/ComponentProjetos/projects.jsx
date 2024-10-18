const projects = [
  
  //Projeto - LIGAS
  {
    id: 0,
    prefixo: "LIGAS",
    coordenador: "Profa. Dra. Regina Paula Garcia Santos",
    contato:"https://www.femec.ufu.br/pessoas/docentes/regina-paula-garcia-santos",
    titulo: "Integridade de Fixadores para Interligação de dutos em FPSOs",
    descricao: [
      `A crescente demanda no uso de ligas de Ni na indústria de óleo e gás em condições extremas de carregamentos, seja em novos projetos, seja naqueles onde se deseja uma adequação ao uso, tem exigido avaliações de integridade estrutural.`,
      `
    O aumento no número de falhas, sobretudo em condições de hidrogenação, impacta equipamentos-chave da cadeia produtiva, de transporte e de processamento, podendo gerar grandes prejuízos com paradas não programadas e até por incidentes ambientais de grandes proporções.`,
      `
    Para auxiliar na solução desses problemas, este projeto tem como objetivo avaliar propriedades mecânicas e integridade estrutural sob hidrogenação em ligas de níquel para aplicação em fixadores submarinos de estruturas off-shore.
    `,
    ],
    status: "Ativo",
    palavrasChaves: [
      `Fragilização por Hidrogênio`,
      `Integridade Estrutural`,
      `Ligas de Níquel`,
    ],
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Outubro de 2022",

    listaDeProposta: [
      `Definição das condições admissíveis de operação dos equipamentos de ligas de níquel submetidos à proteção catódica;`,
      `Avaliação da integridade estrutural de equipamentos;`,
      `Definição de materiais e condições adequadas de operação para fixadores utilizados na interligação de dutos em FPSOs;`,
      `Diminuição da ocorrência de falhas;`,
      `Redução de custos.`,
    ],
  },
  //Projeto - SMART
  {
    id: 1,
    prefixo: "SMART",
    coordenador: "Profa. Dra. Regina Paula Garcia Moura",
    contato:"https://www.femec.ufu.br/pessoas/docentes/regina-paula-garcia-santos",
    titulo:
      "Desenvolvimento de componentes resistentes à corrosão para lavor de gases de caldeiras de usinas de açúcar e álcool",
    status: "Ativo",
    palavrasChaves: [
      `Usinas sucroalcooleiras;`,
      `Corrosão;`,
      `Integridade estrutural;`,
      `Aços inoxidáveis.`,
    ],
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Agosto 2024",
    descricao: [
      `Nos processos de queima de biomassa, como o bagaço de cana-de-açúcar, os gases gerados contêm substâncias corrosivas, incluindo ácidos como o clorídrico e o sulfúrico, além de compostos orgânicos. Essas substâncias podem causar degradação significativa nos componentes metálicos.`,
      `
     A corrosão compromete a eficiência dos lavadores de gases, impactando negativamente a remoção de poluentes. Componentes corroídos podem resultar em vazamentos e falhas operacionais, levando a paradas não programadas e perda de produtividade. Além disso, isso resulta em manutenções frequentes e substituições de peças, o que eleva os custos operacionais e reduz a vida útil dos equipamentos.`,
      `
      Portanto, o desenvolvimento de componentes metálicos resistentes à corrosão para lavadores de gases em caldeiras de indústrias sucroalcooleiras é essencial. Essa iniciativa não só garante a eficiência operacional, mas também ajuda a reduzir custos de manutenção, atende a regulamentações ambientais e promove práticas sustentáveis. Assim, essa abordagem contribui significativamente para a viabilidade e competitividade da indústria a longo prazo.
      `,
    ],
    listaDeProposta: [
      `Aumento da eficiência operacional;`,
      `Menores custos de manutenção; `,
      `Desenvolvimento de materiais de maiores resistências à corrosão; `,
      `Reduzir falhas operacionais e vazamentos decorrentes da corrosão melhorando a segurança dos trabalhadores. `,
    ],
  },
  //Projeto - GBMX II
  {
    id: 2,
    prefixo: "GBMX 2",
    coordenador: "Profa. Dra. Regina Paula Garcia Moura",
    contato:"https://www.femec.ufu.br/pessoas/docentes/regina-paula-garcia-santos",
    titulo:
      "Avaliação do Desgaste Abrasivo-Corrosivo de Chapas de Vagões de Transporte de Bauxita",
    descricao: [
      `É comum no transporte de minérios através de vagões a observações de fenômenos corrosivos e abrasivos. Se por um lado os produtos transportados colaboram com o desgaste devido sua natureza abrasiva, por outro lado as intempéries com presença de chuvas durante o percurso contribuem sinergicamente para a degradação nas chapas.`,
      `
        O desgaste excessivo das chapas dos vagões reduz o tempo de intervenção corretiva e com isso, impacta na eficiência do produto. Uma solução simples e trabalhar com espessuras maiores para aumentar esse tempo de operação. Entretanto, essa isso acarreta em aumento do peso do vagão e por sua vez reduz a eficiência no volume transportado.`,
      `
        Assim, o desenvolvimento estratégico de materiais otimizados nesta aplicação colaboram tanto para aumentar a vida útil do vagão quanto para reduzir se peso em vazio, aumentando a capacidade de escoamento.
 
        `,
    ],
    listaDeProposta: [
      `Aumento da vida útil dos vagões;`,
      `Redução dos custos de manutenção; `,
      `Aumento da capacidade de transporte pela redução do peso próprio do vagão; `,
      `Desenvolvimento de materiais de maiores resistências à corrosão-abrasão. `,
    ],
    status: "Ativo",
    TRL: "6",
    CRL: "4",
    palavrasChaves: [
      ` Corrosão-abrasão;`,
      ` Transporte de bauxita;`,
      `Aços patináveis;`,
      ` Vagões para minério.`,
    ],
    agencia: "Embrapii",
    prazo: "Julho de 2023",
  },
  //Projeto - POLIVET
  {
    id: 3,
    prefixo: "POLIVET",
    coordenador: "Prof. Dr.Luciano J. Arantes",
    contato:"https://www.femec.ufu.br/pessoas/docentes/luciano-jose-arantes",
    titulo:
      "Desenvolvimento de Equipamento e Metodologia para Avaliação do Desempenho de Rebolos Aplicados na Lapidação Lateral de Vidro",
    descricao: [
      `A retificação de vidros é um processo que enfrenta desafios significativos, impactando a eficiência e a qualidade final da fabricação desses produtos. Um dos principais problemas é o desgaste dos rebolos abrasivos, que afeta a qualidade do acabamento e a precisão das peças de vidro. À medida que os rebolos se desgastam, sua eficácia e performance diminui, resultando em superfícies defeituosas e maior necessidade de retrabalho. Além disso, o vidro, sendo um material duro e frágil, é suscetível a defeitos como trincas e lascas, aumentando os custos e o desperdício.`,
      `
        A ausência de uma metodologia padronizada e de equipamentos específicos para avaliar o desgaste dos rebolos limita o avanço de novos materiais abrasivos e técnicas de retificação. Para superar esses desafios, o Laboratório de Tecnologia em Atrito e Desgaste da Universidade Federal de Uberlândia com apoio da EMBRAPII está desenvolvendo um projeto inovador que permitirá avaliar a eficiência dos rebolos, além de desenvolver uma metodologia para avaliação da eficácia dos materiais de rebolos e o desenvolvimento e aprimoramento de novos materiais no processo de retificação tangencial de vidros. Para essa finalidade, um tribômetro foi concebido e está em desenvolvimento, com o objetivo de simular condições reais de operação. 
        `,
      `A primeira versão do tribômetro foi projetada seguindo normas de segurança, com uma metodologia que permite ensaios acelerados de desgaste dos rebolos. Este equipamento fornecerá dados detalhados sobre o comportamento dos rebolos sob diferentes cargas e velocidades. Com essas informações, será possível desenvolver rebolos mais duráveis e eficientes, além de otimizar os parâmetros de retificação para minimizar o desgaste e melhorar a qualidade do acabamento`,
      `
        A implementação de tecnologias avançadas de monitoramento e controle, aliada à pesquisa de novos materiais abrasivos e tipos de ligantes, é essencial para melhorar a eficiência e a qualidade da retificação de vidros. Com a abordagem correta, é possível alcançar resultados consistentes e de alta qualidade, atendendo às exigências rigorosas de diversas indústrias. Este projeto não apenas contribui para a inovação no setor de fabricação de rebolos de retificação de vidros, mas também fortalece a competitividade das empresas nacionais.`,
      `Nosso projeto visa desenvolver soluções que atendam às necessidades das indústrias nacionais, promovendo a pesquisa e o desenvolvimento de tecnologias avançadas. Com melhorias contínuas, nosso time trabalha em estreita colaboração com o cliente, garantindo responsabilidade e dedicação em todas as etapas, mantendo o padrão de qualidade para a entrega dos resultados que não apenas atendem, mas superam as expectativas, com foco no fortalecimento das empresas no Brasil.`,
    ],

    status: "Ativo",
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Janeiro de 2024",
    palavrasChaves: [
      `Retificação Tangencial de Vidros;`,
      `Desgaste dos Rebolos;`,
      `Materiais Abrasivos;`,
      ` Tribômetros;`,
      `Inovação Industrial.`,
    ],
    listaDeProposta: [
      `O projeto visa melhorar a eficiência e a qualidade dos rebolos utilizados na retificação tangencial de vidros, resultando em produtos de maior qualidade.`,
      `Com o uso do tribômetro, é possível desenvolver rebolos que tenham maior durabilidade e eficiência. `,
      `O desenvolvimento de novas metodologias e materiais contribui para a inovação no setor de fabricação de rebolos de retificação de vidros.`,
      `Ao minimizar defeitos como trincas e lascas no vidro, o projeto contribui para a redução de custos e desperdício na indústria. `,
      `O projeto fortalece a competitividade das empresas nacionais ao promover tecnologias avançadas de fabricação.`,
      `Promove a pesquisa e o desenvolvimento de novas tecnologias, atendendo às necessidades das indústrias nacionais.`,
    ],
  },
  //Projeto - MFLD
  {
    id: 4,
    prefixo: "MFLD",
    coordenador: "Prof. Dr. Luiz Eduardo dos Santos Paes",
    contato:"https://femec.ufu.br/pessoas/docentes/luiz-eduardo-dos-santos-paes",
    link:"",
    titulo:
      "Desenvolvimento de Metodologia para Avaliação da Fadiga Em Alta temperatura em Corpos de Prova Vazados (Hollow Specimens) sob Condição de Fragilização por Hidrogênio Gasoso",
    descricao: [
      `A mudança da matriz energética para o hidrogênio como fonte de energia representa um passo importante na transição para um modelo sustentável e de baixo carbono. O hidrogênio tem o potencial de substituir combustíveis fósseis em diversas aplicações, desde o setor de transportes até a produção de energia, sendo uma alternativa limpa, com a única emissão sendo água após sua combustão.`,
      `
         No entanto, a utilização do hidrogênio como fonte de energia traz desafios, principalmente em relação às possíveis alterações que podem trazer nas propriedades mecânicas dos metais e suas ligas. Um dos fenômenos mais estudados é a fragilização por hidrogênio, que ocorre quando átomos de hidrogênio penetram na estrutura cristalina dos metais, podendo reduzir a ductilidade e a resistência à fratura dos componentes e estruturas de engenharia, como por exemplo os componentes de alta pressão. 
          `,
      `Assim, este trabalho de pesquisa propõe o desenvolvimento e adaptação de metodologias de ensaios que permitam avaliar os efeitos do hidrogênio gasoso, sem o uso de infraestruturas laboratoriais muito complexas e de elevado custo financeiro, como por exemplo o uso de vasos de pressão, para uma análise abrangente e detalhada do efeito do hidrogênio gasoso na vida em fadiga em meio hidrogenado, considerando as temperaturas de 25 e 200  C.`,
    ],
    palavrasChaves: [
      `Fragilização por Hidrogênio;`,
      `Hidrogênio gasoso;`,
      `Materiais Abrasivos;`,
      ` Corpo de Prova Vazado (Hollow Specimen);`,
      `Vida em Fadiga;`,
    ],
    status: "Ativo",
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Novembro 2023",
    listaDeProposta: [
      `Obtenção de metodologia para análise do efeito do Hidrogênio gasoso na vida em fadiga em alta temperatura;`,
      `Avaliação da sinergia entre fadiga, hidrogênio e altas temperaturas;`,
      `Benefícios para a Indústria de transporte e produção de energia;`,
    ],
  },
  //Projeto - Technip
  {
    id: 5,
    prefixo: "Technip",
    coordenador: "Prof. Dr. Ing- Sinésio Domingues Franco",
    contato:"https://femec.ufu.br/pessoas/docentes/sinesio-domingues-franco",
    titulo:
      "Validação De Metodologias Para a Avaliação De Propriedades Mecânicas de Materiais Para a Indústria de Óleo e Gás Utilizando Amostras Miniatura",
    descricao: [
      `Os testes mecânicos convencionais requerem um volume relativamente grande de material a ser testado e, extraí-lo do componente em operação pode prejudicar sua integridade.`,
      `Nessas situações, os ensaios mecânicos baseados em técnicas de ensaio em amostras miniaturizadas se apresentam como soluções eficientes para caracterizar as propriedades mecânicas dos componentes.`,
      `No conjunto de "mini testes" se enquadram, por exemplo, o "mini Charpy", o ensaio de indentação instrumentada, o ensaio de tração em corpos de prova miniaturizados e o ensaio de puncionamento esférico, conhecido como Small Punch Test (SPT), dentre outros.`,
      `Este projeto tem como objetivo a validação de metodologias de ensaios mecânicos miniaturizados para a avaliação de propriedades mecânicas de materiais forjados e fabricados por manufatura aditiva para a indústria de óleo e gás. `,
    ],
    palavrasChaves: [
      `Corpos de prova miniaturizados;`,
      `Small punch test;`,
      `Indentação instrumentada;`,
      `Fragilização por hidrogênio;`,
      `Manufatura aditiva.;`,
    ],
    status: "Ativo",
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Outubro de 2023",
    listaDeProposta: [
      `Aplicação de ensaios mecânicos em corpos de prova miniaturizados para medição de propriedades mecânicas de materiais fabricados por manufatura aditiva;`,
      `Avaliação da susceptibilidade à fragilização por hidrogênio de aços baixa liga;`,
      `Aplicação da indentação esférica instrumentada para controle de qualidade de fixadores;`,
      `Redução de custos.`,
    ],
  },
//Projeto - LZ
  {
    id: 6,
    prefixo: "LZ",
    coordenador:"Prof. Dr. Leonardo Rosa Ribeiro da Silva",
    contato:"https://www.femec.ufu.br/pessoas/docentes/leonardo-rosa-ribeiro-da-silva",
    titulo:
      "Desenvolvimento de uma Metodologia para Avaliação da Influência do Hidrogênio no Tribossistema Cilindro/Anel",
    descricao: [
      `O hidrogênio como combustível oferece benefícios como baixa emissão de poluentes, produção sustentável a partir de fontes renováveis e alta densidade energética, além de ser versátil para uso em células de combustível e motores de combustão.`,
      ` Contudo, sua alta reatividade pode comprometer a vida útil dos materiais do motor, causando fragilização e desgaste acelerado de componentes como pistões e válvulas. Isso exige o desenvolvimento de materiais mais resistentes e tecnologias avançadas, aumentando os custos de fabricação e manutenção.`,
      ` Considerando esses fatores, é essencial avaliar o comportamento tribológico dos materiais que compõem o sistema bloco/anel na câmara de combustão interna de veículos. Essa análise deve levar em conta não apenas o movimento relativo entre um corpo e seu contra-corpo, mas também a exposição ao hidrogênio nas diversas condições de operação do motor.`,
      `Com isso, o projeto visa desenvolver e validar uma metodologia robusta para a avaliação da influência do hidrogênio no comportamento tribológico de superfícies, capaz de quantificar e qualificar o impacto da fragilização por hidrogênio na resistência ao desgaste.`,
     `O foco principal deste projeto é a criação e validação de uma metodologia robusta e precisa que permita avaliar a influência do hidrogênio no tribossistema cilindro/anel de motores a combustão interna. Com esta metodologia, pretende-se estabelecer um entendimento científico sólido do impacto do hidrogênio como agente fragilizante, contribuindo para uma compreensão mais abrangente de como o hidrogênio influencia a eficiência dos processos de sistemas combustão interna (bloco/anel)`
    ],
    palavrasChaves: [
      `Difusão de Hidrogênio;`,
      `Ferro fundido;`,
      `Sistema Bloco/anel;`,
      `Tribologia com hidrogênio;`,
      `Manufatura aditiva.;`,
    ],
    status: "Ativo",
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Novembro de 2023",
    listaDeProposta: [
      `Entendimento Aprofundado do Efeito do Hidrogênio em sistemas bloco/anel;`,
      `Avaliação de Desempenho Tribológico com influencia do Hidrogênio`,
      `Contribuição para a Indústria Automotiva.`,
     
    ],
  },
//Projeto - GBMX III
  {
    id: 7,
    prefixo: "GMBX III",
    coordenador: "Profa. Dra. Regina Paula Garcia Moura",
    contato:"https://www.femec.ufu.br/pessoas/docentes/regina-paula-garcia-santos",
    titulo:
      " DESENVOLVIMENTO DE MATERIAL PARA VAGÕES DE MINÉRIO DE FERRO ",
    descricao: [
      `O transporte ferroviário de minérios, em particular o de minério de ferro, enfrenta desafios relevantes devido ao desgaste abrasivo e corrosivo. A abrasividade do minério causa deterioração nas superfícies dos vagões, enquanto a umidade e a chuva favorecem processos corrosivos, acelerando a degradação do material. Esse desgaste não só impacta a integridade estrutural dos vagões, mas também pode comprometer a segurança operacional e a eficiência do transporte, resultando em um aumento na necessidade de intervenções corretivas.`,
      `Uma solução simples seria utilizar espessuras maiores para prolongar o tempo de operação dos vagões. No entanto, isso resulta em um aumento do peso do vagão, o que, por sua vez, pode comprometer a eficiência no volume transportado e aumentar os custos operacionais. Essa abordagem precisa ser equilibrada com a necessidade de manter a eficiência do transporte e a viabilidade econômica. `,
      `Portanto, o desenvolvimento estratégico de materiais otimizados para vagões de minério de ferro visa promover uma melhoria significativa na eficiência operacional no setor, contribuindo para uma logística mais eficiente e econômica. `,
     
    ],
    palavrasChaves: [
      `Corrosão-abrasão;`,
      `Transporte de minério de ferro;`,
      `Aços inoxidáveis ;`,
      `Vagões para minério.`
      ,
    ],
    status: "Ativo",
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Agosto de 2024",
    listaDeProposta: [
      `Aumento da vida útil dos vagões;`,
      `Redução dos custos de manutenção;`,
      `Aumento da capacidade de transporte pela redução do peso próprio do vagão; `,
      `Desenvolvimento de materiais mais resistentes à corrosão-abrasão;`,
      `Sustentabilidade.`,
     
    ],
  },
//Projeto - BPL
  {
    id: 8,
    prefixo: "BPL",
    coordenador:"Prof. Dr. Leonardo Rosa Ribeiro da Silva",
    contato:"https://www.femec.ufu.br/pessoas/docentes/leonardo-rosa-ribeiro-da-silva",
    titulo:
      "Quantificação de perda de aperto em juntas flangeadas sob vibração",
    descricao: [
      `A indústria do petróleo utiliza uma variedade extensa de equipamentos mecânicos e estruturais que estão sujeitos a vibrações constantes, como bombas, compressores, geradores, turbinas, estruturas submetidas a carregamentos alternados naturais e tubulações afetadas por vibrações induzidas por fluxo. Essas vibrações podem levar à perda de pré-carga em conexões feitas através de estojos e porcas, resultando em falhas estruturais ou funcionais.`,
      `Embora normas de montagem estabeleçam valores seguros de pré-carga e limites máximos de vibração, é crucial compreender a dinâmica do afrouxamento dessas conexões em relação a variáveis como pré-carga inicial, propriedades do material, geometria dos estojos e amplitude de vibração, a fim de identificar cenários críticos e priorizar inspeções onde a vibração é inevitável.`,
      `Apesar de existirem na literatura equações que descrevem o afrouxamento de conexões aparafusadas sob cargas de cisalhamento, reconhece-se que cargas axiais também contribuem para o fenômeno de autoafrouxamento. Portanto, há a necessidade de desenvolver uma metodologia abrangente que quantifique a perda de pré-carga em estojos considerando todas as variáveis pertinentes. A proposta envolve a realização de uma matriz completa de ensaios experimentais para medir a perda de pré-carga ao longo de ciclos de variações de tensões axiais, contemplando diferentes materiais, geometrias, pré-cargas iniciais e amplitudes de vibração. Além disso, modelos de elementos finitos serão utilizados para simular e validar os ensaios, e equações analíticas serão desenvolvidas para prever a perda de pré-carga, permitindo uma correlação entre os resultados numéricos, analíticos e experimentais.`,
      `Em síntese, o desenvolvimento dessa metodologia permitirá uma compreensão aprofundada do comportamento de perda de pré-carga em estojos sob condições de vibração, contribuindo para a identificação de cenários mais críticos e auxiliando na priorização de inspeções e manutenções preventivas.`,
      `A integração dos resultados experimentais, numéricos e analíticos resultará em uma ferramenta valiosa para a indústria do petróleo, melhorando a confiabilidade e a segurança dos equipamentos. Assim, será possível minimizar os riscos associados ao afrouxamento de conexões e prevenir falhas estruturais ou funcionais que podem ter consequências significativas em termos operacionais e de segurança.`
    ],
    palavrasChaves: [
      `Autoafrouxamento de parafusos;`,
      `Vibração axial;`,
      `Métodos dos elementos finitos.`
      ,
    ],
    status: "Ativo",
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Abril de 2024",
    listaDeProposta: [
      `Estudo numérico/analítico/experimental para desenvolvimento de metodologia capaz de quantificar a perda de pré-carga de estojos sob cargas de vibração em função da pré-carga, das propriedades do material, da geometria dos estojos e da amplitude de vibração.`,
  
     
    ],
  },
  //Projeto Anperam 2
  {
    id: 9,
    prefixo: "APERAM II",
    coordenador: "Prof. Dr. Ing- Sinésio Domingues Franco",
    contato:"https://femec.ufu.br/pessoas/docentes/sinesio-domingues-franco",
    titulo:
      "valiação do Comportamento à Fadiga de Juntas Soldadas em Aços Estruturais Para a Aplicação em Componentes Automotivos",
    descricao: [
      `O projeto tem como objetivo avaliar o comportamento à fadiga dos aços estruturais em diferentes condições de solda. Para tanto, será avaliada a vida à fadiga em diferentes níveis de tensão (curva S-N) e o crescimento da trinca nos diferentes estágios de propagação (curvas da/dN versus ΔK) para validação de aplicação em componentes automotivos. `,
      `Os inoxidáveis têm se tornando uma alternativa interessante para as aplicações no setor de transporte de bens devido às suas excelentes propriedades mecânicas e resistência a ambientes corrosivos (LILJAS; ERICSSON; JOHANSSON, 2002). A aplicação desses aços na indústria requer, na maioria dos casos, a utilização de processos de união de chapas, sendo o mais comum a soldagem. O processo GMAW (do inglês Gas Metal Arc Welding) ou MIG/MAG (do inglês Metal Inerte Gas/Metal Active Gas) possuem ampla aplicação nos diferentes segmentos industriais, por sua versatilidade, produtividade, facilidade de uso, entre outras vantagens. Comumente as estruturas e componentes mecânicos estão sujeitos a carregamentos repetitivos, que se não estiverem corretamente dimensionados, estes podem falhar pelo fenômeno de fadiga.`,
      `Com a realização dos ensaios nos diferentes materiais e condições de soldagem, será possível avaliar a vida à fadiga das juntas soldadas em função da tensão (gráficos S-N) e determinar a taxa de propagação de trinca, nos diferentes estágios, por meio da construção dos gráficos da/dN versus ΔK. Posteriormente, uma análise, em especial da região de nucleação da trinca, será realizada de forma a comparar os diferentes materiais, condições de soldagem e a resistência dos mesmos à nucleação e propagação da trinca. Uma avaliação fractográfica via Microscopia Eletrônica de Varredura (MEV) associada à técnica de Electron Backscatter Diffraction (EBSD) ajudará a elucidar os resultados encontrados.`,
     
    ],
    palavrasChaves: [
      `Vida à fadiga;`,
      `Taxa de propagação de trinca;`,
      `MIG/MAG.`,
      `Aços estruturais.`
      ,
    ],
    status: "Ativo",
    TRL: "6",
    CRL: "4",
    agencia: "Embrapii",
    prazo: "Julho de 2023",
    listaDeProposta: [
      `A pesquisa fornece uma base técnica para a aplicação de aços inoxidáveis no setor automotivo e de transporte de bens, destacando suas propriedades de resistência à fadiga;`,
      `A análise de diferentes condições de solda no processo MIG/MAG, oferece insights sobre quais condições de solda proporcionam maior resistência à fadiga, permitindo escolhas mais adequadas para aplicações industriais;`,
      `O uso de técnicas avançadas, como Microscopia Eletrônica de Varredura (MEV) e Electron Backscatter Diffraction (EBSD), proporciona uma análise detalhada das microestruturas, auxiliando no entendimento dos mecanismos de nucleação e propagação de trincas;`,
      `Com o aumento da vida útil dos componentes e a redução de falhas, o projeto tem o potencial de diminuir custos de manutenção e substituição de peças nas indústrias automotiva e de transporte;`,
      `Embora focado no setor automotivo, o estudo pode ser útil para outros setores industriais que utilizam componentes sujeitos a condições de fadiga, como na construção civil e na fabricação de equipamentos pesados.`,
  
     
    ],
  },



];
export default projects;
