
function carregarImagem(url,callback) {
  var img = new Image();
  img.onload = function() {
    document.getElementById('atributo-fotografia').style.backgroundImage = `url(${img.src})`;
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

      let text_checkbox = '<input type="checkbox" class="nome">';
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
          <input type="number" class="regular" value="${pericia['Regular']}">
          <input type="number" class="dificil" value="${pericia['Difícil']}">
          <input type="number" class="extremo" value="${pericia['Extremo']}">
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
    <div class="arma" id="${nome}">
      <div class="parte parte-nome">
        <label class="sobre">Arma</label>
        <input type="text" class="valor left" meta="Nome" value="${nome}">
      </div>
      <div class="parte parte-dano">
        <label class="sobre">Dano</label>
        <input type="text" class="valor pequeno" meta="Dano" value="${dano}">
      </div>

      <div class="parte">
        <label class="sobre">Alcance</label>
        <input type="text" class="valor pequeno" meta="Alcance Base" value="${alcance}">
      </div>
      <div class="parte">
        <label class="sobre">Ataques</label>
        <input type="text" class="valor" meta="Usos por Rodada" value="${ataques}">
      </div>
      <div class="parte">
        <label class="sobre">Munição</label>
        <input type="text" class="valor" meta="Munição na Arma" value="${municao}">
      </div>
      <div class="parte">
        <label class="sobre">Defeito</label>
        <input type="text" class="valor" meta="Defeito" value="${defeito}">
      </div>
    </div>
    `;

    if (index == (array_qtde.length - 1)) {
      callback(innerHTML);
    }
  });
}

function renderAntecedentes(antecedentes,conexao_chave,callback) {
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
        if (conexao_chave == antecedente) {
          checked = 'checked="checked"';
        }

        tag_conexao_chave = `
        <label class="conexao-chave">
          <span>Conexão-Chave</span>
          <input type="checkbox" ${checked}>
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
          <textarea class="valor">${valor}</textarea>
        </div>
      </div>
      `;
    }

    if (index == (array.length - 1)) {
      callback(innerHTML);
    }
  });
}

function preencherTela() {
  console.log(VERSAO);
  document.getElementById('loading').style.display = 'block';

  if (LOG) {
    document.getElementById('form-mythos').checked = true;
  }

  rolarPersonagem(personagem=>{
    carregarImagem(personagem['Informações']['Imagem'],()=>{

      document.getElementById('atributo-jogador').value = '';
      document.getElementById('atributo-personagem').value = personagem['Informações']['Nome'];

      let ocupacao = personagem['Informações']['Ocupação'];
      if (ocupacao == 'Profissional de Entretenimento') {
        ocupacao = 'Entretenimento';
      }

      document.getElementById('atributo-ocupacao').value = ocupacao;
      document.getElementById('atributo-idade').value = personagem['Informações']['Idade'];
      document.getElementById('atributo-nascimento').value = personagem['Informações']['Data de Nascimento'];

      definirAtributo(personagem,'atributo-forca','FOR (Força)');
      definirAtributo(personagem,'atributo-destreza','DES (Destreza)');
      definirAtributo(personagem,'atributo-inteligencia','INT (Inteligência)');
      definirAtributo(personagem,'atributo-constituicao','CON (Constituição)');
      definirAtributo(personagem,'atributo-aparencia','APA (Aparência)');
      definirAtributo(personagem,'atributo-poder','POD (Poder)');
      definirAtributo(personagem,'atributo-tamanho','TAM (Tamanho)');
      definirAtributo(personagem,'atributo-educacao','EDU (Educação)');
      document.querySelector(`#atributo-movimento`).value = personagem['Atributos Secundários']['Taxa de Movimento (MOV)'];

      document.querySelector(`#atributo-pontos-de-vida`).value = personagem['Atributos Secundários']['Pontos de Vida'];
      document.querySelector(`#atributo-pontos-de-vida-atual`).value = personagem['Atributos Secundários']['Pontos de Vida'];

      document.getElementById("atributo-lesao-grave").checked = personagem['Atributos Secundários']['Lesão Grave'];
      document.getElementById("atributo-morrendo").checked = personagem['Atributos Secundários']['Morrendo'];
      document.getElementById("atributo-inconsciente").checked = personagem['Atributos Secundários']['Inconsciente'];

      document.querySelector(`#atributo-sanidade-inicial`).value = personagem['Atributos Secundários']['SAN (Sanidade)'];
      document.querySelector(`#atributo-sanidade-maxima`).value = personagem['Atributos Secundários']['Sanidade Máxima'];
      document.querySelector(`#atributo-sanidade-atual`).value = personagem['Atributos Secundários']['SAN (Sanidade)'];

      document.getElementById("atributo-insanidade-temporaria").checked = personagem['Atributos Secundários']['Insanidade Temporária'];
      document.getElementById("atributo-insanidade-indefinida").checked = personagem['Atributos Secundários']['Insanidade Indefinida'];

      document.querySelector(`#atributo-sorte-inicial`).value = personagem['Atributos Secundários']['Sorte'];
      document.querySelector(`#atributo-sorte-atual`).value = personagem['Atributos Secundários']['Sorte'];

      document.querySelector(`#atributo-magia-maxima`).value = personagem['Atributos Secundários']['Pontos de Magia'];
      document.querySelector(`#atributo-magia-atual`).value = personagem['Atributos Secundários']['Pontos de Magia'];

      document.querySelector(`#atributo-combate-dano-extra`).value = personagem['Atributos Secundários']['Dano Extra'];
      if (!personagem['Atributos Secundários']['Dano Extra Negativo']) {
        document.querySelector(`#atributo-combate-dano-extra`).style.fontSize = '0.7em';
      }
      document.querySelector(`#atributo-combate-corpo`).value = personagem['Atributos Secundários']['Corpo'];

      definirPericia(personagem,'atributo-secundario-esquivar','Esquivar');

      renderPericiais(personagem,(innerHTML)=>{
        document.getElementById('carregando-pericias').innerHTML = innerHTML;

        document.getElementById('padrao-de-vida-nivel-de-gasto').value = personagem['Padrão de Vida']['Nível de Gastos'];
        document.getElementById('padrao-de-vida-dinheiro').value = personagem['Padrão de Vida']['Dinheiro'];
        document.getElementById('padrao-de-vida-patrimonio').value = personagem['Padrão de Vida']['Patrimônio'];

        document.getElementById('padrao-de-vida-hospedagens').value = personagem['Padrão de Vida']['Hospedagens'].join(", ");
        document.getElementById('padrao-de-vida-transportes').value = personagem['Padrão de Vida']['Transportes'].join(", ");

        renderArmas(personagem["Armas"],(innerHTML)=>{
          document.getElementById('carregando-armas').innerHTML = innerHTML;

          document.getElementById('equipamentos-e-pertences').value = personagem['Equipamentos'].join("\r\n");

          renderAntecedentes(personagem["Antecedentes"],personagem["Conexão-Chave"],(innerHTML)=>{
            document.getElementById('carregando-antecedentes').innerHTML = innerHTML;

            document.getElementById('loading').style.display = 'none';
          });
        });
      });
    });
  });
}

