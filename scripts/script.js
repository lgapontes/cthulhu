
/* ----------------------------------------------------------- */

const PERICIAS = {
  'Antropologia': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Armas de Fogo': {
    minimo: 0,
    incomum: false,
    varias_individual: true,
    varias_unica: false,
    varias: {
      'Arcos': 15,
      'Armas Pesadas': 10,
      'Espingardas': 25,
      'Lança-Chamas': 10,
      'Metralhadoras': 10,
      'Pistolas': 20,
      'Rifles': 25,
      'Submetralhadoras': 15,
    },
    mythos: false,
  },

  'Arqueologia': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Arremessar': {
    minimo: 20,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Arte e Ofício': {
    minimo: 0,
    incomum: false,
    varias_individual: true,
    varias_unica: true,
    varias: {
      'Literatura': 5,
      'Atuação': 5,
      'Barbeiro': 5,
      'Cabeleireiro': 5,
      'Sapateiro': 5,
      'Carroceiro': 5,
      'Alfaiate': 5,
      'Engraxate': 5,
      'Caligrafa': 5,
      'Carpintaria': 5,
      'Cozinheiro': 5,
      'Dança': 5,
      'Belas artes': 5,
      'Falsificação': 5,
      'Escritor': 5,
      'Cantor': 5,
      'Pintor': 5,
      'Decorador': 5,
      'Fotografia': 5,
      'Oleiro': 5,
      'Escultor': 5,
      'Instrumento': 5,
      'Maestro': 5,
      'Desenho Técnico': 5,
      'Trabalhos de Fazenda': 5,
    },
    mythos: false,
  },

  'Artilharia': {
    minimo: 1,
    incomum: true,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Ciência': {
    minimo: 0,
    incomum: false,
    varias_individual: true,
    varias_unica: true,
    varias: {
      'Astronomia': 1,
      'Biologia': 1,
      'Botânica': 1,
      'Química': 1,
      'Engenharia': 1,
      'Geologia': 1,
      'Matemática': 1,
      'Meteorologia': 1,
      'Farmácia': 1,
      'Física': 1,
      'Zoologia': 1,
    },
    mythos: false,
  },

  'Avaliação': {
    minimo: 5,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Lutar': {
    minimo: 0,
    incomum: false,
    varias_individual: true,
    varias_unica: false,
    varias: {
      'Briga': 25,
      'Chicotes': 5,
      'Espadas': 20,
      'Garrote': 15,
      'Lanças': 20,
      'Machados': 15,
      'Manguais': 10,
      'Motosserras': 10,
    },
    mythos: false,
  },

  'Cavalgar': {
    minimo: 5,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Charme': {
    minimo: 15,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Chaveiro': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Conhecimento': {
    minimo: 0,
    incomum: true,
    moderna: false,
    varias_individual: true,
    varias_unica: true,
    varias: {
      'Conhecimento sobre Sonhos': 1,
      'Conhecimento do Necronomicon': 1,
      'Conhecimento Ufológico': 1,
      'Conhecimento sobre Vampiros': 1,
      'Conhecimento sobre Lobisomens': 1,
      'Conhecimento Yaddithiano': 1,
      'Conhecimento sobre os Mythos': 1,
      'Conhecimento sobre Hastur': 1,
      'Conhecimento sobre Nyarlathotep': 1,
      'Conhecimento sobre Zhar': 1,
      'Conhecimento sobre Lloigor': 1,
      'Conhecimento sobre Cyäegha': 1,
      'Conhecimento sobre Nyogtha': 1,
      'Conhecimento sobre Tsathoggua': 1,
      'Conhecimento sobre Aphoom-Zhah': 1,
      'Conhecimento sobre Cthugha': 1,
      'Conhecimento sobre Cthulhu': 1,
      'Conhecimento sobre Dagon': 1,
      'Conhecimento sobre Hydra': 1,
      'Conhecimento sobre Azathoth': 1,
      'Conhecimento sobre Nyctelios': 1,
      'Conhecimento sobre Shub-Niggurath': 1,
      'Conhecimento sobre Yog-Sothoth': 1,
      'Conhecimento sobre Yidhra': 1,
    },
    mythos: true,
  },

  'Consertos Elétricos': {
    minimo: 10,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Consertos Mecânicos': {
    minimo: 10,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Contabilidade': {
    minimo: 5,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Demolições': {
    minimo: 0,
    incomum: true,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Direito': {
    minimo: 5,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Dirigir Automóveis': {
    minimo: 20,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Disfarce': {
    minimo: 5,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Encontrar': {
    minimo: 25,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Escalar': {
    minimo: 20,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Escutar': {
    minimo: 20,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Esquivar': {
    minimo: 0,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Furtividade': {
    minimo: 20,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Hipnose': {
    minimo: 1,
    incomum: true,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'História': {
    minimo: 5,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Intimidação': {
    minimo: 15,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Lábia': {
    minimo: 5,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Leitura Labial': {
    minimo: 1,
    incomum: true,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Língua (Nativa)': {
    minimo: 0,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Língua (Outra)': {
    minimo: 0,
    incomum: false,
    varias_individual: true,
    varias_unica: true,
    varias: {
      'Mandarim': 1,
      'Espanhol': 1,
      'Português': 1,
      'Árabe': 1,
      'Hindi': 1,
      'Bengalês': 1,
      'Russo': 1,
      'Japonês': 1,
      'Alemão': 1,
      'Francês': 1,
      'Coreano': 1,
      'Latim': 1,
    },
    mythos: false,
  },

  'Medicina': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Mergulho': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Mundo Natural': {
    minimo: 10,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Mythos de Cthulhu': {
    minimo: 0,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: true,
  },

  'Natação': {
    minimo: 20,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Navegação': {
    minimo: 10,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Nível de Crédito': {
    minimo: 0,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Ocultismo': {
    minimo: 5,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Operar Maquinário Pesado': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Persuasão': {
    minimo: 10,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Pilotar': {
    minimo: 0,
    incomum: true,
    varias_individual: true,
    varias_unica: true,
    varias: {
      'Monomotor': 1,
      'Avião de Carga': 1,
      'Avião de Passageiros': 1,
      'Avião Militar': 1,
      'Dirigível': 1,
      'Balão de Passeio': 1,
    },
    mythos: false,
  },

  'Prestidigitação': {
    minimo: 10,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Primeiros Socorros': {
    minimo: 30,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Psicanálise': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Veterinária': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Ortopedista': {
    minimo: 1,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Psicologia': {
    minimo: 10,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Rastrear': {
    minimo: 10,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Saltar': {
    minimo: 20,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Sobrevivência': {
    minimo: 0,
    incomum: true,
    varias_individual: true,
    varias_unica: true,
    varias: {
      'Deserto': 10,
      'Mar': 10,
      'Ártico': 10,
      'Floresta': 10,
      'Pântano': 10,
      'Semiárido': 10,
    },
    mythos: false,
  },

  'Treinar Animais': {
    minimo: 5,
    incomum: true,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

  'Usar Bibliotecas': {
    minimo: 20,
    incomum: false,
    varias_individual: false,
    varias_unica: false,
    varias: {},
    mythos: false,
  },

};

const PERICIAS_INTERPESSOAIS = [
  'Charme',
  'Lábia',
  'Intimidação',
  'Persuasão',
];

const OCUPACOES = {
  'Advogado': {
    pericias: ['Contabilidade','Direito','Psicologia','Usar Bibliotecas'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 2,
    outras_pericias: 2,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 30,
    nivel_credito_maximo: 80,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Andarilho': {
    pericias: ['Escalar','Escutar','Furtividade','Navegação','Saltar'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 2,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 0,
    nivel_credito_maximo: 5,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2) + (atributos['Atributos']['APA (Aparência)']['Atributo'] * 2);

      let valor2 = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      if (valor2 > pontos) {
        pontos = valor2;
      }

      let valor3 = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);
      if (valor3 > pontos) {
        pontos = valor3;
      }

      return pontos;
    },
  },

  'Antiquário': {
    pericias: ['Arte e Ofício','Avaliação','Encontrar','História','Língua (Outra)','Usar Bibliotecas'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 1,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 30,
    nivel_credito_maximo: 70,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Artista': {
    pericias: ['Arte e Ofício','Encontrar','Língua (Outra)','Psicologia',],
    alternativas: ['História','Mundo Natural'],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 2,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 50,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let POD = (atributos['Atributos']['POD (Poder)']['Atributo'] * 2);
      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);

      if (POD > DES) {
        pontos += POD;
      } else {
        pontos += DES;
      }

      return pontos;
    },
  },

  'Atleta': {
    pericias: ['Arremessar','Cavalgar','Escalar','Natação','Saltar'],
    alternativas: [],
    especializacoes: { 'Lutar': 'Briga' },
    interpessoais: 1,
    outras_pericias: 1,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 70,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

  'Autor': {
    pericias: ['História','Língua (Nativa)','Língua (Outra)','Psicologia','Usar Bibliotecas'],
    alternativas: ['Mundo Natural','Ocultismo'],
    especializacoes: { 'Arte e Ofício': 'Literatura' },
    interpessoais: 0,
    outras_pericias: 1,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Bibliotecário': {
    pericias: ['Contabilidade','Língua (Nativa)','Língua (Outra)','Usar Bibliotecas'],
    alternativas: [],
    especializacoes: { 'Arte e Ofício': 'Literatura' },
    interpessoais: 0,
    outras_pericias: 3,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 35,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Membro do Clero': {
    pericias: ['Contabilidade','Escutar','História','Língua (Outra)','Psicologia','Usar Bibliotecas'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 1,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 60,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Criminoso': {
    pericias: ['Encontrar','Furtividade','Psicologia'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 0,
    qtde_outras_especificas: 4,
    outras_especificas: [
      { pericia: 'Armas de Fogo', temEspecializacao: false, especializacao: null },
      { pericia: 'Avaliação', temEspecializacao: false, especializacao: null },
      { pericia: 'Chaveiro', temEspecializacao: false, especializacao: null },
      { pericia: 'Consertos Mecânicos', temEspecializacao: false, especializacao: null },
      { pericia: 'Disfarce', temEspecializacao: false, especializacao: null },
      { pericia: 'Lutar', temEspecializacao: false, especializacao: null },
      { pericia: 'Prestidigitação', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 5,
    nivel_credito_maximo: 65,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

  'Detetive Particular': {
    pericias: ['Direito','Disfarce','Encontrar','Psicologia','Usar Bibliotecas'],
    alternativas: [],
    especializacoes: { 'Arte e Ofício': 'Fotografia' },
    interpessoais: 1,
    outras_pericias: 0,
    qtde_outras_especificas: 1,
    outras_especificas: [
      { pericia: 'Armas de Fogo', temEspecializacao: false, especializacao: null },
      { pericia: 'Chaveiro', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

  'Diletante': {
    pericias: ['Armas de Fogo','Arte e Ofício','Cavalgar','Língua (Outra)'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 3,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 50,
    nivel_credito_maximo: 99,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2) + (atributos['Atributos']['APA (Aparência)']['Atributo'] * 2);
      return pontos;
    },
  },

  'Engenheiro': {
    pericias: [ 'Consertos Elétricos', 'Consertos Mecânicos', 'Operar Maquinário Pesado', 'Usar Bibliotecas' ],
    alternativas: [],
    especializacoes: {
      'Arte e Ofício': 'Desenho Técnico',
      'Ciência': 'Engenharia',
      'Ciência': 'Física',
    },
    interpessoais: 0,
    outras_pericias: 1,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 30,
    nivel_credito_maximo: 60,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Fanático': {
    pericias: ['Furtividade','História','Psicologia'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 2,
    outras_pericias: 3,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 0,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let APA = (atributos['Atributos']['APA (Aparência)']['Atributo'] * 2);
      let POD = (atributos['Atributos']['POD (Poder)']['Atributo'] * 2);

      if (APA > POD) {
        pontos += APA;
      } else {
        pontos += POD;
      }

      return pontos;
    },
  },

  'Fazendeiro': {
    pericias: ['Consertos Mecânicos','Dirigir Automóveis','Mundo Natural','Operar Maquinário Pesado','Rastrear'],
    alternativas: [],
    especializacoes: { 'Arte e Ofício': 'Trabalhos de Fazenda' },
    interpessoais: 1,
    outras_pericias: 1,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

  'Investigador de Polícia': {
    pericias: ['Armas de Fogo','Direito','Escutar','Psicologia','Encontrar'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 1,
    qtde_outras_especificas: 1,
    outras_especificas: [
      { pericia: 'Arte e Ofício', temEspecializacao: true, especializacao: 'Atuação' },
      { pericia: 'Disfarce', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 20,
    nivel_credito_maximo: 50,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

  'Jornalista': {
    pericias: ['Armas de Fogo','Direito','Encontrar','Escutar','Psicologia'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 1,
    qtde_outras_especificas: 1,
    outras_especificas: [
      { pericia: 'Arte e Ofício', temEspecializacao: true, especializacao: 'Atuação' },
      { pericia: 'Disfarce', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Médico': {
    pericias: ['Medicina','Primeiros Socorros','Psicologia'],
    alternativas: [],
    especializacoes: {
      'Ciência': 'Biologia',
      'Ciência': 'Farmácia',
      'Língua (Outra)': 'Latim',
    },
    interpessoais: 0,
    outras_pericias: 0,
    qtde_outras_especificas: 2,
    outras_especificas: [
      { pericia: 'Psicanálise', temEspecializacao: false, especializacao: null },
      { pericia: 'Ciência', temEspecializacao: true, especializacao: 'Química' },
      { pericia: 'Ciência', temEspecializacao: true, especializacao: 'Botânica' },
      { pericia: 'Veterinária', temEspecializacao: false, especializacao: null },
      { pericia: 'Ortopedista', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 30,
    nivel_credito_maximo: 80,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Membro de Tribo': {
    pericias: ['Encontrar','Escalar','Escutar','Mundo Natural','Natação','Ocultismo','Sobrevivência'],
    alternativas: ['Arremessar','Lutar'],
    especializacoes: {},
    interpessoais: 0,
    outras_pericias: 0,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 0,
    nivel_credito_maximo: 15,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

  'Missionário': {
    pericias: ['Arte e Ofício','Consertos Mecânicos','Medicina','Mundo Natural','Primeiros Socorros'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 1,
    outras_pericias: 2,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 0,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Músico': {
    pericias: ['Escutar','Psicologia'],
    alternativas: [],
    especializacoes: { 'Arte e Ofício': 'Instrumento' },
    interpessoais: 1,
    outras_pericias: 4,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let POD = (atributos['Atributos']['POD (Poder)']['Atributo'] * 2);
      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);

      if (POD > DES) {
        pontos += POD;
      } else {
        pontos += DES;
      }

      return pontos;
    },
  },

  'Oficial de Polícia': {
    pericias: ['Armas de Fogo','Direito','Encontrar','Primeiros Socorros','Psicologia',],
    alternativas: ['Dirigir Automóveis','Cavalgar'],
    especializacoes: { 'Lutar': 'Briga' },
    interpessoais: 1,
    outras_pericias: 0,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

  'Oficial Militar': {
    pericias: ['Armas de Fogo','Contabilidade','Navegação','Psicologia','Sobrevivência'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 2,
    outras_pericias: 1,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 20,
    nivel_credito_maximo: 70,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

  'Parapsicólogo': {
    pericias: ['Antropologia','História','Usar Bibliotecas','Ocultismo','Língua (Outra)','Psicologia'],
    alternativas: [],
    especializacoes: { 'Arte e Ofício': 'Fotografia' },
    interpessoais: 0,
    outras_pericias: 1,
    qtde_outras_especificas: 1,
    outras_especificas: [
      { pericia: 'Psicanálise', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Piloto': {
    pericias: ['Antropologia','História','Língua (Outra)','Psicologia','Usar Bibliotecas'],
    alternativas: [],
    especializacoes: { 'Arte e Ofício': 'Fotografia' },
    interpessoais: 0,
    outras_pericias: 1,
    qtde_outras_especificas: 1,
    outras_especificas: [
      { pericia: 'Pilotar', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 20,
    nivel_credito_maximo: 70,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2) + (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      return pontos;
    },
  },

  'Professor': {
    pericias: ['Língua (Nativa)','Língua (Outra)','Psicologia','Usar Bibliotecas'],
    alternativas: [],
    especializacoes: {},
    interpessoais: 0,
    outras_pericias: 0,
    qtde_outras_especificas: 4,
    outras_especificas: [
      { pericia: 'Ciência', temEspecializacao: true, especializacao: 'Astronomia' },
      { pericia: 'Ciência', temEspecializacao: true, especializacao: 'Biologia' },
      { pericia: 'Ciência', temEspecializacao: true, especializacao: 'Química' },
      { pericia: 'Ciência', temEspecializacao: true, especializacao: 'Matemática' },
      { pericia: 'Ciência', temEspecializacao: true, especializacao: 'Física' },
      { pericia: 'Antropologia', temEspecializacao: false, especializacao: null },
      { pericia: 'Arqueologia', temEspecializacao: false, especializacao: null },
      { pericia: 'Arte e Ofício', temEspecializacao: true, especializacao: 'Dança' },
      { pericia: 'Arte e Ofício', temEspecializacao: true, especializacao: 'Cantor' },
      { pericia: 'Direito', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 20,
    nivel_credito_maximo: 70,
    pontos_pericias_ocupacionais: (atributos) => {
      return atributos['Atributos']['EDU (Educação)']['Atributo'] * 4;
    },
  },

  'Profissional de Entretenimento': {
    pericias: ['Disfarce','Escutar','Psicologia'],
    alternativas: [],
    especializacoes: { 'Arte e Ofício': 'Atuação' },
    interpessoais: 2,
    outras_pericias: 2,
    qtde_outras_especificas: 0,
    outras_especificas: [],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 70,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2) + (atributos['Atributos']['APA (Aparência)']['Atributo'] * 2);
      return pontos;
    },
  },

  'Soldado': {
    pericias: ['Armas de Fogo','Esquivar','Furtividade','Lutar','Sobrevivência'],
    alternativas: ['Escalar','Natação'],
    especializacoes: {},
    interpessoais: 0,
    outras_pericias: 0,
    qtde_outras_especificas: 2,
    outras_especificas: [
      { pericia: 'Consertos Mecânicos', temEspecializacao: false, especializacao: null },
      { pericia: 'Língua (Outra)', temEspecializacao: false, especializacao: null },
      { pericia: 'Primeiros Socorros', temEspecializacao: false, especializacao: null },
    ],
    nivel_credito_minimo: 9,
    nivel_credito_maximo: 30,
    pontos_pericias_ocupacionais: (atributos) => {
      let pontos = (atributos['Atributos']['EDU (Educação)']['Atributo'] * 2);

      let DES = (atributos['Atributos']['DES (Destreza)']['Atributo'] * 2);
      let FOR = (atributos['Atributos']['FOR (Força)']['Atributo'] * 2);

      if (DES > FOR) {
        pontos += DES;
      } else {
        pontos += FOR;
      }

      return pontos;
    },
  },

};

function obterOcupacoes() {
  let array_ocupacoes = Object.keys(OCUPACOES);
  return array_ocupacoes;
}

function createOption(select,value) {
  let option = document.createElement('option');
  option.value = value;
  option.innerHTML = value;
  select.add(option);
}

function preencherSelectOcupacoes(callback) {
  let select = document.getElementById('opcao');
  select.innerHTML = '';
  let ocupacoes = obterOcupacoes();

  createOption(select,'Todas as ocupações');

  ocupacoes.forEach((ocupacao, index) => {
    createOption(select,ocupacao);
    if (index == (ocupacoes.length - 1)) {
      callback();
    }
  });
}

function obterPericiaIndividual(atributos,ocupacao,nome_pericia,callback) {

  let nome_alterado = nome_pericia;
  if (nome_pericia == 'Língua (Outra)') {
    nome_alterado = 'Língua';
  }

  if (PERICIAS[nome_pericia].varias_individual) {
    if (PERICIAS[nome_pericia].varias_unica) {
      callback([
        {
          'Perícia': nome_alterado,
          'Regular': PERICIAS[nome_pericia].minimo,
          'Difícil': 0,
          'Extremo': 0,
        }
      ]);
    } else {
      let array_varias = Object.keys(PERICIAS[nome_pericia].varias);
      let especialidades = [];

      array_varias.forEach((nome, index) => {
        especialidades.push({
          'Perícia': `${nome_pericia} (${nome})`,
          'Regular': PERICIAS[nome_pericia].varias[nome],
          'Difícil': 0,
          'Extremo': 0,
        });

        if (index == (array_varias.length - 1)) {
          callback(especialidades);
        }
      });
    }
  } else {
    let valor = PERICIAS[nome_pericia].minimo;

    if (nome_pericia == 'Nível de Crédito') {
      valor = ocupacao.nivel_credito_minimo;
    }

    if (nome_pericia == 'Língua (Nativa)') {
      valor = atributos['Atributos']['EDU (Educação)']['Atributo'];
    }

    if (nome_pericia == 'Esquivar') {
      valor = atributos['Atributos']['DES (Destreza)']['Metade'];
    }

    callback([
      {
        'Perícia': nome_pericia,
        'Regular': valor,
        'Difícil': 0,
        'Extremo': 0,
      }
    ]);
  }
}

function obterListaPericias(callback) {
  let array_pericias = Object.keys(PERICIAS);
  let pericias_incomuns = document.getElementById('incomum').checked;
  let pericias_mythos = document.getElementById('mythos').checked;
  let lista = [];

  array_pericias.forEach((nome_pericia, index_pericia) => {
    let inserir = false;

    if (PERICIAS[nome_pericia].mythos) {
      if (pericias_mythos) {
        inserir = true;
      }
    } else if (PERICIAS[nome_pericia].incomum) {
      if (pericias_incomuns) {
        inserir = true;
      }
    } else {
      inserir = true;
    }

    if (inserir) {
      lista.push(nome_pericia);

      if (index_pericia == (array_pericias.length - 1)) {
        callback(lista);
      }
    }
  });
}

function obterPericiasIniciais(atributos,ocupacao,callback) {
  obterListaPericias(array_pericias=>{
    let pericias_iniciais = [];

    array_pericias.forEach((nome_pericia, index_pericia) => {
      obterPericiaIndividual(atributos,ocupacao,nome_pericia,array_novas_pericias=>{
        pericias_iniciais.push(...array_novas_pericias);

        if (index_pericia == (array_pericias.length - 1)) {
          callback(pericias_iniciais);
        }
      });
    });
  });
}

function pontuarInteressesPessoais(atributos,pericias_iniciais,callback) {

  let pontos = atributos['Pontos de Perícia']['Interesses Pessoais'];
  let pericias = JSON.parse(JSON.stringify(pericias_iniciais));

  obterListaPericias(lista=>{
    do {
      let index_pericia = Math.floor(Math.random() * lista.length);
      let nome_pericia = lista[index_pericia];
      let nome_pericia_completo = nome_pericia;
      let valor = PERICIAS[nome_pericia].minimo;
      lista.splice(index_pericia, 1);

      if (PERICIAS[nome_pericia].varias_individual) {
        let array_varias = Object.keys(PERICIAS[nome_pericia].varias);
        let index_varias = Math.floor(Math.random() * array_varias.length);
        valor = PERICIAS[nome_pericia].varias[array_varias[index_varias]];

        let nome_alterado = nome_pericia;
        if (nome_pericia == 'Língua (Outra)') {
          nome_alterado = 'Língua';
        }

        nome_pericia_completo = `${nome_alterado} (${array_varias[index_varias]})`;
      }

      let pericia_da_vez = {
        'Perícia': nome_pericia_completo,
        'Regular': valor,
        'Difícil': 0,
        'Extremo': 0,
      };

      let index_pericias_iniciais = pericias.map((e) => { return e['Perícia']; }).indexOf(nome_pericia_completo);
      if (index_pericias_iniciais >= 0) {
        pericia_da_vez['Regular'] = pericias[index_pericias_iniciais]['Regular'];
      } else {
        pericias.push(pericia_da_vez);
      }

      let completar = (Math.floor(Math.random() * 10) > 3);
      let valor_completar = 0;

      if (completar) {
        valor_completar = ( pericia_da_vez['Regular'] % 10 );
        if (valor_completar == 0) {
          valor_completar = 10;
        }
      } else {
        valor_completar = Math.floor(Math.random() * 10);
      }

      if ((pontos - valor_completar) >= 0) {
        pontos = pontos - valor_completar;
      } else {
        pontos = 0;
      }
      pericia_da_vez['Regular'] = pericia_da_vez['Regular'] + valor_completar;

      if (pericia_da_vez['Regular'] > 99) {
        pontos = pericia_da_vez['Regular'] - 99;
        pericia_da_vez['Regular'] = 99;
      }

      index_pericias_iniciais = pericias.map((e) => { return e['Perícia']; }).indexOf(nome_pericia_completo);
      pericias[index_pericias_iniciais]['Regular'] = pericia_da_vez['Regular'];

      if (pontos <= 0) {
        callback(pericias);
      }
    } while (pontos > 0);
  });

  /*

  'Sobrevivência': {
    minimo: 0,
    incomum: true,
    varias_individual: true,
    varias_unica: true,
    varias: {
      'Deserto': 10,
      'Mar': 10,
      'Ártico': 10,
      'Floresta': 10,
      'Pântano': 10,
      'Semiárido': 10,
    },
    mythos: false,
  },

  'Pontos de Perícia': {
    'Interesses Pessoais': (atributosComIdade['INT (Inteligência)'] * 2),
    'Perícias Ocupacionais': 0, // Depende da Ocupação
  },

  // 'Esquivar' - metade de DES
  // Língua (Nativa) (EDU)
  // 'Nível de Crédito'
  // 'Mythos de Cthulhu'

  ocupacao = JSON.parse(JSON.stringify(OCUPACOES[nome_ocupacao]));
  ZZZ

  pericias: ['Armas de Fogo','Esquivar','Furtividade','Lutar','Sobrevivência'],
  alternativas: ['Escalar','Natação'],
  especializacoes: {},
  interpessoais: 0,
  outras_pericias: 0,
  qtde_outras_especificas: 2,
  outras_especificas: [
    { pericia: 'Consertos Mecânicos', temEspecializacao: false, especializacao: null },
    { pericia: 'Língua (Outra)', temEspecializacao: false, especializacao: null },
    { pericia: 'Primeiros Socorros', temEspecializacao: false, especializacao: null },
  ],
  nivel_credito_minimo: 9,
  nivel_credito_maximo: 30,
  pontos_pericias_ocupacionais: (atributos)
  */
}

function selecionarOcupacao(callback) {
  let select = document.getElementById('opcao');
  let nome_ocupacao = select.options[ select.selectedIndex ].value;
  let ocupacao = null;

  if (!(nome_ocupacao in OCUPACOES)) {
    let ocupacoes = obterOcupacoes();
    let index_ocupacao = Math.floor(Math.random() * ocupacoes.length);
    nome_ocupacao = ocupacoes[index_ocupacao];
  }
  ocupacao = OCUPACOES[nome_ocupacao];

  callback(nome_ocupacao,ocupacao);
}

/* ----------------------------------------------------------- */

const ATRIBUTOS = [
  {
    atributo: 'FOR (Força)',
    qtde_dados: 3,
    multiplicar: 5,
    somar: 0,
  },
  {
    atributo: 'CON (Constituição)',
    qtde_dados: 3,
    multiplicar: 5,
    somar: 0,
  },
  {
    atributo: 'TAM (Tamanho)',
    qtde_dados: 2,
    multiplicar: 5,
    somar: 6,
  },
  {
    atributo: 'DES (Destreza)',
    qtde_dados: 3,
    multiplicar: 5,
    somar: 0,
  },
  {
    atributo: 'APA (Aparência)',
    qtde_dados: 3,
    multiplicar: 5,
    somar: 0,
  },
  {
    atributo: 'INT (Inteligência)',
    qtde_dados: 2,
    multiplicar: 5,
    somar: 6,
  },
  {
    atributo: 'POD (Poder)',
    qtde_dados: 3,
    multiplicar: 5,
    somar: 0,
  },
  {
    atributo: 'EDU (Educação)',
    qtde_dados: 2,
    multiplicar: 5,
    somar: 6,
  },
  {
    atributo: 'Sorte',
    qtde_dados: 3,
    multiplicar: 5,
    somar: 0,
  },
];

function rolarDadosSeisLados(qtde,callback) {
  if (qtde < 1) {
    callback(0);
  } else if (qtde == 1) {
    callback(Math.floor(Math.random() * 6) + 1);
  } else {
    let soma = 0;
    (new Array(qtde).fill(0)).forEach((item, index) => {
      soma += (Math.floor(Math.random() * 6) + 1);

      if (index == (qtde - 1)) {
        callback(soma);
      }
    });
  }
}

function rolarPercentual() {
  return (Math.floor(Math.random() * 100) + 1);
}

function rolar1d10() {
  return (Math.floor(Math.random() * 10) + 1);
}

function verificacaoMelhoria(qtde,atributo,callback) {
  if (qtde < 1) {
    callback(atributo);
  } else if (qtde == 1) {
    let melhoria = rolarPercentual();
    let somar = 0;
    if (melhoria > atributo) {
      somar = rolar1d10();
    }
    let atributoSomado = atributo + somar;
    if (atributoSomado > 99) {
      atributoSomado = 99;
    }
    callback(atributoSomado);
  } else {
    let atributoSomado = atributo;

    (new Array(qtde).fill(0)).forEach((item, index) => {

      let melhoria = rolarPercentual();
      let somar = 0;
      if (melhoria > atributoSomado) {
        somar = rolar1d10();
      }
      atributoSomado += somar;

      if (index == (qtde - 1)) {
        if (atributoSomado > 99) {
          atributoSomado = 99;
        }

        callback(atributoSomado);
      }
    });
  }
}

function reduzirAtributo(reducaoTotal,rolar,atributo) {
  let reduzir = rolar ? Math.floor(Math.random() * reducaoTotal) : reducaoTotal;

  if ( (atributo - reduzir) < 1 ) {
    reduzir = atributo - 1;
  }

  atributo = atributo - reduzir;

  return [(reducaoTotal - reduzir), atributo];
}

function modificarAtributosPorIdade(idade,atributos,callback) {
  let atributosAjustados = JSON.parse(JSON.stringify(atributos));

  if (idade <= 19) {
    let reducaoTotal = 5;
    [reducaoTotal, atributosAjustados['FOR (Força)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['FOR (Força)']);
    [reducaoTotal, atributosAjustados['TAM (Tamanho)']] = reduzirAtributo(reducaoTotal,false,atributosAjustados['TAM (Tamanho)']);
    [reducaoTotal, atributosAjustados['EDU (Educação)']] = reduzirAtributo(5,false,atributosAjustados['EDU (Educação)']);

    rolarDadosSeisLados(3,resultadoSorte=>{
      if (resultadoSorte > atributosAjustados['Sorte']) {
        atributosAjustados['Sorte'] = resultadoSorte;
      }
      callback(atributosAjustados);
    });
  } else if ( (idade == 20) && (idade <= 39) ) {
    verificacaoMelhoria(1,atributosAjustados['EDU (Educação)'],atributoSomado=>{
      atributosAjustados['EDU (Educação)'] = atributoSomado;
      callback(atributosAjustados);
    });
  } else if ( (idade == 40) && (idade <= 49) ) {
    verificacaoMelhoria(2,atributosAjustados['EDU (Educação)'],atributoSomado=>{
      atributosAjustados['EDU (Educação)'] = atributoSomado;

      let reducaoTotal = 5;
      [reducaoTotal, atributosAjustados['FOR (Força)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['FOR (Força)']);
      [reducaoTotal, atributosAjustados['CON (Constituição)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['CON (Constituição)']);
      [reducaoTotal, atributosAjustados['DES (Destreza)']] = reduzirAtributo(reducaoTotal,false,atributosAjustados['DES (Destreza)']);

      let reducaoAparencia = 5;
      [reducaoTotal, atributosAjustados['APA (Aparência)']] = reduzirAtributo(reducaoAparencia,false,atributosAjustados['APA (Aparência)']);

      callback(atributosAjustados);
    });
  } else if ( (idade == 50) && (idade <= 59) ) {
    verificacaoMelhoria(3,atributosAjustados['EDU (Educação)'],atributoSomado=>{
      atributosAjustados['EDU (Educação)'] = atributoSomado;

      let reducaoTotal = 10;
      [reducaoTotal, atributosAjustados['FOR (Força)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['FOR (Força)']);
      [reducaoTotal, atributosAjustados['CON (Constituição)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['CON (Constituição)']);
      [reducaoTotal, atributosAjustados['DES (Destreza)']] = reduzirAtributo(reducaoTotal,false,atributosAjustados['DES (Destreza)']);

      let reducaoAparencia = 10;
      [reducaoTotal, atributosAjustados['APA (Aparência)']] = reduzirAtributo(reducaoAparencia,false,atributosAjustados['APA (Aparência)']);

      callback(atributosAjustados);
    });
  } else if ( (idade == 60) && (idade <= 69) ) {
    verificacaoMelhoria(4,atributosAjustados['EDU (Educação)'],atributoSomado=>{
      atributosAjustados['EDU (Educação)'] = atributoSomado;

      let reducaoTotal = 20;
      [reducaoTotal, atributosAjustados['FOR (Força)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['FOR (Força)']);
      [reducaoTotal, atributosAjustados['CON (Constituição)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['CON (Constituição)']);
      [reducaoTotal, atributosAjustados['DES (Destreza)']] = reduzirAtributo(reducaoTotal,false,atributosAjustados['DES (Destreza)']);

      let reducaoAparencia = 15;
      [reducaoTotal, atributosAjustados['APA (Aparência)']] = reduzirAtributo(reducaoAparencia,false,atributosAjustados['APA (Aparência)']);

      callback(atributosAjustados);
    });
  } else if ( (idade == 70) && (idade <= 79) ) {
    verificacaoMelhoria(4,atributosAjustados['EDU (Educação)'],atributoSomado=>{
      atributosAjustados['EDU (Educação)'] = atributoSomado;

      let reducaoTotal = 40;
      [reducaoTotal, atributosAjustados['FOR (Força)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['FOR (Força)']);
      [reducaoTotal, atributosAjustados['CON (Constituição)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['CON (Constituição)']);
      [reducaoTotal, atributosAjustados['DES (Destreza)']] = reduzirAtributo(reducaoTotal,false,atributosAjustados['DES (Destreza)']);

      let reducaoAparencia = 20;
      [reducaoTotal, atributosAjustados['APA (Aparência)']] = reduzirAtributo(reducaoAparencia,false,atributosAjustados['APA (Aparência)']);

      callback(atributosAjustados);
    });
  } else { // 80 e 90
    verificacaoMelhoria(4,atributosAjustados['EDU (Educação)'],atributoSomado=>{
      atributosAjustados['EDU (Educação)'] = atributoSomado;

      let reducaoTotal = 80;
      [reducaoTotal, atributosAjustados['FOR (Força)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['FOR (Força)']);
      [reducaoTotal, atributosAjustados['CON (Constituição)']] = reduzirAtributo(reducaoTotal,true,atributosAjustados['CON (Constituição)']);
      [reducaoTotal, atributosAjustados['DES (Destreza)']] = reduzirAtributo(reducaoTotal,false,atributosAjustados['DES (Destreza)']);

      let reducaoAparencia = 25;
      [reducaoTotal, atributosAjustados['APA (Aparência)']] = reduzirAtributo(reducaoAparencia,false,atributosAjustados['APA (Aparência)']);

      callback(atributosAjustados);
    });
  }
}

function dividirAtributo(atributo) {
  let metade = Math.floor(atributo / 2);
  let quinto = Math.floor(atributo / 5);
  return { 'Atributo': atributo, 'Metade': metade, 'Quinto': quinto };
}

function rolarAtributosComIdade(callback) {
  rolarAtributosSemIdade(atributos=>{
    atributos['Idade'] = (Math.floor(Math.random() * 75) + 15);

    modificarAtributosPorIdade(atributos['Idade'],atributos,atributosComIdade=>{

      let graduacao = 'Sem estudo';
      if (atributosComIdade['EDU (Educação)'] >= 80) {
        graduacao = 'Pós-graduação';
      } else if (atributosComIdade['EDU (Educação)'] >= 70) {
        graduacao = 'Faculdade';
      } else if (atributosComIdade['EDU (Educação)'] >= 60) {
        graduacao = 'Nível médio';
      }

      let atributosCalculados = {
        'Informações': {
          'Idade': atributosComIdade['Idade'],
          'Sorte': atributosComIdade['Sorte'],
          'SAN (Sanidade)': atributosComIdade['POD (Poder)'],
          'Graduação': graduacao,
        },
        'Atributos': {},
        'Pontos de Perícia': {
          'Interesses Pessoais': (atributosComIdade['INT (Inteligência)'] * 2),
          'Perícias Ocupacionais': 0, // Depende da Ocupação
        },
      };
      atributosCalculados['Atributos']['FOR (Força)'] = dividirAtributo(atributosComIdade['FOR (Força)']);
      atributosCalculados['Atributos']['CON (Constituição)'] = dividirAtributo(atributosComIdade['CON (Constituição)']);
      atributosCalculados['Atributos']['TAM (Tamanho)'] = dividirAtributo(atributosComIdade['TAM (Tamanho)']);
      atributosCalculados['Atributos']['DES (Destreza)'] = dividirAtributo(atributosComIdade['DES (Destreza)']);
      atributosCalculados['Atributos']['APA (Aparência)'] = dividirAtributo(atributosComIdade['APA (Aparência)']);
      atributosCalculados['Atributos']['INT (Inteligência)'] = dividirAtributo(atributosComIdade['INT (Inteligência)']);
      atributosCalculados['Atributos']['POD (Poder)'] = dividirAtributo(atributosComIdade['POD (Poder)']);
      atributosCalculados['Atributos']['EDU (Educação)'] = dividirAtributo(atributosComIdade['EDU (Educação)']);

      atributosCalculados['Informações']['Pontos de Magia'] = atributosCalculados['Atributos']['POD (Poder)']['Quinto'];

      callback(atributosCalculados);
    });
  });
}

function rolarAtributosSemIdade(callback) {
  let atributos = {};

  ATRIBUTOS.forEach((entry, index) => {
    rolarDadosSeisLados(entry.qtde_dados,resultadoRolagem=>{
        atributos[entry.atributo] = (resultadoRolagem + entry.somar) * entry.multiplicar;

        if (index == (ATRIBUTOS.length - 1)) {
          atributos['Idade'] = (Math.floor(Math.random() * 75) + 15);

          callback(atributos);
        }
    });
  });
}

function rolarAtributos(callback) {
  rolarAtributosComIdade((atributosCalculados)=>{

      // Atributos Secundários
      atributosCalculados['Atributos Secundários'] = {};
      let FOR_mais_TAM = atributosCalculados['Atributos']['FOR (Força)']['Atributo'] + atributosCalculados['Atributos']['TAM (Tamanho)']['Atributo'];

      if (FOR_mais_TAM <= 64) {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = '–2';
        atributosCalculados['Atributos Secundários']['Corpo'] = (0 - 2);
      } else if (FOR_mais_TAM <= 84) {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = '–1';
        atributosCalculados['Atributos Secundários']['Corpo'] = (0 - 1);
      } else if (FOR_mais_TAM <= 124) {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = 'Nenhum';
        atributosCalculados['Atributos Secundários']['Corpo'] = 0;
      } else if (FOR_mais_TAM <= 164) {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = '+1D4';
        atributosCalculados['Atributos Secundários']['Corpo'] = 1;
      } else if (FOR_mais_TAM <= 204) {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = '+1D6';
        atributosCalculados['Atributos Secundários']['Corpo'] = 2;
      } else if (FOR_mais_TAM <= 284) {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = '+2D6';
        atributosCalculados['Atributos Secundários']['Corpo'] = 3;
      } else if (FOR_mais_TAM <= 364) {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = '+3D6';
        atributosCalculados['Atributos Secundários']['Corpo'] = 4;
      } else if (FOR_mais_TAM <= 444) {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = '+4D6';
        atributosCalculados['Atributos Secundários']['Corpo'] = 5;
      } else {
        atributosCalculados['Atributos Secundários']['Dano Extra'] = '+5D6';
        atributosCalculados['Atributos Secundários']['Corpo'] = 6;
      }

      let CON_mais_TAM = atributosCalculados['Atributos']['CON (Constituição)']['Atributo'] + atributosCalculados['Atributos']['TAM (Tamanho)']['Atributo'];
      atributosCalculados['Atributos Secundários']['Pontos de Vida'] = Math.floor(CON_mais_TAM / 10);

      let FOR = atributosCalculados['Atributos']['FOR (Força)']['Atributo'];
      let DES = atributosCalculados['Atributos']['DES (Destreza)']['Atributo'];
      let TAM = atributosCalculados['Atributos']['TAM (Tamanho)']['Atributo'];

      if ( (FOR < TAM) && (DES < TAM) ) {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = 7;
      } else if ( ( (FOR >= TAM) || (DES >= TAM) ) || ( (FOR == TAM) && (DES == TAM) ) ) {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = 8;
      } else if ( (FOR > TAM) && (DES > TAM) ) {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = 9;
      } else {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = 9;
      }

      let idade = atributosCalculados['Informações']['Idade'];
      if ( (idade >= 40) && (idade < 50) ) {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] - 1;
      } else if ( (idade >= 50) && (idade < 60) ) {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] - 2;
      } else if ( (idade >= 60) && (idade < 70) ) {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] - 3;
      } else if ( (idade >= 70) && (idade < 80) ) {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] - 4;
      } else {
        atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] = atributosCalculados['Atributos Secundários']['Taxa de Movimento (MOV)'] - 5;
      }

      callback(atributosCalculados);
  });
}

/* ----------------------------------------------------------- */

function executar() {
  rolarAtributos((atributos)=>{
    selecionarOcupacao((nome_ocupacao,ocupacao)=>{
      atributos['Informações']['Ocupação'] = nome_ocupacao;
      atributos['Pontos de Perícia']['Perícias Ocupacionais'] = ocupacao.pontos_pericias_ocupacionais(atributos);

      obterPericiasIniciais(atributos,ocupacao,(pericias_iniciais)=>{
        pontuarInteressesPessoais(atributos,pericias_iniciais,(pericias)=>{
          console.log(nome_ocupacao);
          console.log(ocupacao);
          console.log(pericias_iniciais);
          console.log(pericias);
        });
      });

    });
  });
}

/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */
