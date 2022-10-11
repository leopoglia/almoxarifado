package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.ClassificacaoDAO;
import br.senai.sc.almoxarifado.model.entities.Classificacao;

import java.sql.SQLException;

public class ClassificacaoService {
    public void inserir(Classificacao classificacao) throws SQLException {
        new ClassificacaoDAO().cadastrar(classificacao);
    }
}
