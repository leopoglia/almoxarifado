package br.senai.sc.almoxarifado.model.Factory;

import br.senai.sc.almoxarifado.model.entities.Classificacao;

public class ClassificacaoFactory {
    public Classificacao getClassificacao(Integer codigo, String classificacao){
        return new Classificacao(codigo, classificacao);
    }
}
