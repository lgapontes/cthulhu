
const LOG = false;

function logger(msg) {
  if (LOG) console.log(msg);
}

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

const PERICIAS_IMPORTANTES = [
  'Armas de Fogo (Pistolas)',
  'Lutar (Briga)',
  'Charme',
  'Chaveiro',
  'Consertos Mecânicos',
  'Direito',
  'Dirigir Automóveis',
  'Encontrar',
  'Escutar',
  'Esquivar',
  'Furtividade',
  'História',
  'Intimidação',
  'Nível de Crédito',
  'Persuasão',
  'Primeiros Socorros',
  'Psicologia',
  'Usar Bibliotecas'
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
    equipamentos: ['armas_fogo','ferramentas','ferramentas_investigadores'],
    chances_equipamentos: [40,30,100],
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
    equipamentos: ['armas_comuns','ferramentas','ferramentas_investigadores'],
    chances_equipamentos: [100,100,60],
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
    equipamentos: ['ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [50,50,50],
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
    equipamentos: ['ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [50,50,50],
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
    equipamentos: ['armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [100,60,60,30],
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
    equipamentos: ['armas_fogo','ferramentas','ferramentas_investigadores'],
    chances_equipamentos: [50,50,100],
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
    equipamentos: ['armas_comuns','ferramentas','ferramentas_investigadores'],
    chances_equipamentos: [50,50,100],
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
    equipamentos: ['ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [80,100,50],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [100,100,50,50,50],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [100,30,50,100,30],
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
    equipamentos: ['armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [50,70,100,30],
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
    equipamentos: ['armas_comuns','ferramentas','ferramentas_investigadores'],
    chances_equipamentos: [80,100,100],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [50,50,50,50,50],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [70,70,100,50,70],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [100,30,70,100,30],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [60,40,40,100,30],
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
    equipamentos: ['ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [50,50,100],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores'],
    chances_equipamentos: [60,60,100,60],
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
    equipamentos: ['ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [100,100,100],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [30,50,50,80,30],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [100,50,50,100,20],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [100,50,50,100,30],
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
    equipamentos: ['ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [50,100,80],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [50,30,50,50,40],
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
    equipamentos: ['ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [60,60,30],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [30,50,50,50,20],
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
    equipamentos: ['armas_fogo','armas_comuns','ferramentas','ferramentas_investigadores','equipamento_medico'],
    chances_equipamentos: [100,80,60,30,50],
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

function pontuarPericia(pontos,pericia_da_vez,nivel_credito_maximo,estou_na_ocupacao,callback) {
  let valor_maximo = estou_na_ocupacao ? 99 : 60;
  let valor_inicial = pericia_da_vez['Regular'];
  let pontos_inicial = pontos;

  if (pericia_da_vez['Regular'] < valor_maximo) {

    let pontuar = Math.floor(Math.random() * 10);
    let valor_pontuar = 0;

    if (pontuar < 4) {

      valor_pontuar = (10 - ( pericia_da_vez['Regular'] % 10 ));
      if (valor_pontuar == 0) {
        valor_pontuar = 10;
      }
      logger(`Completando valor da perícia: ${valor_pontuar}`);

    } else if (pontuar < 7) {

      valor_pontuar = Math.floor(Math.random() * 10) + 5;
      logger(`Valor aleatório da perícia: ${valor_pontuar}`);

    } else {

      valor_pontuar = 20;
      logger(`Valor fixo para a perícia: ${valor_pontuar}`);

    }

    if ((pontos - valor_pontuar) >= 0) {
      pontos = pontos - valor_pontuar;
    } else {
      pontos = pontos - valor_pontuar;
      let reduzir = (pontos * -1);
      valor_pontuar = valor_pontuar - reduzir;
      pontos = 0;
    }
    logger(`Valor realmente pontuado: ${valor_pontuar}`);

    pericia_da_vez['Regular'] = pericia_da_vez['Regular'] + valor_pontuar;

    if (pericia_da_vez['Perícia'] == 'Nível de Crédito') {
      valor_maximo = nivel_credito_maximo;
    }

    if (pericia_da_vez['Regular'] > valor_maximo) {
      pontos = pericia_da_vez['Regular'] - valor_maximo;
      pericia_da_vez['Regular'] = valor_maximo;
    }

    logger(`Perícia ${pericia_da_vez['Perícia']}: ${valor_inicial} >> ${pericia_da_vez['Regular']}`);
    logger(`Pontuação ${pontos_inicial} >> ${pontos}`);
    logger('');
  }

  callback(pericia_da_vez, pontos);
}

function segurancaNomePericia(nome_pericia) {
  let array = nome_pericia.split(' (');
  let temEspecializacao = false;

  if (array.length == 0) {

    console.error(`Ocorreu um erro ao assegurar o nome da perícia ${nome_pericia}`);
    return {
      nome_pericia_completo: nome_pericia,
      tem_especializacao: temEspecializacao,
      nome_pericia: nome_pericia,
      nome_especializacao: '',
    };

  } else if (array.length == 1) {

    return {
      nome_pericia_completo: nome_pericia,
      tem_especializacao: temEspecializacao,
      nome_pericia: array[0],
      nome_especializacao: '',
    };

  } else if (array.length == 2) {
    if (array[0] == 'Língua') {
      if ( (array[1] == 'Nativa)') || (array[1] == 'Outra)') ) {

        return {
          nome_pericia_completo: nome_pericia,
          tem_especializacao: temEspecializacao,
          nome_pericia: nome_pericia,
          nome_especializacao: '',
        };

      } else {

        temEspecializacao = true;
        let especializacao = array[1].slice(0, -1);  // COPIAR sem último caracter
        return {
          nome_pericia_completo: nome_pericia,
          tem_especializacao: temEspecializacao,
          nome_pericia: `${array[0]} (Outra)`,
          nome_especializacao: especializacao,
        };

      }
    } else {

      temEspecializacao = true;
      let especializacao = array[1].slice(0, -1);  // COPIAR sem último caracter
      return {
        nome_pericia_completo: nome_pericia,
        tem_especializacao: temEspecializacao,
        nome_pericia: array[0],
        nome_especializacao: especializacao,
      };

    }
  } else {
    console.error(`Ocorreu um erro ao assegurar o nome da perícia ${nome_pericia}`);
    return {
      nome_pericia_completo: nome_pericia,
      tem_especializacao: temEspecializacao,
      nome_pericia: nome_pericia,
      nome_especializacao: '',
    };
  }
}

function sortearPericia(atributos,pontos,pericias,lista,lista_seletiva,pode_usar_geral,estou_na_ocupacao,callback) {
  logger(`Sortear Perícias ${estou_na_ocupacao ? 'da Ocupação' : 'Pessoais'}`);

  let usei_geral = false;
  let pericia_sorteada = '';

  let lista_da_vez = lista_seletiva;
  if (pode_usar_geral) {
    usei_geral = (Math.floor(Math.random() * 10) > 4);
    if (usei_geral) {
      lista_da_vez = lista;
    }
  }

  if (usei_geral) {
    logger(`Lista Geral: ${lista}`);
  } else {
    logger(`Lista Seletiva: ${lista_seletiva}`);
  }

  let index_pericia = Math.floor(Math.random() * lista_da_vez.length);
  let nome_pericia = lista_da_vez[index_pericia];

  /*
    meta_nome_pericia = {
      nome_pericia_completo: nome_pericia,
      tem_especializacao: temEspecializacao,
      nome_pericia: array[0],
      nome_especializacao: especializacao,
    };
  */

  let meta_nome_pericia = segurancaNomePericia(nome_pericia);
  let nome_pericia_completo = meta_nome_pericia.nome_pericia;
  let valor = 0;

  if (meta_nome_pericia.tem_especializacao) {

    valor = PERICIAS[meta_nome_pericia.nome_pericia][meta_nome_pericia.nome_especializacao];
    nome_pericia_completo = meta_nome_pericia.nome_pericia_completo;

  } else {
    valor = PERICIAS[meta_nome_pericia.nome_pericia].minimo;

    if (PERICIAS[meta_nome_pericia.nome_pericia].varias_individual) {
      let array_varias = Object.keys(PERICIAS[meta_nome_pericia.nome_pericia].varias);
      let index_varias = Math.floor(Math.random() * array_varias.length);
      valor = PERICIAS[meta_nome_pericia.nome_pericia].varias[array_varias[index_varias]];

      let nome_alterado = nome_pericia;
      if (nome_pericia == 'Língua (Outra)') {
        nome_alterado = 'Língua';
      }

      nome_pericia_completo = `${nome_alterado} (${array_varias[index_varias]})`;
    }
  }

  if (!estou_na_ocupacao) {
    lista_da_vez.splice(index_pericia, 1);
  }

  let pericia_da_vez = {
    'Perícia': nome_pericia_completo,
    'Regular': valor,
    'Difícil': 0,
    'Extremo': 0,
  };

  // Altera valor para perícia já sorteada
  let index_pericias_iniciais = pericias.map((e) => { return e['Perícia']; }).indexOf(nome_pericia_completo);
  if (index_pericias_iniciais >= 0) {
    pericia_da_vez['Regular'] = pericias[index_pericias_iniciais]['Regular'];
  } else {
    pericias.push(pericia_da_vez);
  }

  let nivel_credito_maximo = OCUPACOES[atributos['Informações']['Ocupação']].nivel_credito_maximo;
  pontuarPericia(pontos,pericia_da_vez,nivel_credito_maximo,estou_na_ocupacao,(r_pericia_da_vez,r_pontos)=>{
    pericia_da_vez - r_pericia_da_vez;
    pontos = r_pontos;

    index_pericias_iniciais = pericias.map((e) => { return e['Perícia']; }).indexOf(nome_pericia_completo);
    pericias[index_pericias_iniciais]['Regular'] = pericia_da_vez['Regular'];

    callback(pontos);
  });
}

function pontuarInteressesPessoais(atributos,pericias_iniciais,callback) {
  logger('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  logger('>> Pontuando Interesses Pessoais');
  logger('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  logger('');

  let pontos = atributos['Pontos de Perícia']['Interesses Pessoais'];
  let pericias = JSON.parse(JSON.stringify(pericias_iniciais));
  let pericias_importantes = PERICIAS_IMPORTANTES.slice(); // COPIAR

  obterListaPericias(lista=>{
    do {
      sortearPericia(atributos,pontos,pericias,lista,pericias_importantes,true,false,(r_pontos)=>{
        pontos = r_pontos;

        if (pontos <= 0) {
          callback(pericias);
        }
      });

    } while (pontos > 0);
  });

}

function obterEspecializacoesPericiasOcupacionais(ocupacao,callback) {
  let array_especializacoes = Object.keys(ocupacao.especializacoes);
  let especializacoes = [];

  if (array_especializacoes.length > 0) {

    array_especializacoes.forEach((especializacao, index) => {

      if (especializacao == 'Língua (Outra)') {
        especializacoes.push(`Língua (${ocupacao.especializacoes[especializacao]})`);
      } else {
        especializacoes.push(`${especializacao} (${ocupacao.especializacoes[especializacao]})`);
      }

      if (index == (array_especializacoes.length - 1)) {
        callback(especializacoes);
      }
    });

  } else {
    callback(especializacoes);
  }
}

function obterOutrasPericiasOcupacionais(ocupacao,callback) {
  let outras = [];
  if (ocupacao.qtde_outras_especificas > 0) {

    let array_outras_especificas = ocupacao.outras_especificas.slice(); // COPIAR

    if (array_outras_especificas.length > 0) {

      array_outras_especificas.forEach((outra, index) => {
        // { pericia: 'Consertos Mecânicos', temEspecializacao: false, especializacao: null },
        // { pericia: 'Língua (Outra)', temEspecializacao: false, especializacao: null },

        if (outra.temEspecializacao) {
          outras.push(`${outra.pericia} (${outra.especializacao})`);
        } else {
          outras.push(outra.pericia);
        }

        if (index == (array_outras_especificas.length - 1)) {
          callback(outras);
        }
      });

    } else {
      callback(outras);
    }

  } else {
    callback(outras);
  }
}

function obterListaPericiasReduzida(ocupacao,lista_completa,callback) {
  logger(`Quantidade de perícias interpessoais: ${ocupacao.interpessoais}`);

  let lista_reduzida = lista_completa.slice(); // COPIAR
  let interpessoais = ocupacao.interpessoais;
  let lista_interpessoais = PERICIAS_INTERPESSOAIS.slice(); // COPIAR

  if (ocupacao.interpessoais > 0) {

    let temp_array = [...new Array(interpessoais).keys()];
    temp_array.forEach((numero, index_interpessoal) => {

      let index_sorteada = Math.floor(Math.random() * lista_interpessoais.length);
      let interpessoal = lista_interpessoais[index_sorteada];

      lista_interpessoais = lista_interpessoais.splice(index_sorteada, 1);

      let index_para_remover = lista_reduzida.indexOf(interpessoal);
      if (index_para_remover > -1) {
        lista_reduzida = lista_reduzida.splice(index_para_remover, 1);
      }

      if (index_interpessoal == (temp_array.length - 1)) {
        callback(lista_reduzida);
      }
    });

  } else {
    callback(lista_reduzida);
  }
}

function pontuarPericiasOcupacionais(ocupacao_original,atributos,pericias_pessoais,callback) {
  logger('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  logger('>> Pontuando Perícias Ocupacionais');
  logger('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  logger('');

  let pontos = atributos['Pontos de Perícia']['Perícias Ocupacionais'];
  let pericias = JSON.parse(JSON.stringify(pericias_pessoais));
  let ocupacao = JSON.parse(JSON.stringify(ocupacao_original));
  let outras_pericias = ocupacao.outras_pericias;

  /* Organizando perícias da ocupação */
  let pericias_importantes = ocupacao.pericias;

  if (ocupacao.alternativas.length > 0) {
    let index_alternativas = Math.floor(Math.random() * ocupacao.alternativas.length);
    pericias_importantes.push(ocupacao.alternativas[index_alternativas]);
  }

  obterEspecializacoesPericiasOcupacionais(ocupacao,(especializacoes)=>{
    pericias_importantes.push(...especializacoes);

    obterOutrasPericiasOcupacionais(ocupacao,(outras)=>{
      pericias_importantes.push(...outras);

      obterListaPericias(lista_completa=>{
        obterListaPericiasReduzida(ocupacao,lista_completa,(lista_reduzida)=>{

          // pericias_importantes -> perícias da ocupação
          // lista_reduzida -> gerais

          do {

            let pode_usar_geral = false;
            if (outras_pericias > 0) {
              pode_usar_geral = (Math.floor(Math.random() * 10) > 5);
              outras_pericias = outras_pericias - 1;
            }

            sortearPericia(atributos,pontos,pericias,lista_reduzida,pericias_importantes,pode_usar_geral,true,(r_pontos)=>{
              pontos = r_pontos;

              if (pontos <= 0) {
                callback(pericias);
              }
            });

          } while (pontos > 0);

        });
      });
    });
  });

}

function ajusteFinalPericiais(pericias_calculadas,callback) {
  let pericias = {};
  let pericias_ordenadas = {};

  pericias_calculadas.forEach((pericia, index_pericia) => {
    pericias[pericia['Perícia']] = dividirPericia(pericia['Regular']);

    if (index_pericia == (pericias_calculadas.length - 1)) {

      let lista_nomes = pericias_calculadas.map(entry => entry['Perícia']);
      lista_nomes.sort();

      lista_nomes.forEach((nome, index_nome) => {
        pericias_ordenadas[nome] = pericias[nome];

        if (index_nome == (lista_nomes.length - 1)) {
          callback(pericias_ordenadas);
        }
      });
    }
  });
}

/* ----------------------------------------------------------- */

const EQUIPAMENTOS = {
  armas_fogo: {
    'Armas de Fogo (Pistolas)': [
      { 'Nome': '.22 Curta Automática', 'Dano': '1D6', 'Alcance Base': '10 metros', 'Usos por Rodada': '1 (3)', 'Munição na Arma': '6', 'Defeito': '100' },
      { 'Nome': '.25 Derringer (1C)', 'Dano': '1D6', 'Alcance Base': '3 metros', 'Usos por Rodada': '1', 'Munição na Arma': '1', 'Defeito': '100' },
      { 'Nome': 'Revólver .32', 'Dano': '1D8', 'Alcance Base': '15 metros', 'Usos por Rodada': '1 (3)', 'Munição na Arma': '6', 'Defeito': '100' },
      { 'Nome': 'Revólver 7.65mm', 'Dano': '1D8', 'Alcance Base': '15 metros', 'Usos por Rodada': '1 (3)', 'Munição na Arma': '6', 'Defeito': '100' },
      { 'Nome': 'Revólver .38', 'Dano': '1D10', 'Alcance Base': '15 metros', 'Usos por Rodada': '1 (3)', 'Munição na Arma': '6', 'Defeito': '100' },
      { 'Nome': 'Revólver 9mm', 'Dano': '1D10', 'Alcance Base': '15 metros', 'Usos por Rodada': '1 (3)', 'Munição na Arma': '6', 'Defeito': '100' },
      { 'Nome': 'Luger Modelo P08', 'Dano': '1D10', 'Alcance Base': '15 metros', 'Usos por Rodada': '1 (3)', 'Munição na Arma': '8', 'Defeito': '99' },
      { 'Nome': 'Revólver .41', 'Dano': '1D10', 'Alcance Base': '15 metros', 'Usos por Rodada': '1 (3)', 'Munição na Arma': '8', 'Defeito': '100' },
    ],
    'Armas de Fogo (Espingardas)': [
      { 'Nome': 'Espingarda Calibre 20 (2C)', 'Dano': '2D6/1D6/1D3', 'Alcance Base': '10/20/50 metros', 'Usos por Rodada': '1 ou 2', 'Munição na Arma': '2', 'Defeito': '100' },
      { 'Nome': 'Espingarda Calibre 16 (2C)', 'Dano': '2D6+2/1D6+1/1D4', 'Alcance Base': '10/20/50 metros', 'Usos por Rodada': '1 ou 2', 'Munição na Arma': '2', 'Defeito': '100' },
      { 'Nome': 'Espingarda Calibre 12 (2C)', 'Dano': '4D6/2D6/1D6', 'Alcance Base': '10/20/50 metros', 'Usos por Rodada': '1 ou 2', 'Munição na Arma': '2', 'Defeito': '100' },
      { 'Nome': 'Escopeta Calibre 12 (2C serrada)', 'Dano': '4D6/1D6', 'Alcance Base': '5/10 metros', 'Usos por Rodada': '1 ou 2', 'Munição na Arma': '2', 'Defeito': '100' },
    ]
  },
  armas_comuns: [
    { 'Nome': 'Soqueira', 'Dano': '1D3+1+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
    { 'Nome': 'Cassetete', 'Dano': '1D8+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
    { 'Nome': 'Porrete grande', 'Dano': '1D8+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
    { 'Nome': 'Bastão de baseball', 'Dano': '1D8+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
    { 'Nome': 'Bastão de críquete', 'Dano': '1D8+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
    { 'Nome': 'Porrete pequeno', 'Dano': '1D6+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
    { 'Nome': 'Facão', 'Dano': '1D8+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
    { 'Nome': 'Faca de Acampamento', 'Dano': '1D4+2+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
    { 'Nome': 'Canivete', 'Dano': '1D4+DX', 'Alcance Base': 'Toque', 'Usos por Rodada': '1', 'Munição na Arma': '', 'Defeito': '' },
  ],
  ferramentas: [
    'Kit de Ferramentas (20 ferramentas)',
    'Broca Manual (mais 8 brocas)',
    'Polia Grande de Aço',
    'Cadeado',
    'Corda (15 metros)',
    'Corrente Leve (1 metro)',
    'Kit de Ferramentas de Relojoeiro',
    'Pé-de-cabra',
    'Serra de Mão',
    'Maçarico à Gasolina',
    'Luvas de Eletricista',
    'Cinto de Ferramentas',
    'Alça de Segurança',
    'Talabarte e cinto',
    'Conjunto de 48 ferramentas de Joalheria',
    'Lixadeira',
    'Pá',
    'Caixa de Ferramentas',
    'Ferramentas Caseiras',
  ],
  ferramentas_investigadores: [
    'Algemas',
    'Chave Extra de Algema',
    'Apito de Polícia',
    'Ditafone',
    'Gravador Magnético',
    'Relógio de Pulso',
    'Relógio de Bolso de Ouro',
    'Caneta Tinteiro de Auto-enchimento',
    'Lapiseira',
    'Quadro Negro Portátil',
    'Camisa de Força',
    'Caderno de Rascunho',
    'Trajes Completos de Mergulho',
    'Máquina de Escrever Remington',
    'Máquina de Escrever Harris',
    'Microscópio de Bolso',
    'Microscópio de Mesa de 110x',
    'Cofre de Chão (450 kg)',
    'Guarda-chuva',
    'Narguilé (cachimbo oriental)',
    'Cigarros (maço)',
    'Caixa de Charutos',
    'Dicionário Completo',
    'Enciclopédia de 10 volumes',
    'Respirador de Espuma',
    'Lupa de Bolso',
    'Bíblia',
    'Maleta',
    'Globo Terrestre em Suporte',
    'Mesa de Escrita Dobrável',
    'Estante de Carvalho com Porta de Vidro',
    'Carrinho de Bebê',
    'Extintor de Incêndio',
    'Químico',
    'Óculos de Relojoeiro',
    'Kit de Cozinha',
    'Fogão de Acampamento',
    'Garrafa Térmica',
    'Banheira Dobrável',
    'Cobertor Impermeável',
    'Cama Dobrável',
    'Lâmpada de Carbeto',
    'Lata de Carbeto (1 kg)',
    'Holofote',
    'Lanterna à Gasolina',
    'Lanterna à Querosene',
    'Lanterna Furta-Fogo',
    'Tocha Elétrica',
    'Baterias',
    'Lanterna Caneta Elétrica',
    'Sinalizador (Descartável)',
    'Telescópio',
    'Binóculo Simples (3x)',
    'Binóculo Simples (6x)',
    'Binóculos de Qualidade',
    'Bússola de Bolso',
    'Bússola com Tampa',
    'Faca de Caça',
    'Faca de Bolso',
    'Machadinha',
    'Armadilha de Captura de Pequenos Animais',
    'Armadilha De Mola Para Animais',
    'Armadilha de Ursos',
    'Vara de Pesca e Roldana',
    'Barbante de Cânhamo',
    'Pedômetro',
    'Mala de Ombro Pesada',
    'Velas de Quinze Horas (12)',
    'Caixa de Fósforos à Prova d\'Água',
  ],
  equipamento_medico: [
    'Aspirina (12 comprimidos)',
    'Sais de Epsom',
    'Remédio para Indigestão',
    'Laxante, Remédio Natural',
    'Valise Médica',
    'Fórceps',
    'Conjunto de Bisturis',
    'Seringas Hipodérmicas',
    'Atomizador',
    'Ataduras de Gaze (5 Metros)',
    'Termômetro Clínico',
    'Álcool (meio galão)',
    'Seringa de Borracha',
    'Penico',
    'Cadeira de Rodas',
    'Bengala',
    'Emplastro Adesivo',
    'Cinta Anatômica Metálica',
    'Tornozeleira de Couro',
  ],
};

function definirPadraoDeVida(atributos,pericias,callback) {
  let nivel_credito = pericias['Nível de Crédito']['Regular'];

  atributos['Padrão de Vida'] = {};
  atributos['Padrão de Vida']['Nível de Crédito'] = nivel_credito;

  if (nivel_credito == 0) {
    atributos['Padrão de Vida']['Nível de Gastos'] = '$0,50 (Pobretão)';
    atributos['Padrão de Vida']['Dinheiro'] = '$0,50';
    atributos['Padrão de Vida']['Patrimônio'] = 'Nenhum';
    atributos['Padrão de Vida']['Descrição'] = 'Uma pessoa que sequer pode pagar pelo nível de “pobre” é considerada um pobretão.';
    atributos['Padrão de Vida']['Acomodações'] = 'Essa pessoa viveria na rua.';
    atributos['Padrão de Vida']['Viagem'] = 'A pé, pegando carona ou clandestino em um trem ou navio.';
    atributos['Padrão de Vida']['Hospedagem'] = 'Sem residência';
    atributos['Padrão de Vida']['Transporte'] = 'Sem transporte';
  } else if (nivel_credito <= 9) {
    atributos['Padrão de Vida']['Nível de Gastos'] = '$2 (Pobre)';
    atributos['Padrão de Vida']['Dinheiro'] = `$${nivel_credito * 1}`;
    atributos['Padrão de Vida']['Patrimônio'] = `$${nivel_credito * 10}`;
    atributos['Padrão de Vida']['Descrição'] = 'Capaz de pagar por um teto qualquer sobre a cabeça e pelo menos uma parca refeição por dia.';
    atributos['Padrão de Vida']['Acomodações'] = 'Restrito ao aluguel mais barato ou a um albergue sujo.';
    atributos['Padrão de Vida']['Viagem'] = 'Transporte público do tipo mais barato. Qualquer veículo possuído será barato e não confiável.';
    let residencia = (Math.floor(Math.random() * 4) > 1) ? 'Casa ($55,00 aluguel por mês)': 'Flat ($12,50 de aluguel por semana)';
    atributos['Padrão de Vida']['Hospedagem'] = residencia;
    atributos['Padrão de Vida']['Transporte'] = 'Sem transporte';
  } else if (nivel_credito <= 49) {
    atributos['Padrão de Vida']['Nível de Gastos'] = '$10 (Médio)';
    atributos['Padrão de Vida']['Dinheiro'] = `$${nivel_credito * 2}`;
    atributos['Padrão de Vida']['Patrimônio'] = `$${nivel_credito * 50}`;
    atributos['Padrão de Vida']['Descrição'] = 'Um nível razoável de conforto, três refeições por dia e uma diversão ocasional.';
    atributos['Padrão de Vida']['Acomodações'] = 'Uma casa ou apartamento comum, alugado ou não. Pode ficar em hotéis com preços moderados.';
    atributos['Padrão de Vida']['Viagem'] = 'Formas padrão de viagem podem ser usadas, mas não de primeira classe. Em tempos modernos, esta pessoa provavelmente possuiria um carro confiável.';
    let residencia = (Math.floor(Math.random() * 4) > 1) ? 'Casa ($55,00 aluguel por mês)': 'Casa Mediana';
    atributos['Padrão de Vida']['Hospedagem'] = residencia;
    let transporte = (Math.floor(Math.random() * 4) > 1) ? 'Sem transporte': 'Motocicleta Norton';
    atributos['Padrão de Vida']['Transporte'] = transporte;
  } else if (nivel_credito <= 89) {
    atributos['Padrão de Vida']['Nível de Gastos'] = '$50 (Abastado)';
    atributos['Padrão de Vida']['Dinheiro'] = `$${nivel_credito * 5}`;
    atributos['Padrão de Vida']['Patrimônio'] = `$${nivel_credito * 500}`;
    atributos['Padrão de Vida']['Descrição'] = 'Este nível de riqueza oferece luxo e conforto.';
    atributos['Padrão de Vida']['Acomodações'] = 'Uma residência de tamanho considerável, talvez com alguma ajuda doméstica (mordomo, governanta, faxineiro, jardineiro etc.). Possivelmente uma segunda casa no interior ou em outro país. Hospeda-se em hotéis caros.';
    atributos['Padrão de Vida']['Viagem'] = 'Primeira classe. Esta pessoa poderia ser proprietária de um carro caro ou equivalente.';
    let residencia = (Math.floor(Math.random() * 4) > 1) ? 'Casa de Campo': 'Casa Grande';
    atributos['Padrão de Vida']['Hospedagem'] = residencia;
    let transporte = (Math.floor(Math.random() * 4) > 1) ? 'Ford Modelo A': 'Cadillac Type 55';
    atributos['Padrão de Vida']['Transporte'] = transporte;
  } else if (nivel_credito <= 98) {
    atributos['Padrão de Vida']['Nível de Gastos'] = '$250 (Rico)';
    atributos['Padrão de Vida']['Dinheiro'] = `$${nivel_credito * 20}`;
    atributos['Padrão de Vida']['Patrimônio'] = `$${nivel_credito * 2000}`;
    atributos['Padrão de Vida']['Descrição'] = 'Este nível de riqueza proporciona grande luxo e conforto. Não há necessidade de se contabilizar gastos com acomodações, comida ou despesas de viagem, desde que os gastos do investigador estejam dentro dos limites de seu padrão de vida. Consulte a Tabela II: Dinheiro e Patrimônio (página 47) caso o investigador deseje fazer compras mais significativas.';
    atributos['Padrão de Vida']['Acomodações'] = 'Uma residência de luxo ou propriedade com abundante ajuda doméstica (mordomo, serviçais, faxineiro, jardineiro etc.). Outras residências no interior e em outros países. Fica nos melhores hotéis.';
    atributos['Padrão de Vida']['Viagem'] = 'Primeira classe. Em tempos modernos, essa pessoa seria proprietária de vários carros de luxo.';
    let residencia = (Math.floor(Math.random() * 4) > 1) ? 'Mansão': 'Hotel de Luxo';
    atributos['Padrão de Vida']['Hospedagem'] = residencia;
    let transporte = (Math.floor(Math.random() * 4) > 1) ? 'Oldsmobile 43-AT': 'Chrysler Modelo F-58';
    atributos['Padrão de Vida']['Transporte'] = transporte;
  } else if (nivel_credito <= 99) {
    atributos['Padrão de Vida']['Nível de Gastos'] = '$5000 (Ricaço)';
    atributos['Padrão de Vida']['Dinheiro'] = '$50.000';
    atributos['Padrão de Vida']['Patrimônio'] = `$${4 * Math.floor(Math.random() * 4)} milhões`;
    atributos['Padrão de Vida']['Descrição'] = 'Como o Rico, mas dinheiro realmente não é problema. Os indivíduos desta categoria estão entre os mais ricos do mundo.';
    atributos['Padrão de Vida']['Acomodações'] = 'Uma residência de luxo ou propriedade com abundante ajuda doméstica (mordomo, serviçais, faxineiro, jardineiro etc.). Outras residências no interior e em outros países. Fica nos melhores hotéis.';
    atributos['Padrão de Vida']['Viagem'] = 'Primeira classe. Em tempos modernos, essa pessoa seria proprietária de vários carros de luxo.';
    atributos['Padrão de Vida']['Hospedagem'] = 'Mansão';
    let transporte = (Math.floor(Math.random() * 4) > 1) ? 'Hudson Super Six Series J': 'Duesenberg J';
    atributos['Padrão de Vida']['Transporte'] = transporte;
  } else {
    console.error(`Ocorreu um erro ao assegurar o nome da perícia ${nome_pericia}`);
    atributos['Padrão de Vida']['Nível de Gastos'] = 'Pobre';
    atributos['Padrão de Vida']['Dinheiro'] = `$${nivel_credito * 1}`;
    atributos['Padrão de Vida']['Patrimônio'] = `$${nivel_credito * 10}`;
    atributos['Padrão de Vida']['Descrição'] = 'Capaz de pagar por um teto qualquer sobre a cabeça e pelo menos uma parca refeição por dia.';
    atributos['Padrão de Vida']['Acomodações'] = 'Restrito ao aluguel mais barato ou a um albergue sujo.';
    atributos['Padrão de Vida']['Viagem'] = 'Transporte público do tipo mais barato. Qualquer veículo possuído será barato e não confiável.';
    let residencia = (Math.floor(Math.random() * 4) > 1) ? 'Casa ($55,00 aluguel por mês)': 'Flat ($12,50 de aluguel por semana)';
    atributos['Padrão de Vida']['Hospedagem'] = residencia;
    atributos['Padrão de Vida']['Transporte'] = 'Sem transporte';
  }

  callback();
}

function definirEquipamentos(pericias,ocupacao,callback) {
  let equipamentos = [];
  let armas = [];

  ocupacao.equipamentos.forEach((tipo_equipamento, index_tipo_equipamento) => {
    let chance = ocupacao.chances_equipamentos[index_tipo_equipamento];

    let pegar_equipamento = (chance >= Math.floor(Math.random() * 100));

    if (pegar_equipamento) {

      if (tipo_equipamento == 'armas_fogo') {

        let qual_arma = 'Armas de Fogo (Pistolas)';

        let pistolas = 0;
        if ('Armas de Fogo (Pistolas)' in pericias) {
          pistolas = pericias['Armas de Fogo (Pistolas)']['Regular'];
        }

        let espingardas = 0;
        if ('Armas de Fogo (Espingardas)' in pericias) {
          espingardas = pericias['Armas de Fogo (Espingardas)']['Regular'];
        }

        if (espingardas > pistolas) {
          qual_arma = 'Armas de Fogo (Espingardas)';
        }

        let array_armas = EQUIPAMENTOS[tipo_equipamento][qual_arma].slice();
        let index_arma = Math.floor(Math.random() * array_armas.length);
        let arma = JSON.parse(JSON.stringify(array_armas[index_arma]));
        armas.push(arma);

      } else if (tipo_equipamento == 'armas_comuns') {

        let array_armas = EQUIPAMENTOS[tipo_equipamento].slice();
        let index_arma = Math.floor(Math.random() * array_armas.length);
        let arma = JSON.parse(JSON.stringify(array_armas[index_arma]));
        armas.push(arma);

      } else {

        let itens = EQUIPAMENTOS[tipo_equipamento].slice();
        let index_item = Math.floor(Math.random() * itens.length);
        equipamentos.push(itens[index_item]);

      }

    }

    if (index_tipo_equipamento == (ocupacao.equipamentos.length - 1)) {
      callback(equipamentos,armas);
    }
  });
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

function dividirPericia(valor) {
  let metade = Math.floor(valor / 2);
  let quinto = Math.floor(valor / 5);
  return { 'Regular': valor, 'Difícil': metade, 'Extremo': quinto };
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

const ANTECEDENTES = {
  'Descrição Pessoal': [
    'Grosseiro',
    'Bonito',
    'Desagradável',
    'Simpático',
    'Glamoroso',
    'Cara de bebê',
    'Esperto',
    'Desleixado',
    'Chato',
    'Sujo',
    'Estonteante',
    'Reservado',
    'Juvenil',
    'Cansado',
    'Roliço',
    'Robusto',
    'Peludo',
    'Magro',
    'Elegante',
    'Desonesto',
    'Atarracado',
    'Pálido',
    'Carrancudo',
    'Ordinário',
    'Rosado',
    'Bronzeado',
    'Enrugado',
    'Estufado',
    'Tímido',
    'Perspicaz',
    'Forte',
    'Delicado',
    'Musculoso',
    'Encorpado',
    'Desajeitado',
    'Frágil',
  ],
  'Ideologia/Crenças': [
    'Existe um poder superior que você venera e para o qual ora (por exemplo, Vishnu, Jesus Cristo, Haile Selassie I).',
    'A humanidade pode viver bem sem religiões (por exemplo, ateu convicto, humanista, secularista).',
    'A ciência tem todas as respostas. Escolha um aspecto particular de interesse (por exemplo, evolução, criogenia, exploração espacial).',
    'Acredita no destino (por exemplo, carma, sistema de classes, supersticioso).',
    'Membro de uma sociedade ou sociedade secreta (por exemplo, Maçom, Instituto das Mulheres, Anonymous).',
    'Há um mal da sociedade que deve ser eliminado. Que mal é este? (por exemplo, drogas, violência, racismo).',
    'O oculto (por exemplo, astrologia, espiritualismo, tarô).',
    'Política (por exemplo, conservador, socialista, liberal).',
    'Dinheiro é poder, e vou conseguir tanto quanto puder (por exemplo, ganancioso, empreendedor, implacável).',
    'Militante/Ativista (por exemplo, feminismo, direitos iguais, poder sindical).',
  ],
  'Pessoas Significativas': [
    'Pais (por exemplo, mãe, pai, madrasta).',
    'Avós (por exemplo, avó materna, avô paterno).',
    'Irmão (por exemplo, irmão, meio-irmão, irmã de criação).',
    'Filho ou filha.',
    'Companheiro (por exemplo, cônjuge, noivo, amante).',
    'Pessoa que lhe ensinou sua mais alta perícia ocupacional. Identifique a perícia e pondere sobre quem lhe ensinou (por exemplo, uma professora, um tutor, seu pai).',
    'Amigo de infância (por exemplo, colega de classe, vizinho, amigo imaginário).',
    'Uma pessoa famosa. Seu ídolo ou herói. Vocês podem jamais ter sequer se encontrado (por exemplo, estrela de cinema, político, músico).',
    'Um colega investigador em seu jogo. Escolha um ou determine aleatoriamente.',
    'Um personagem não-jogador (PNJ) do jogo. Peça ao Guardião para escolher um para você.',
  ],
  'Por que essa pessoa é importante?': [
    'Você está em dívida para com eles. Como lhe ajudaram? (por exemplo, financeiramente, eles o protegeram em momentos difíceis, arranjaram-lhe seu primeiro emprego).',
    'Eles te ensinaram algo. O quê? (por exemplo, uma perícia, amar, ser um homem).',
    'Eles dão significado à sua vida. Como? (por exemplo, você aspira ser como eles, você procura estar com eles, você deseja fazê-los felizes).',
    'Você os prejudicou e busca a reconciliação. O que você fez? (por exemplo, roubou dinheiro deles, informou a polícia sobre eles, recusou-se a ajudar quando estavam desesperados).',
    'Vivência compartilhada. O quê? (por exemplo, vocês viveram momentos difíceis juntos, cresceram juntos, serviram juntos na guerra).',
    'Você procura se provar para eles. Como? (por exemplo, conseguindo um bom trabalho, encontrando um bom cônjuge, entrando em uma boa universidade).',
    'Você os idolatra (por exemplo, por sua fama, por sua beleza, por seu trabalho).',
    'Um sentimento de arrependimento (por exemplo, você deveria ter morrido em seu lugar, você se arrependeu de algo que disse, você não se prestou a ajudá-los quando teve a chance).',
    'Você quer provar que é melhor do que eles. Qual o defeito deles? (por exemplo, preguiçoso, bêbado, desamoroso).',
    'Eles o traíram e você busca vingança. Pelo que você os culpa? (por exemplo, morte de um ente querido, sua ruína financeira, ruptura conjugal).',
  ],
  'Locais Importantes': [
    'Seu lugar de aprendizagem (por exemplo, escola, universidade, tutelagem).',
    'Sua cidade natal (por exemplo, vila rural, cidade mercantil, cidade grande).',
    'O lugar em que você conheceu seu primeiro amor (por exemplo, um concerto de música, viagem de férias, um abrigo antibombas).',
    'Um lugar para contemplação silenciosa (por exemplo, a biblioteca, caminhadas em sua propriedade no interior, pescar).',
    'Um lugar para se socializar (por exemplo, clube de cavalheiros, bar local, casa do tio).',
    'Um lugar relacionado com a sua ideologia/crença (por exemplo, igreja paroquial, Meca, Stonehenge).',
    'O túmulo de uma pessoa significativa. Quem? (por exemplo, seu pai ou sua mãe, um filho, um amante).',
    'A casa de sua família (por exemplo, uma propriedade rural, um apartamento alugado, o orfanato onde você foi criado).',
    'O lugar onde você foi mais feliz em sua vida (por exemplo, o banco do parque onde você deu seu primeiro beijo, sua universidade).',
    'Seu local de trabalho (por exemplo, o escritório, biblioteca, banco).',
  ],
  'Pertences Queridos': [
    'Um item conectado com sua perícia mais alta (por exemplo, terno caro, identidade falsa, soqueira de bronze).',
    'Um item essencial para a sua ocupação (por exemplo, maleta de médico, carro, gazuas).',
    'Uma lembrança de sua infância (por exemplo, quadrinhos, canivete, moeda de sorte).',
    'Uma lembrança de uma pessoa que partiu (por exemplo, joias, uma fotografia em sua carteira, uma carta).',
    'Algo que lhe foi dado por sua Pessoa Significativa (por exemplo, um anel, um diário, um mapa).',
    'Sua coleção. O que ela é? (por exemplo, passagens de ônibus, bichos de pelúcia, discos de música).',
    'Algo que você encontrou, mas não sabe o que é – você procura respostas (por exemplo, uma carta escrita em idioma desconhecido que você encontrou em um armário, um tubo curioso de origem desconhecida encontrado entre os pertences do seu falecido pai, uma curiosa bola prateada que você desencavou em seu jardim).',
    'Um item esportivo (por exemplo, um bastão de críquete, bola de beisebol autografada, uma vara de pesca).',
    'Uma arma (por exemplo, revólver de serviço, seu antigo rifle de caça, a faca escondida em sua bota).',
    'Um animal de estimação (por exemplo, um cão, um gato, um cágado).',
  ],
  'Características': [
    'Generoso (por exemplo, generoso com gorjetas, ajuda sempre uma pessoa necessitada, filantropo).',
    'Bom com Animais (por exemplo, ama gatos, cresceu em uma fazenda, bom com cavalos).',
    'Sonhador (por exemplo, viaja para o mundo da lua, visionário, altamente criativo).',
    'Hedonista (por exemplo, vida e alma das festas, bêbado divertido, viva rápido e morra jovem).',
    'Apostador e amante do perigo (por exemplo, jogador de pôquer, experimenta de tudo, vive no limite).',
    'Bom Cozinheiro (por exemplo, assa bolos maravilhosos, consegue fazer uma refeição com quase nada, paladar refinado).',
    'Galanteador(a) (por exemplo, voz charmosa, olhos encantadores).',
    'Leal (por exemplo, fica ao lado dos amigos, nunca quebra uma promessa, morreria pelo que acredita).',
    'Uma boa reputação (por exemplo, o melhor orador em festas de gala do país, o mais piedoso dos homens, não teme o perigo).',
    'Ambicioso (por exemplo, alcançar um objetivo, tornar-se o chefe, ter de tudo).',
  ]
};

function definirAntecedentes(callback) {
  let array_antecedentes = Object.keys(ANTECEDENTES);
  let antecedentes = {};

  array_antecedentes.forEach((antecedente, index_antecedente) => {
    let index_sorteado = Math.floor(Math.random() * ANTECEDENTES[antecedente].length);
    antecedentes[antecedente] = ANTECEDENTES[antecedente][index_sorteado];

    if (index_antecedente == (array_antecedentes.length - 1)) {
      callback(antecedentes);
    }
  });
}

function definirNomeENascimento(genero,idade,callback) {
  /*
  let index_nome = Math.floor(Math.random() * NOMES.length);
  let nome = NOMES[index_nome];

  let index_sobrenome = Math.floor(Math.random() * SOBRENOMES.length);
  let sobrenome = SOBRENOMES[index_sobrenome];

  callback(`${nome} ${sobrenome}`,formattedToday);
  */

  nameGen(genero,nome=>{
    let ano_nascimento = 1920 - idade;
    let start = new Date(ano_nascimento, 0, 1);
    let end = new Date(ano_nascimento, 11, 31)
    let data_nascimento = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const yyyy = data_nascimento.getFullYear();
    let mm = data_nascimento.getMonth() + 1;
    let dd = data_nascimento.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    let formattedToday = dd + '/' + mm + '/' + yyyy;

    callback(nome,formattedToday);
  });
}

/* ----------------------------------------------------------- */

/*
  https://donjon.bin.sh/blade_runner/npc/rpc.cgi
  https://donjon.bin.sh/
*/

function obterImagem(callback) {
  try {
    fetch('https://flechamagica.com.br/fotos/api.php', { method: 'GET' })
    .then(function(response) { return response.json(); })
    .then(function(json) {
      callback(json.url,json.genero);
    })
    .catch((error) => {
      console.error(error);
      callback('img/default_user.jpg','Masculino');
    });
  } catch (error) {
    console.error(error);
    callback('img/default_user.jpg','Masculino');
  }
};

/* ----------------------------------------------------------- */

function rolarPersonagem(callback) {
  rolarAtributos((atributos)=>{
    selecionarOcupacao((nome_ocupacao,ocupacao)=>{
      atributos['Informações']['Ocupação'] = nome_ocupacao;
      atributos['Pontos de Perícia']['Perícias Ocupacionais'] = ocupacao.pontos_pericias_ocupacionais(atributos);
      logger(`Ocupação: ${atributos['Informações']['Ocupação']}`);

      obterPericiasIniciais(atributos,ocupacao,(pericias_iniciais)=>{
        pontuarInteressesPessoais(atributos,pericias_iniciais,(pericias_pessoais)=>{
          pontuarPericiasOcupacionais(ocupacao,atributos,pericias_pessoais,(pericias_calculadas)=>{
            ajusteFinalPericiais(pericias_calculadas,(pericias)=>{
              definirPadraoDeVida(atributos,pericias,(nivel_credito)=>{
                definirEquipamentos(pericias,ocupacao,(equipamentos,armas)=>{
                  definirAntecedentes(antecedentes=>{

                    obterImagem((url,genero)=>{

                      definirNomeENascimento(genero,atributos['Informações']['Idade'],(nome,data_nascimento)=>{

                        let personagem = atributos;
                        atributos['Informações']['Imagem'] = url;
                        atributos['Informações']['Gênero'] = genero;
                        atributos['Informações']['Nome'] = nome;
                        atributos['Informações']['Data de Nascimento'] = data_nascimento;
                        personagem['Perícias'] = pericias;
                        personagem['Equipamentos'] = equipamentos;
                        personagem['Armas'] = armas;
                        personagem['Antecedentes'] = antecedentes;

                        console.log('Personagem:');
                        console.log(JSON.stringify(personagem, null, 2));

                        callback(personagem);

                      });

                    });

                  });
                });
              });
            });
          });
        });
      });

    });
  });
}

/* ----------------------------------------------------------- */

function carregarImagem(url,callback) {
  var img = new Image();
  img.onload = function() {
    document.getElementById('fotografia').style.backgroundImage = `url(${img.src})`;
    callback();
  }
  img.src = url;
}

function preencherTela() {
  document.getElementById('loading').style.display = 'block';
  rolarPersonagem(personagem=>{
    carregarImagem(personagem['Informações']['Imagem'],()=>{
      document.getElementById('nome_personagem').value = personagem['Informações']['Nome'];

      document.getElementById('loading').style.display = 'none';
    });
  });
}
