
function validarPersonagem(personagem,callback) {
  let valido = true;

  if ("Informações" in personagem) {

    if (!("Idade" in personagem["Informações"])) { valido = false; }
    if (!("Ocupação" in personagem["Informações"])) { valido = false; }
    if (!("Imagem" in personagem["Informações"])) { valido = false; }
    if (!("Gênero" in personagem["Informações"])) { valido = false; }
    if (!("Nome" in personagem["Informações"])) { valido = false; }
    if (!("Jogador" in personagem["Informações"])) { valido = false; }
    if (!("Data de Nascimento" in personagem["Informações"])) { valido = false; }

    if ("Atributos" in personagem) {

      let atributos = [
        "FOR (Força)",
        "CON (Constituição)",
    		"TAM (Tamanho)",
    		"DES (Destreza)",
    		"APA (Aparência)",
    		"INT (Inteligência)",
    		"POD (Poder)",
    		"EDU (Educação)",
      ];

      atributos.forEach((atributo, index_atributo) => {

        if (atributo in personagem["Atributos"]) {

          if (!("Atributo" in personagem["Atributos"][atributo])) { valido = false; }
          if (!("Metade" in personagem["Atributos"][atributo])) { valido = false; }
          if (!("Quinto" in personagem["Atributos"][atributo])) { valido = false; }

        } else {
          valido = false;
        }

        if (index_atributo == (atributos.length - 1)) {
          /* Atributos validados */

          if ("Atributos Secundários" in personagem) {

            let atributos_secundarios = [
              "SAN (Sanidade)",
	            "Sanidade Atual",
	            "Sanidade Máxima",
          		"Sorte",
          		"Sorte Atual",
          		"Lesão Grave",
          		"Morrendo",
          		"Inconsciente",
          		"Insanidade Temporária",
          		"Insanidade Indefinida",
          		"Pontos de Magia",
          		"Pontos de Magia Máximo",
          		"Dano Extra",
          		"Corpo",
          		"Dano Extra Negativo",
          		"Pontos de Vida",
          		"Pontos de Vida Atuais",
          		"Taxa de Movimento (MOV)",
            ];

            atributos_secundarios.forEach((atributo_secundario, index_atributo_secundario) => {

              if (!(atributo_secundario in personagem["Atributos Secundários"])) {
                valido = false;
              }

              if (index_atributo_secundario == (atributos_secundarios.length - 1)) {
                /* Atributos Secundários validados */

                if ("Padrão de Vida" in personagem) {

                  let padroes_vida = [
                    "Nível de Crédito",
                		"Nível de Gastos",
                		"Dinheiro",
                		"Patrimônio",
                		"Descrição",
                		"Acomodações",
                		"Viagem",
                		"Hospedagens",
                		"Transportes"
                  ];

                  padroes_vida.forEach((padrao_vida, index_padrao_vida) => {

                    if (!(padrao_vida in personagem["Padrão de Vida"])) {
                      valido = false;
                    }

                    if (index_padrao_vida == (padroes_vida.length - 1)) {
                      /* Padrões de vida validados */

                      if ("Metadados" in personagem) {

                        if (!("UUID" in personagem["Metadados"])) { valido = false; }
                        if (!("Mostrar Dicas" in personagem["Metadados"])) { valido = false; }
                        if (!("Versão" in personagem["Metadados"])) { valido = false; }
                        if (!("Salvo" in personagem["Metadados"])) { valido = false; }

                        /* Metadados validados */

                        if ("Perícias" in personagem) {

                          let array_pericias = Object.keys(personagem["Perícias"]);

                          array_pericias.forEach((pericia, index_pericia) => {

                            if (!("Regular" in personagem["Perícias"][pericia])) {
                              valido = false;
                            }
                            if (!("Difícil" in personagem["Perícias"][pericia])) {
                              valido = false;
                            }
                            if (!("Extremo" in personagem["Perícias"][pericia])) {
                              valido = false;
                            }
                            if (!("Usada com Sucesso" in personagem["Perícias"][pericia])) {
                              valido = false;
                            }

                            if (index_pericia == (array_pericias.length - 1)) {
                              /* Perícias validadas */

                              if ("Equipamentos" in personagem) {

                                if ("Armas" in personagem) {

                                  let array_armas = personagem["Armas"];

                                  array_armas.forEach((arma, index_arma) => {

                                    if (!("Nome" in arma)) { valido = false; }
                                    if (!("Dano" in arma)) { valido = false; }
                                    if (!("Alcance Base" in arma)) { valido = false; }
                                    if (!("Usos por Rodada" in arma)) { valido = false; }
                                    if (!("Munição na Arma" in arma)) { valido = false; }
                                    if (!("Defeito" in arma)) { valido = false; }

                                    if (index_arma == (array_armas.length - 1)) {
                                      /* Armas validadas */

                                      if ("Antecedentes" in personagem) {

                                        let antecedentes = [
                                          "Descrição Pessoal",
                                      		"Ideologia/Crenças",
                                      		"Pessoas Significativas",
                                      		"Por que essa pessoa é importante?",
                                      		"Locais Importantes",
                                      		"Pertences Queridos",
                                      		"Características",
                                      		"Ferimentos & Cicatrizes",
                                      		"Fobias & Manias",
                                      		"Tomos Arcanos, Feitiços & Artefatos",
                                      		"Encontros com Entidades Estranhas",
                                        ];

                                        antecedentes.forEach((antecedente, index_antecedente) => {

                                          if (!(antecedente in personagem["Antecedentes"])) { valido = false; }

                                          if (index_antecedente == (antecedentes.length - 1)) {
                                            /* Antecedentes validados */

                                            if ("Conexões-Chave" in personagem) {

                                              if (!("Ideologia/Crenças" in personagem["Conexões-Chave"])) { valido = false; }
                                              if (!("Pessoas Significativas" in personagem["Conexões-Chave"])) { valido = false; }
                                              if (!("Locais Importantes" in personagem["Conexões-Chave"])) { valido = false; }
                                              if (!("Pertences Queridos" in personagem["Conexões-Chave"])) { valido = false; }

                                              if (!("Anotações" in personagem)) { valido = false; }

                                              callback(valido);

                                            } else {
                                              callback(false);
                                            }

                                            /* Antecedentes validados */
                                          }
                                        });

                                      } else {
                                        callback(false);
                                      }

                                      /* Armas validadas */
                                    }
                                  });


                                } else {
                                  callback(false);
                                }

                              } else {
                                callback(false);
                              }

                              /* Perícias validadas */
                            }
                          });


                        } else {
                          callback(false);
                        }

                        /* Metadados validados */

                      } else {
                        callback(false);
                      }

                      /* Padrões de vida validados */
                    }
                  });

                } else {
                  callback(false);
                }

                /* Atributos Secundários validados */
              }
            });

          } else {
            callback(false);
          }

          /* Atributos validados */
        }
      });

    } else {
      callback(false);
    }
  } else {
    callback(false);
  }
}