/* ----------------------------------------------------------- */

/* Eventos */

/*

#atributo-jogador
#atributo-personagem
#atributo-ocupacao
#atributo-idade
#atributo-nascimento

#atributo-fotografia

#atributo-forca > input[type=number].regular
#atributo-forca > input[type=number].dificil
#atributo-forca > input[type=number].extremo

#atributo-destreza > input[type=number].regular
#atributo-destreza > input[type=number].dificil
#atributo-destreza > input[type=number].extremo

#atributo-inteligencia > input[type=number].regular
#atributo-inteligencia > input[type=number].dificil
#atributo-inteligencia > input[type=number].extremo

#atributo-constituicao > input[type=number].regular
#atributo-constituicao > input[type=number].dificil
#atributo-constituicao > input[type=number].extremo

#atributo-aparencia > input[type=number].regular
#atributo-aparencia > input[type=number].dificil
#atributo-aparencia > input[type=number].extremo

#atributo-poder > input[type=number].regular
#atributo-poder > input[type=number].dificil
#atributo-poder > input[type=number].extremo

#atributo-tamanho > input[type=number].regular
#atributo-tamanho > input[type=number].dificil
#atributo-tamanho > input[type=number].extremo

#atributo-educacao > input[type=number].regular
#atributo-educacao > input[type=number].dificil
#atributo-educacao > input[type=number].extremo

#atributo-movimento

#atributo-pontos-de-vida
#atributo-pontos-de-vida-atual

#atributo-lesao-grave
#atributo-morrendo
#atributo-inconsciente

#atributo-sanidade-inicial
#atributo-sanidade-maxima
#atributo-sanidade-atual

#atributo-insanidade-temporaria
#atributo-insanidade-indefinida

#atributo-sorte-inicial
#atributo-sorte-atual

#atributo-magia-maxima
#atributo-magia-atual

#atributo-combate-dano-extra
#atributo-combate-corpo

#atributo-secundario-esquivar > input[type=number].regular
#atributo-secundario-esquivar > input[type=number].dificil
#atributo-secundario-esquivar > input[type=number].extremo

*/
