package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.service.*;

import java.sql.SQLException;

public class LocalizacaoController {
    public void cadastrar(Integer idLocalizacao, String localidade) throws SQLException {
        LocalizacaoService service = new LocalizacaoService();
        Localizacao localizacao = Localizacao.cadastrar(idLocalizacao, localidade);
        service.inserir(localizacao);
    }
}
