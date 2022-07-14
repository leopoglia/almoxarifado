inserirRota('/buscar_usuario', function(dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM USUARIO`).then(result => {
        console.log('USUÁRIO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO BUSCADO')
        resposta({ erro: 'USUÁRIOS NÃO BUSCADO' })
    });
});

inserirRota('/buscar_admin', function(dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM ADMIN INNER JOIN USER ON ADMIN.ID_USUARIO = USER.ID WHERE USER.NICKNAME = "${dados.nome}" AND USER.PASSWORD = "${dados.password}"`).then(result => {
        console.log('USUÁRIO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o usuário!' })
    });
});

inserirRota('/buscar_usuario_admin', function(dados, resposta) {
    console.log(dados);
    database(`SELECT USER.NOME, USER.NICKNAME, USER.IMG, MOEDA.VALORUSD, MOEDA.NOME AS BTC FROM USER INNER JOIN MOEDA ON USER.ID = MOEDA.ID_USUARIO`).then(result => {
        console.log('USUÁRIO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o usuário!' })
    });
});

inserirRota('/buscar_usuario_rico', function(dados, resposta) {
    console.log(dados);
    database(`SELECT USER.NOME, USER.NICKNAME, USER.IMG, MOEDA.VALORUSD, MOEDA.NOME AS BTC FROM USER INNER JOIN MOEDA ON USER.ID = MOEDA.ID_USUARIO ORDER BY MOEDA.VALORUSD DESC`).then(result => {
        console.log('USUÁRIO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o usuário!' })
    });
});

inserirRota('/buscar_usuario_nome_asc', function(dados, resposta) {
    console.log(dados);
    database(`SELECT USER.NOME, USER.NICKNAME, USER.IMG, MOEDA.VALORUSD, MOEDA.NOME AS BTC FROM USER INNER JOIN MOEDA ON USER.ID = MOEDA.ID_USUARIO ORDER BY USER.NOME ASC`).then(result => {
        console.log('USUÁRIO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o usuário!' })
    });
});

inserirRota('/buscar_usuario_nome_desc', function(dados, resposta) {
    console.log(dados);
    database(`SELECT USER.NOME, USER.NICKNAME, USER.IMG, MOEDA.VALORUSD, MOEDA.NOME AS BTC FROM USER INNER JOIN MOEDA ON USER.ID = MOEDA.ID_USUARIO ORDER BY USER.NOME DESC`).then(result => {
        console.log('USUÁRIO BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO BUSCADO')
        resposta({ erro: 'Erro ao BUSCAR o usuário!' })
    });
});

inserirRota('/buscar_usuario_admin_search', function(dados, resposta) {
    database(`SELECT USER.NOME, USER.NICKNAME, USER.IMG,  MOEDA.VALORUSD, MOEDA.NOME AS BTC FROM USER INNER JOIN MOEDA ON USER.ID = MOEDA.ID_USUARIO  WHERE USER.NOME LIKE "%${dados.nome}%"`).then(result => {
        console.log('result:', result)
        resposta({ list: result })
    }).catch(erro => {
        resposta({ erro: 'Erro ao LOGAR o usuário!' })
    });
});

inserirRota('/buscar_usuario_especifico', function(dados, resposta) {
    database(`SELECT * FROM USER WHERE NICKNAME = "${dados.nickname}"`).then(result => {
        console.log('result:', result)
        resposta({ user: result[0] })
    }).catch(erro => {
        resposta({ erro: 'Erro ao LOGAR o usuário!' })
    });
});

inserirRota('/login', function(dados, resposta) {
    database(`SELECT * FROM USUARIO WHERE NOME = "${dados.nome}" AND SENHA = "${dados.senha}" LIMIT 1`).then(result => {
        console.log('DEU CERTO:', result)
        resposta({ user: result[0] })
    }).catch(erro => {
        resposta({ erro: 'ERRO AO LOGAR' })
    });
});

inserirRota('/criar_usuario', function(dados, resposta) {
    if (!dados.nome) {
        return resposta({ erro: 'É nesecessário preencher o nome!' })
    }

    if (!dados.email) {
        return resposta({ erro: 'É nesecessário preencher o email!' })
    }

    if (!dados.senha) {
        return resposta({ erro: 'É nesecessário preencher o senha!' })
    }


    if (!dados.matricula) {
        return resposta({ erro: 'É nesecessário preencher o matricula!' })
    }

    database(`INSERT INTO USUARIO (
        MATRICULA, EMAIL, SENHA, NOME, IMAGEM) VALUES
        ("${dados.matricula}", "${dados.email}", "${dados.senha}", "${dados.nome}", "${dados.imagem}")`)
        .then(result => {
        console.log('USUÁRIO INSERIDO COM SUCESSO')
        resposta({ message: 'USUARIO INSERIDO COM SUCESSO!' })
    }).catch(erro => {
        console.log('USUÁRIOS NÃO INSERIDO')
        resposta({ erro: 'Erro ao inserir o usuário!' })
    });
})

// --------------------------------------------------------------------------------------------------//

inserirRota('/buscar_produtos', function(dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM PRODUTO`).then(result => {
        console.log('PRODUTOS BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('PRODUTOS NÃO BUSCADO')
        resposta({ erro: 'PRODUTOS NÃO BUSCADO' })
    });
});

inserirRota('/buscar_produto', function(dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM PRODUTO WHERE CODIGO = "${dados.codigo}"`).then(result => {
        console.log('PRODUTOS BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('PRODUTOS NÃO BUSCADO')
        resposta({ erro: 'PRODUTOS NÃO BUSCADO' })
    });
});


inserirRota('/criar_produto', function(dados, resposta) {
    database(`INSERT INTO PRODUTO (
        NOME, CARACTERISTICA, QUANTIDADE, DESCARTAVEL, DETALHES, IMAGEM) VALUES
        ("${dados.nome}", "${dados.caracteristica}", "${dados.quantidade}", "${dados.descartavel}", "${dados.detalhes}", "${dados.imagem}")
        `).then(result => {
        console.log('PRODUTO INSERIDO COM SUCESSO')
        resposta({ message: 'PRODUTO INSERIDO COM SUCESSO!' })
    }).catch(erro => {
        console.log('PRODUTO NÃO INSERIDO')
        resposta({ erro: 'PRODUTO NÃO INSERIDO' })
    });
})

inserirRota('/buscar_usuarios', function(dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM USUARIO`).then(result => {
        console.log('USUARIOS BUSCADO COM SUCESSO')
        resposta({ list: result })
    }).catch(erro => {
        console.log('USUARIOS NÃO BUSCADO')
        resposta({ erro: 'USUARIOS NÃO BUSCADO' })
    });
});

//fetch('/api/buscar_usuario', {method: 'POST', body: JSON.stringify({produtoId: 1, pessoaId: 1}), headers: { 'Content-Type': 'application/json'}}).then(function(result){return result.json();}).then(function(dados){console.log(dados)}).catch(function(erro){console.log(erro);})