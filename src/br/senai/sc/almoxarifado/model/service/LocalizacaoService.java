package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.LocalizacaoDAO;
import br.senai.sc.almoxarifado.model.entities.Localizacao;

import java.sql.SQLException;

public class LocalizacaoService {
    public void inserir(Localizacao localizacao) throws SQLException {
        new LocalizacaoDAO().cadastrar(localizacao);
    }
}
