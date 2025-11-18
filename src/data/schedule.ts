export interface Event {
  time: string;
  title: string;
  type: string;
  organization: string;
  location: string;
  description: string;
  duration: string;
}

export const schedule: Event[] = [
  {
    time: '9h – 10h',
    title: 'Abertura do Showcase e apresentação das ligas acadêmicas do CIn',
    type: 'abertura',
    organization: 'Todas as ligas',
    location: 'Anfiteatro',
    description: 'Abertura oficial do evento CInLiga com apresentação de todas as ligas acadêmicas do Centro de Informática. Momento de boas-vindas e introdução às atividades do dia.',
    duration: '1h'
  },
  {
    time: '10h – 11h',
    title: 'Do sensor à IA: como desenvolver aprendizado de máquina em Sistemas Embarcados',
    type: 'minicurso',
    organization: 'LASER',
    location: 'Laboratório de Hardware',
    description: 'A atividade visa introduzir e aplicar o desenvolvimento de modelos de inteligência artificial em dispositivos de hardware limitado, abordando técnicas específicas de IA para plataformas restritas, abrangendo desde redes neurais rasas até estratégias avançadas de otimização e implantação desses algoritmos embarcados. Com foco em ensinar e incentivar o uso de inteligência artificial em dispositivos edge, promovendo práticas sustentáveis e fomentando o desenvolvimento socioeconômico.',
    duration: '120 min'
  },
  {
    time: '10h – 11h',
    title: 'LLMs com sotaque: customize seu ChatGPT',
    type: 'workshop',
    organization: 'LIGIA',
    location: 'Laboratório de Graduação 1',
    description: 'Um workshop introdutório sobre Fine-Tuning de grandes modelos de linguagem. Vamos explorar os fundamentos teóricos, o ecossistema de ferramentas e realizar um experimento prático para entender como customizar um modelo pré-treinado a um domínio ou estilo específico.',
    duration: '1h'
  },
  {
    time: '11h – 12h',
    title: 'O futuro da aprendizagem de máquina: Clássico X Quântico',
    type: 'palestra',
    organization: 'LACIQ',
    location: 'Anfiteatro',
    description: 'Como Machine Learning Quântica se diferencia da Clássica? Quais suas vantagens e desvantagens, seus paradigmas e principais implementações? Qual o atual estado da arte de QML?',
    duration: '45 min'
  },
  {
    time: '11h – 12h',
    title: 'Por trás do Login: Entendendo autenticação e sessões em sistemas modernos',
    type: 'workshop',
    organization: 'SEAL',
    location: 'Laboratório de Graduação 1',
    description: 'O que acontece quando você clica em "Entrar"? Nesta atividade, vamos desvendar como sistemas modernos identificam e validam usuários, explorando sessões, tokens e JWT de forma leve e prática. Mesmo sem conhecimento prévio, você vai decodificar um token real, participar de um mini-jogo que simula o fluxo de autenticação e testar seus conhecimentos em um quiz interativo sobre segurança e identidade digital.',
    duration: '1h'
  },
  {
    time: '11h – 12h',
    title: 'Apresentação das principais categorias de robótica autônoma desenvolvidas pelo RobôCIn',
    type: 'palestra',
    organization: 'RobôCIn',
    location: 'Laboratório do RobôCIn',
    description: 'Apresentação das principais categorias de robótica autônoma desenvolvidas pelo RobôCIn: Small Size League, Soccer Simulation 2D, Humanoid League e Flying Robots. A atividade contará com demonstrações ao vivo e banners explicativos no formato de conferências científicas, com o objetivo de ilustrar o funcionamento, as metodologias e as áreas de pesquisa de cada equipe integrante do grupo.',
    duration: '1h'
  },
  {
    time: '13h – 14h',
    title: 'Sua carreira em Software é mais do que um sistema Web',
    type: 'palestra',
    organization: 'SEAL',
    location: 'Anfiteatro',
    description: 'Você acha que Engenharia de Software se resume a desenvolver o próximo aplicativo ou trabalhar em consultorias? Nesta conversa, vamos mostrar que o universo da ES é muito mais vasto e desafiador. Venha descobrir as linhas de pesquisa de ponta que movem a Engenharia de Software aqui no CIn. Passaremos por temas como arquitetura, testes de software, DevOps e gestão, mostrando projetos reais e o impacto gerado por nossos alunos e professores. Participe e veja como você pode ajudar a construir o futuro da tecnologia.',
    duration: '50 min'
  },
  {
    time: '13h – 14h',
    title: 'Do lixo ao luxo: Limpe dados numa ETL PySpark + AWS',
    type: 'workshop',
    organization: 'LED',
    location: 'Laboratório de Graduação 1',
    description: 'Neste workshop você aprenderá a construir uma pipeline de dados moderna e 100% serverless na nuvem da AWS. Focaremos na capacidade de transformação do PySpark, o padrão da indústria para processamento de Big Data, vamos manipular dados brutos em informações prontas para análise, sem a necessidade de gerenciar servidores.',
    duration: '50 min'
  },
  {
    time: '14h – 15h',
    title: 'Quantum Play Express: Explore Qiskit de forma gamificada',
    type: 'oficina',
    organization: 'LACIQ',
    location: 'Laboratório de Graduação 1',
    description: 'Oficina gamificada de Qiskit para:\n• Entender os conceitos essenciais (qubit, superposição, emaranhamento)\n• Construir e simular circuitos quânticos básicos usando o Aer Simulator do Qiskit\n• Experimentar um algoritmo simples (ex.: geração de bits aleatórios via superposição)\n• Discutir brevemente implicações para games — como fontes de aleatoriedade quântica',
    duration: '1h'
  },
  {
    time: '14h – 15h',
    title: 'Como as IAs aprendem a ver: dos pixels às palavras',
    type: 'palestra',
    organization: 'LIGIA',
    location: 'Anfiteatro',
    description: 'Uma introdução ao universo dos VLMs (Visual Language Models), IAs Multimodais. Nesta palestra, vamos explorar como os modelos de linguagem passaram a compreender imagens, gráficos e vídeos. Você vai conhecer os fundamentos por trás dos Vision Transformers, entender o papel do Contrastive Learning e descobrir como essas técnicas conectam visão e linguagem para permitir que as IAs percebam o mundo de forma mais próxima à humana.',
    duration: '1h'
  },
  {
    time: '14h – 15h',
    title: 'Apresentação das principais categorias de robótica autônoma desenvolvidas pelo RobôCIn',
    type: 'palestra',
    organization: 'RobôCIn',
    location: 'Laboratório do RobôCIn',
    description: 'Apresentação das principais categorias de robótica autônoma desenvolvidas pelo RobôCIn: Small Size League, Soccer Simulation 2D, Humanoid League e Flying Robots. A atividade contará com demonstrações ao vivo e banners explicativos no formato de conferências científicas, com o objetivo de ilustrar o funcionamento, as metodologias e as áreas de pesquisa de cada equipe integrante do grupo.',
    duration: '1h'
  },
  {
    time: '15h – 16h',
    title: 'Uma segunda comum para um engenheiro de dados: Desvendando pipelines na AWS',
    type: 'palestra',
    organization: 'LED',
    location: 'Anfiteatro',
    description: 'Quer crescer na tão sonhada área de dados e ainda não sabe muito por onde começar? Talvez a sua virada de chave esteja aqui! Venha descobrir na prática como se constrói no PostgreSQL e no Redis, dois gigantes com propósitos diferentes. Vamos montar um pipeline de dados na AWS e desvendar vários conceitos relevantes em SQL e NoSQL. Se quer parar de só ler sobre o assunto e começar a fazer, essa é a sua chance! Mostraremos como a experiência prática nessas ferramentas é o que te coloca na frente.',
    duration: '50 min'
  },
  {
    time: '16h – 17h',
    title: 'Microprocessadores: O coração e o cérebro dos Sistemas Embarcados',
    type: 'palestra',
    organization: 'LASER',
    location: 'Anfiteatro',
    description: 'Nesta palestra da LASER, vamos explorar os conceitos fundamentais de microprocessadores e arquitetura de computadores no contexto de sistemas embarcados. Serão abordados tópicos como a evolução das tecnologias, organização e arquitetura dos microprocessadores e microcontroladores, desempenho versus aplicabilidade e princípios básicos que permitem entender como esses dispositivos controlam sistemas inteligentes no dia a dia.',
    duration: '50 min'
  },
  {
    time: '16h – 17h',
    title: 'Engenharia reversa em Android: análise, patching e defesa',
    type: 'workshop',
    organization: 'LSEC',
    location: 'Laboratório de Graduação 1',
    description: 'Demonstração prática de um fluxo de exploração de vulnerabilidade em APK. A palestra explora os pilares de um APK, como o manifesto android e o fluxo de compilação de Java para bytecode Dalvik (.dex). Os participantes entenderão os componentes essenciais de um app, como Activities e Intents, estabelecendo a base teórica necessária para qualquer análise. Além de abordar estratégias que os desenvolvedores usam para impedir esse tipo de exploração (como obfuscação de código).',
    duration: '1h'
  }
];
