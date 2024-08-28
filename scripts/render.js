
function createOption(select,value) {
  let option = document.createElement('option');
  option.value = value;
  option.innerHTML = value;

  if ( (LOG) && (value == 'Ocupação de Teste') ) {
    option.selected = 'selected';
  }

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

function carregarImagem(url,callback) {
  var img = new Image();
  img.onload = function() {
    document.getElementById('atributo|fotografia').style.backgroundImage = `url(${img.src})`;
    callback();
  }
  img.src = url;
}

function definirAtributo(personagem,id,atributo) {
  document.querySelector(`#${id} input[type=number].regular`).value = personagem['Atributos'][atributo]['Atributo'];
  document.querySelector(`#${id} input[type=number].dificil`).value = personagem['Atributos'][atributo]['Metade'];
  document.querySelector(`#${id} input[type=number].extremo`).value = personagem['Atributos'][atributo]['Quinto'];
}

function definirPericia(personagem,id,pericia) {
  document.querySelector(`#${id} input[type=number].regular`).value = personagem['Perícias'][pericia]['Regular'];
  document.querySelector(`#${id} input[type=number].dificil`).value = personagem['Perícias'][pericia]['Difícil'];
  document.querySelector(`#${id} input[type=number].extremo`).value = personagem['Perícias'][pericia]['Extremo'];
}

function renderPericia(nome_pericia,pericia,callback) {
  let qtde_espacos = (nome_pericia.match(new RegExp(" ", "g")) || []).length;
  let class_label = 'uma-palavra';
  if (qtde_espacos == 2) {
    class_label = 'duas-palavras';
  } else if (qtde_espacos > 2) {
    class_label = 'tres-palavras';
  }

  let jah_possui_paranteses = false;
  if ( (nome_pericia == 'Língua (Nativa)') || (nome_pericia == 'Língua (Outra)') ) {
    jah_possui_paranteses = true;
  }

  let possui_paranteses = false;
  let parenteses_abertura = nome_pericia.indexOf("(");
  if (parenteses_abertura > -1) {
    possui_paranteses = !jah_possui_paranteses;
  }

  let partes = nome_pericia.split(' ');
  let nome_formatado_partes = '';
  partes.forEach((parte, index_parte) => {

    if ((nome_pericia == 'Armas de Fogo (Submetralhadoras)') && (parte == '(Submetralhadoras)')) {
      nome_formatado_partes += `<span class="menor4">${parte}</span>`;
    } else {
      if (parte == '(Lança-Chamas)') {
        parte = '<br>(Lança-Chamas)';
      }

      if (parte == 'Maquinário') {
        nome_formatado_partes += parte;
      } else {
        if (parte.length > 13) {
          nome_formatado_partes += `<span class="menor3">${parte}</span>`;
        } else if (parte.length > 11) {
          nome_formatado_partes += `<span class="menor2">${parte}</span>`;
        } else if (parte.length > 9) {
          nome_formatado_partes += `<span class="menor1">${parte}</span>`;
        } else {
          nome_formatado_partes += parte;
        }
      }
    }

    if (index_parte < (partes.length - 1)) {
      nome_formatado_partes += ' ';
    }

    if (index_parte == (partes.length - 1)) {

      let text_checkbox = `<input type="checkbox" class="nome" id="atributo|Perícias_${nome_pericia}_Usada com Sucesso">`;
      if ( (nome_pericia == 'Mythos de Cthulhu') || (nome_pericia == 'Nível de Crédito') ) {
        text_checkbox = '<span class="checkbox">&nbsp;</span>';
      }

      callback(`
      <div class="campo">
        <label class="${class_label}">
          ${text_checkbox}
          <span class="nome">${nome_formatado_partes}</span>
        </label>
        <div class="valores">
          <input type="number" class="regular" id="atributo|Perícias_${nome_pericia}_Regular" value="${pericia['Regular']}">
          <input type="number" class="dificil" id="atributo|Perícias_${nome_pericia}_Difícil" value="${pericia['Difícil']}">
          <input type="number" class="extremo" id="atributo|Perícias_${nome_pericia}_Extremo" value="${pericia['Extremo']}">
        </div>
      </div>
      `);
    }
  });
}

function renderPericiais(personagem,callback) {
  let tags_pericias = '';
  let array_pericias = Object.keys(personagem['Perícias']);

  array_pericias.forEach((nome_pericia, index_pericia) => {
    renderPericia(nome_pericia,personagem['Perícias'][nome_pericia],(innerHTML)=>{
      tags_pericias = tags_pericias + innerHTML;

      if (index_pericia == (array_pericias.length - 1)) {
        callback(tags_pericias);
      }
    });
  });
}

function renderArmas(armas,callback) {
  let qtde = 6;
  let array_qtde = [...new Array(qtde).keys()];
  let innerHTML = '';

  array_qtde.forEach((tag, index) => {

    let nome = '';
    let dano = '';
    let alcance = '';
    let ataques = '';
    let municao = '';
    let defeito = '';

    if (index < armas.length) {
      nome = armas[index]['Nome'];
      dano = armas[index]['Dano'];
      alcance = armas[index]['Alcance Base'];
      ataques = armas[index]['Usos por Rodada'];
      municao = armas[index]['Munição na Arma'];
      defeito = armas[index]['Defeito'];
    }

    innerHTML += `
    <div class="arma">
      <div class="parte parte-nome">
        <label class="sobre">Arma</label>
        <input type="text" class="valor left" id="atributo|Armas_${index}_Nome" value="${nome}">
      </div>
      <div class="parte parte-dano">
        <label class="sobre">Dano</label>
        <input type="text" class="valor pequeno" id="atributo|Armas_${index}_Dano" value="${dano}">
      </div>

      <div class="parte">
        <label class="sobre">Alcance</label>
        <input type="text" class="valor pequeno" id="atributo|Armas_${index}_Alcance Base" value="${alcance}">
      </div>
      <div class="parte">
        <label class="sobre">Ataques</label>
        <input type="text" class="valor" id="atributo|Armas_${index}_Usos por Rodada" value="${ataques}">
      </div>
      <div class="parte">
        <label class="sobre">Munição</label>
        <input type="text" class="valor" id="atributo|Armas_${index}_Munição na Arma" value="${municao}">
      </div>
      <div class="parte">
        <label class="sobre">Defeito</label>
        <input type="text" class="valor" id="atributo|Armas_${index}_Defeito" value="${defeito}">
      </div>
    </div>
    `;

    if (index == (array_qtde.length - 1)) {
      callback(innerHTML);
    }
  });
}

function renderAntecedentes(antecedentes,conexoes_chave,callback) {
  let innerHTML = '';
  let array = Object.keys(antecedentes);

  array.forEach((antecedente, index) => {

    if (antecedente != 'Por que essa pessoa é importante?') {
      let tag_conexao_chave = '';
      if (
        (antecedente == 'Ideologia/Crenças') ||
        (antecedente == 'Pessoas Significativas') ||
        (antecedente == 'Locais Importantes') ||
        (antecedente == 'Pertences Queridos')
      ) {
        let checked = '';
        if (conexoes_chave[antecedente]) {
          checked = 'checked="checked"';
        }

        tag_conexao_chave = `
        <label class="conexao-chave">
          <span>Conexão-Chave</span>
          <input type="checkbox" ${checked} id="atributo|Conexões-Chave_${antecedente}">
        </label>
        `;
      }

      let valor = antecedentes[antecedente];
      if (antecedente == 'Pessoas Significativas') {
        // Por que essa pessoa é importante?
        valor += ' ' + antecedentes[array[index+1]];
      }

      innerHTML += `
      <div class="antecedente" id="${antecedente}">
        <div class="parte">
          <label class="sobre">${antecedente}</label>
          ${tag_conexao_chave}
          <textarea class="valor" id="atributo|Antecedentes_${antecedente}">${valor}</textarea>
        </div>
      </div>
      `;
    }

    if (index == (array.length - 1)) {
      callback(innerHTML);
    }
  });
}

/*-----------------------------------------------------------------------------------------*/

function definirPropriedadePersonagem(event,personagem,callback) {
  let tag = event.target;
  let id = tag.id;

  // text, number, checkbox, textarea
  let type = tag.type;

  let valor = '';

  if (type == 'checkbox') {
    valor = tag.checked;
  } else if (type == 'number') {
    valor = parseInt(tag.value);
  } else {
    valor = tag.value;
  }

  // atributo|Informações_Nome
  try {
    let partes_prefixo = id.split('|');
    if (partes_prefixo.length == 2) {

      let partes_campos = partes_prefixo[1].split('_');
      let eh_index = -1;
      if (partes_campos[0] == 'Armas') {
        eh_index = 1;
      }

      let ponteiro = personagem;

      partes_campos.forEach((parte, index_partes) => {

        let parte_ajustada = parte;

        if (eh_index == index_partes) {
          parte_ajustada = parseInt(parte);
        }

        if (index_partes < (partes_campos.length - 1)) {
          ponteiro = ponteiro[parte_ajustada];
        } else {
          ponteiro[parte_ajustada] = valor;

          callback();
        }
      });

    } else {
      console.error(`Ocorreu um erro ao definir a propriedade ${id}`);
      callback();
    }
  } catch (error) {
    console.error(`Ocorreu um erro ao definir a propriedade ${id}`);
    callback();
  }
}

/*-----------------------------------------------------------------------------------------*/

let PERSONAGEM_TRABALHO = {};
const LOCAL_STORAGE = 'personagens';

function bancoObterPersonagens() {
  let personagens = {};
  let dados = localStorage.getItem(LOCAL_STORAGE);

  if (dados === null) {
    localStorage.setItem(LOCAL_STORAGE,JSON.stringify(personagens));
  } else {
    personagens = JSON.parse(dados);
  }

  return personagens;
}

function bancoObterPersonagem(id) {
  let personagens = bancoObterPersonagens();

  if (id in personagens) {
    return personagens[id];
  } else {
    return null;
  }
}

function bancoSalvarPersonagem(personagem) {
  let personagens = bancoObterPersonagens();
  personagens[personagem['Informações']['UUID']] = personagem;
  localStorage.setItem(LOCAL_STORAGE,JSON.stringify(personagens));
}

document.getElementById('salvar').addEventListener('click',event=>{
  event.preventDefault();
  bancoSalvarPersonagem(PERSONAGEM_TRABALHO);
  personagemFoiAlterado(false);
});

document.getElementById('salvar-fab').addEventListener('click',event=>{
  event.preventDefault();
  bancoSalvarPersonagem(PERSONAGEM_TRABALHO);
  personagemFoiAlterado(false);
});

/*-----------------------------------------------------------------------------------------*/

let LISTENERS_FICHA = [];

function personagemFoiAlterado(alterado) {
  if (alterado) {
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvar-fab').style.display = 'block';
  } else {
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvar-fab').style.display = 'none';
  }
}

const FUNCAO = (event) => {
  event.preventDefault();
  definirPropriedadePersonagem(event,PERSONAGEM_TRABALHO,()=>{
    personagemFoiAlterado(true);
    console.log(PERSONAGEM_TRABALHO);
  });
};

function limparListaListeners(callback) {
  if (LISTENERS_FICHA.length == 0) {
    callback();
  } else {
    LISTENERS_FICHA.forEach((tag, index) => {
        tag.removeEventListener('input',FUNCAO);

      if (index == (LISTENERS_FICHA.length - 1)) {
        LISTENERS_FICHA = [];
        callback();
      }
    });
  }
}

function definirListeners(personagem,callback) {
  PERSONAGEM_TRABALHO = personagem;

  limparListaListeners(()=>{
    let tag_ficha = document.querySelector('div.ficha');

    // text, number, checkbox, textarea
    let tags_input = [...tag_ficha.querySelectorAll('input[type=text]')];
    tags_input.push(...[...tag_ficha.querySelectorAll('input[type=number]')]);
    tags_input.push(...[...tag_ficha.querySelectorAll('input[type=checkbox]')]);
    tags_input.push(...[...tag_ficha.querySelectorAll('textarea')]);

    tags_input.forEach((tag_input, index_tag_input) => {

      LISTENERS_FICHA.push(tag_input);
      tag_input.addEventListener('input',FUNCAO);

      if (index_tag_input == (tags_input.length - 1)) {
        callback();
      }
    });
  });
}

/*-----------------------------------------------------------------------------------------*/

function preencherTela() {
  console.log(VERSAO);
  document.getElementById('loading').style.display = 'block';

  if (LOG) {
    document.getElementById('form-mythos').checked = true;
  }

  let jogador = '';

  rolarPersonagem(jogador,personagem=>{

    carregarImagem(personagem['Informações']['Imagem'],()=>{

      document.getElementById('atributo|Informações_UUID').value = personagem['Metadados']['UUID'];
      document.getElementById('atributo|Informações_Jogador').value = jogador;
      document.getElementById('atributo|Informações_Nome').value = personagem['Informações']['Nome'];

      let ocupacao = personagem['Informações']['Ocupação'];
      if (ocupacao == 'Profissional de Entretenimento') {
        ocupacao = 'Entretenimento';
      }

      document.getElementById('atributo|Informações_Ocupação').value = ocupacao;
      document.getElementById('atributo|Informações_Idade').value = personagem['Informações']['Idade'];
      document.getElementById('atributo|Informações_Data de Nascimento').value = personagem['Informações']['Data de Nascimento'];

      definirAtributo(personagem,'atributo_forca','FOR (Força)');
      definirAtributo(personagem,'atributo_destreza','DES (Destreza)');
      definirAtributo(personagem,'atributo_inteligencia','INT (Inteligência)');
      definirAtributo(personagem,'atributo_constituicao','CON (Constituição)');
      definirAtributo(personagem,'atributo_aparencia','APA (Aparência)');
      definirAtributo(personagem,'atributo_poder','POD (Poder)');
      definirAtributo(personagem,'atributo_tamanho','TAM (Tamanho)');
      definirAtributo(personagem,'atributo_educacao','EDU (Educação)');
      document.getElementById('atributo|Atributos Secundários_Taxa de Movimento (MOV)').value = personagem['Atributos Secundários']['Taxa de Movimento (MOV)'];

      document.getElementById('atributo|Atributos Secundários_Pontos de Vida').value = personagem['Atributos Secundários']['Pontos de Vida'];
      document.getElementById('atributo|Atributos Secundários_Pontos de Vida Atuais').value = personagem['Atributos Secundários']['Pontos de Vida Atuais'];

      document.getElementById('atributo|Atributos Secundários_Lesão Grave').checked = personagem['Atributos Secundários']['Lesão Grave'];
      document.getElementById('atributo|Atributos Secundários_Morrendo').checked = personagem['Atributos Secundários']['Morrendo'];
      document.getElementById('atributo|Atributos Secundários_Inconsciente').checked = personagem['Atributos Secundários']['Inconsciente'];

      document.getElementById('atributo|Atributos Secundários_SAN (Sanidade)').value = personagem['Atributos Secundários']['SAN (Sanidade)'];
      document.getElementById('atributo|Atributos Secundários_Sanidade Máxima').value = personagem['Atributos Secundários']['Sanidade Máxima'];
      document.getElementById('atributo|Atributos Secundários_Sanidade Atual').value = personagem['Atributos Secundários']['Sanidade Atual'];

      document.getElementById('atributo|Atributos Secundários_Insanidade Temporária').checked = personagem['Atributos Secundários']['Insanidade Temporária'];
      document.getElementById('atributo|Atributos Secundários_Insanidade Indefinida').checked = personagem['Atributos Secundários']['Insanidade Indefinida'];

      document.getElementById('atributo|Atributos Secundários_Sorte').value = personagem['Atributos Secundários']['Sorte'];
      document.getElementById('atributo|Atributos Secundários_Sorte Atual').value = personagem['Atributos Secundários']['Sorte'];

      document.getElementById('atributo|Atributos Secundários_Pontos de Magia Máximo').value = personagem['Atributos Secundários']['Pontos de Magia Máximo'];
      document.getElementById('atributo|Atributos Secundários_Pontos de Magia').value = personagem['Atributos Secundários']['Pontos de Magia'];

      document.getElementById('atributo|Atributos Secundários_Dano Extra').value = personagem['Atributos Secundários']['Dano Extra'];
      if (!personagem['Atributos Secundários']['Dano Extra Negativo']) {
        document.getElementById('atributo|Atributos Secundários_Dano Extra').style.fontSize = '0.7em';
      }
      document.getElementById('atributo|Atributos Secundários_Corpo').value = personagem['Atributos Secundários']['Corpo'];

      definirPericia(personagem,'atributo_secundario-esquivar','Esquivar');

      renderPericiais(personagem,(innerHTML)=>{
        document.getElementById('carregando-pericias').innerHTML = innerHTML;

        document.getElementById('atributo|Padrão de Vida_Nível de Gastos').value = personagem['Padrão de Vida']['Nível de Gastos'];
        document.getElementById('atributo|Padrão de Vida_Dinheiro').value = personagem['Padrão de Vida']['Dinheiro'];
        document.getElementById('atributo|Padrão de Vida_Patrimônio').value = personagem['Padrão de Vida']['Patrimônio'];

        document.getElementById('atributo|Padrão de Vida_Hospedagens').value = personagem['Padrão de Vida']['Hospedagens'];
        document.getElementById('atributo|Padrão de Vida_Transportes').value = personagem['Padrão de Vida']['Transportes'];

        renderArmas(personagem["Armas"],(innerHTML)=>{
          document.getElementById('carregando-armas').innerHTML = innerHTML;

          document.getElementById('atributo|Equipamentos').value = personagem['Equipamentos'];

          renderAntecedentes(personagem["Antecedentes"],personagem["Conexões-Chave"],(innerHTML)=>{
            document.getElementById('carregando-antecedentes').innerHTML = innerHTML;

            document.getElementById('atributo|Anotações').value = personagem['Anotações'];

            // personagem['Mostrar Dicas']
            /*
            atributos['Metadados']['UUID'] = uuid;
            atributos['Metadados']['Mostrar Dicas'] = document.getElementById('form-dicas').checked;
            atributos['Metadados']['Versão'] = VERSAO;
            */

            definirListeners(personagem,()=>{
                document.getElementById('loading').style.display = 'none';
            });



            /* Testando */
            /*
            let tag = document.getElementById('atributo|Armas_0_Nome');

            let funcao = (event) => {
              event.preventDefault();
              definirPropriedadePersonagem(event,personagem,()=>{
                console.log(personagem['Armas'][0]);
              });
            };
            console.log(tag.hasAttribute('input'));
            //tag.addEventListener('input',funcao);
            console.log(tag.hasAttribute('input'));
            tag.removeEventListener('input',funcao);
            console.log(tag.hasAttribute('input'));
            */

            /*
            let a = document.createElement('a');
            a.innerHTML = 'teste';
            a.id = 'teste-link';
            a.style.backgroundColor = 'red';

            let funcao = (event) => {
              event.preventDefault();
              console.log('teste');

              document.querySelector('div.ficha #teste-link').removeEventListener('click',funcao);
            };
            a.addEventListener('click',funcao);
            //a.removeEventListener('click',funcao);

            document.querySelector('div.ficha').appendChild(a);
            */

          });
        });
      });
    });
  });
}

/* ----------------------------------------------------------- */
