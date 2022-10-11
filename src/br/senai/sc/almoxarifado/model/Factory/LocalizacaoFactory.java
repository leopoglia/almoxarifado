package br.senai.sc.almoxarifado.model.Factory;

import br.senai.sc.almoxarifado.model.entities.Localizacao;

public class LocalizacaoFactory {
    public Localizacao getLocalizacao(Integer idLocalizacao, String localidade){
        return new Localizacao(idLocalizacao, localidade);
    }
}
