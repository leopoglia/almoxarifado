package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.service.*;

import java.sql.SQLException;

public class ClassificacaoController {
    public void cadastrar(Integer codigo, String nomeClassificacao) throws SQLException {
        ClassificacaoService service = new ClassificacaoService();
        Classificacao classificacao = Classificacao.cadastrar(codigo, nomeClassificacao);
        service.inserir(classificacao);
    }
}
