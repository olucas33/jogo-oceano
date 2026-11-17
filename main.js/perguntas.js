export const perguntas = [
  {
    caminho: "inicio",
    enunciado:
      "Você e seus amigos querem aproveitar a praia, mas encontram o mar cheio de lixo. Como os Guardiões do Oceano podem começar a proteger esse lugar?",
    alternativas: [
      {
        texto: "Observar a praia, conversar com moradores e descobrir quais tipos de poluição mais afetam o local.",
        afirmacao: ["Investigou o problema antes de escolher como proteger o oceano."],
        tipo: "entrada",
        proxima: 1,
      },
      {
        texto: "Recolher qualquer resíduo sem cuidado, inclusive objetos cortantes ou produtos desconhecidos.",
        afirmacao: ["Agiu sem avaliar os riscos e colocou a equipe em perigo."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A equipe encontrou resíduos perigosos e poderia se machucar. Antes de agir, é importante avaliar o local e pedir ajuda para lidar com materiais desconhecidos. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "As conversas mostram que há lixo na areia e resíduos chegando ao mar pelos bueiros. Como descobrir onde a ação dos Guardiões será mais necessária?",
    alternativas: [
      {
        texto: "Mapear os pontos com mais resíduos e registrar que tipos de lixo aparecem em cada lugar.",
        afirmacao: ["Observou e registrou o problema para orientar a ação."],
        tipo: "avancar",
        proxima: 3,
      },
      {
        texto: "Fazer uma pequena observação em diferentes horários e comparar o que encontra.",
        afirmacao: ["Testou a observação em momentos diferentes antes de decidir."],
        tipo: "salto",
        proxima: 4,
      },
      {
        texto: "Escolher um local ao acaso e afirmar que ele é o mais poluído sem verificar.",
        afirmacao: ["Tomou uma decisão sem observar nem confirmar o problema."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Sem verificar os locais, a equipe não soube onde sua ajuda faria mais diferença. Observar e registrar o problema ajuda a planejar uma ação segura e eficaz. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "Alguns moradores contam que o lixo se acumula perto de um riacho que deságua no mar. Como os Guardiões podem entender melhor o que acontece?",
    alternativas: [
      {
        texto: "Conversar com moradores e especialistas para identificar de onde vêm os resíduos.",
        afirmacao: ["Ouviu a comunidade e buscou compreender as causas da poluição."],
        tipo: "avancar",
        proxima: 7,
      },
      {
        texto: "Convidar a comunidade para observar o riacho de um local seguro e compartilhar descobertas.",
        afirmacao: ["Envolveu a comunidade na observação segura do problema."],
        tipo: "salto",
        proxima: 8,
      },
      {
        texto: "Entrar no riacho poluído para retirar resíduos sem equipamento ou orientação.",
        afirmacao: ["Ignorou os riscos e colocou a saúde da equipe em perigo."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A água pode conter materiais e substâncias perigosas. Não entre em áreas contaminadas: procure um adulto responsável e os serviços apropriados. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Seu mapa mostra que há muitos resíduos perto das lixeiras e na faixa de areia. Como decidir por onde começar?",
    alternativas: [
      {
        texto: "Priorizar um trecho seguro, combinar uma coleta orientada e separar os resíduos encontrados.",
        afirmacao: ["Usou as observações para planejar uma ação segura e organizada."],
        tipo: "avancar",
        proxima: 4,
      },
      {
        texto: "Conferir novamente os pontos do mapa com a equipe antes de definir a área da ação.",
        afirmacao: ["Revisou as observações para tomar uma decisão mais informada."],
        tipo: "salto",
        proxima: 1,
      },
      {
        texto: "Tentar limpar toda a praia de uma vez, sem equipe, materiais ou avaliação de segurança.",
        afirmacao: ["Ignorou os limites e os cuidados necessários para a ação."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A equipe ficou sobrecarregada e se expôs a riscos. Uma ação menor, segura e bem organizada pode fazer diferença e servir de exemplo. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "A equipe escolheu um trecho seguro para a limpeza. O que deve preparar antes de começar a recolher os resíduos?",
    alternativas: [
      {
        texto: "Combinar tarefas, usar luvas e ferramentas adequadas e não tocar em objetos perigosos.",
        afirmacao: ["Preparou a equipe e priorizou a segurança durante a coleta."],
        tipo: "avancar",
        proxima: 5,
      },
      {
        texto: "Fazer uma coleta curta, registrar o que foi encontrado e avaliar como melhorar.",
        afirmacao: ["Planejou uma ação pequena e aprendeu com os resultados."],
        tipo: "salto",
        proxima: 6,
      },
      {
        texto: "Recolher tudo com as mãos e misturar resíduos comuns com objetos desconhecidos.",
        afirmacao: ["Ignorou os cuidados e o descarte correto dos resíduos."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Alguns resíduos podem causar ferimentos ou exigir descarte especial. Não toque em objetos perigosos e peça orientação a um adulto ou serviço responsável. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Na primeira ação, vocês encontraram muitas embalagens descartáveis e ouviram ideias para reduzir o lixo. Como dar continuidade à missão?",
    alternativas: [
      {
        texto: "Compartilhar dicas para reduzir descartáveis e combinar com a comunidade uma próxima ação.",
        afirmacao: ["Transformou as descobertas em prevenção e mobilização da comunidade."],
        tipo: "avancar",
        proxima: 6,
      },
      {
        texto: "Perguntar à comunidade quais mudanças e ações seriam mais úteis para o local.",
        afirmacao: ["Ouviu a comunidade antes de escolher os próximos passos."],
        tipo: "salto",
        proxima: 3,
      },
      {
        texto: "Prometer que a equipe vai acabar com toda a poluição sem mudar hábitos nem pedir apoio.",
        afirmacao: ["Fez promessas impossíveis e ignorou as causas do problema."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Uma única ação não elimina toda a poluição. Prevenir o descarte incorreto e trabalhar junto com a comunidade são passos importantes para proteger o mar. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Os Guardiões vão organizar uma nova atividade de conscientização e limpeza. O que precisam planejar antes?",
    alternativas: [
      {
        texto: "Definir local seguro, materiais, tarefas, destino dos resíduos e autorização dos responsáveis.",
        afirmacao: ["Planejou a ação, a segurança e o descarte adequado dos resíduos."],
        tipo: "avancar",
        proxima: 11,
      },
      {
        texto: "Revisar as orientações de segurança e confirmar como os resíduos serão destinados.",
        afirmacao: ["Conferiu os cuidados e o destino dos resíduos antes de agir."],
        tipo: "salto",
        proxima: 5,
      },
      {
        texto: "Começar sem autorização, sem combinar tarefas e sem saber para onde levar o lixo.",
        afirmacao: ["Começou sem planejamento e sem verificar os cuidados necessários."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Sem planejamento, os resíduos podem acabar no lugar errado e a equipe pode se expor a riscos. Combine a ação com os responsáveis e organize o descarte antes de começar. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "Além da limpeza, os Guardiões querem reduzir a poluição que chega ao mar pelo riacho. Como descobrir quem pode ajudar e quais soluções já existem?",
    alternativas: [
      {
        texto: "Pesquisar iniciativas locais e conversar com a comunidade e os serviços responsáveis.",
        afirmacao: ["Conheceu iniciativas existentes e buscou parceiros para agir."],
        tipo: "avancar",
        proxima: 8,
      },
      {
        texto: "Voltar a conversar com moradores para entender melhor a origem dos resíduos.",
        afirmacao: ["Aprofundou a investigação das causas com quem conhece o local."],
        tipo: "salto",
        proxima: 2,
      },
      {
        texto: "Acusar alguém de poluir sem provas e divulgar seu nome nas redes sociais.",
        afirmacao: ["Fez uma acusação sem evidências e agiu sem responsabilidade."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Acusações sem provas podem prejudicar pessoas e não resolvem o problema. Reúna informações com responsabilidade e procure os canais apropriados. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "A comunidade quer participar, mas ainda não sabe como ajudar. Como os Guardiões podem divulgar a ação?",
    alternativas: [
      {
        texto: "Criar um convite claro com local, horário, cuidados de segurança e contato dos responsáveis.",
        afirmacao: ["Divulgou informações claras e responsáveis para a comunidade."],
        tipo: "avancar",
        proxima: 9,
      },
      {
        texto: "Apresentar o plano a um pequeno grupo e pedir sugestões antes de convidar mais pessoas.",
        afirmacao: ["Testou o plano com a comunidade e usou sugestões para melhorá-lo."],
        tipo: "salto",
        proxima: 10,
      },
      {
        texto: "Publicar um convite sem informar os riscos ou inventar resultados para atrair participantes.",
        afirmacao: ["Divulgou informações enganosas e colocou os participantes em risco."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Informações incompletas podem colocar as pessoas em risco e prejudicar a confiança da comunidade. Divulgue cuidados e resultados verdadeiros. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "As pessoas perguntam como será a atividade e o que fazer se encontrarem resíduos perigosos. Como responder?",
    alternativas: [
      {
        texto: "Explicar os cuidados, orientar que ninguém toque em itens perigosos e indicar quem chamar.",
        afirmacao: ["Compartilhou orientações de segurança e canais para pedir ajuda."],
        tipo: "avancar",
        proxima: 10,
      },
      {
        texto: "Usar as dúvidas recebidas para completar o convite com instruções mais claras.",
        afirmacao: ["Aproveitou as dúvidas para melhorar a comunicação da ação."],
        tipo: "salto",
        proxima: 7,
      },
      {
        texto: "Ignorar as perguntas e dizer que qualquer resíduo pode ser recolhido sem risco.",
        afirmacao: ["Ignorou riscos importantes e deixou de orientar os participantes."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Nem todo resíduo é seguro para manusear. Oriente as pessoas a não tocar em materiais desconhecidos e a avisar os responsáveis. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "A missão dos Guardiões do Oceano será apresentada na escola e à comunidade. O que vocês devem mostrar?",
    alternativas: [
      {
        texto: "Explicar o problema observado, as ações realizadas, os cuidados e os resultados verdadeiros.",
        afirmacao: ["Apresentou o problema e os resultados reais das ações da equipe."],
        tipo: "avancar",
        proxima: 12,
      },
      {
        texto: "Ensaiar a apresentação e conferir os registros e as orientações de segurança.",
        afirmacao: ["Preparou a apresentação com registros confiáveis e cuidados importantes."],
        tipo: "salto",
        proxima: 9,
      },
      {
        texto: "Inventar números de resíduos recolhidos para impressionar o público.",
        afirmacao: ["Apresentou dados falsos e comprometeu a confiança na missão."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Dados inventados dificultam entender se as ações estão ajudando. Apresente o que vocês realmente observaram e aprenderam. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    final: "vitoria",
    enunciado:
      "Você e sua equipe mapearam o problema, organizaram uma ação segura e ajudaram a comunidade a reduzir o lixo que chega ao mar. Com cuidado e cooperação, os Guardiões do Oceano deram um importante passo para proteger a vida marinha. Missão cumprida: vocês venceram!",
    alternativas: [],
  },
  {
    caminho: "B",
    final: "vitoria",
    enunciado:
      "Você e sua equipe mobilizaram a comunidade, compartilharam orientações importantes e apresentaram os resultados reais da missão. Juntos, os Guardiões do Oceano mostraram que pequenas atitudes podem ajudar a proteger o mar da poluição. Missão cumprida: vocês venceram!",
    alternativas: [],
  },
];
