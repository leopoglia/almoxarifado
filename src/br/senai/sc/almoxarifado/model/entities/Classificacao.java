package br.senai.sc.almoxarifado.model.entities;

import br.senai.sc.almoxarifado.model.Factory.*;

public class Classificacao {
    private Integer idClassificacao;
    private String classificacao;

    public static Classificacao cadastrar(Integer codigo, String classificacao){
        return new ClassificacaoFactory().getClassificacao(codigo, classificacao);
    }

    public Classificacao(Integer idClassificacao, String classificacao) {
        this.idClassificacao = idClassificacao;
        this.classificacao = classificacao;
    }

    public Integer getIdClassificacao() {
        return idClassificacao;
    }

    public void setIdClassificacao(Integer idClassificacao) {
        this.idClassificacao = idClassificacao;
    }

    public String getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(String classificacao) {
        this.classificacao = classificacao;
    }
}
