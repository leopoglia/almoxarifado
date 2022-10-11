package br.senai.sc.almoxarifado.model.entities;

import br.senai.sc.almoxarifado.model.Factory.*;

public class Localizacao {
    private Integer idLocalizacao;
    private String localidade;

    public Localizacao(Integer idLocalizacao, String localidade) {
        this.idLocalizacao = idLocalizacao;
        this.localidade = localidade;
    }

    public static Localizacao cadastrar(Integer idLocalizacao, String localidade){
        return new LocalizacaoFactory().getLocalizacao(idLocalizacao, localidade);
    }

    public Integer getIdLocalizacao() {
        return idLocalizacao;
    }

    public void setIdLocalizacao(Integer idLocalizacao) {
        this.idLocalizacao = idLocalizacao;
    }

    public String getLocalidade() {
        return localidade;
    }

    public void setLocalidade(String localidade) {
        this.localidade = localidade;
    }
}
