var mensagem = $('#mensagem');
var btn_executar = $('#btn_executar');

$(function(){
    getConfigs();
    consulta();
});

btn_executar.click(function(){
    consulta();
});

function consulta() {
    $('#tabela tbody > tr').remove();
    var lista_dados = getDadosTeste();
    getDadosAPI();
    // $.each(lista_dados, function (i) {
    //     var despesa = lista_dados[i];
    //     preencheTabela(despesa);
    // });
}

function getDadosAPI(){
    $.ajax({
        url: URL[ambiente.val()] + '/conta/projecoes?data_de=01/01/2021&data_ate=01/01/2022',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        data: null,
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            mensagem.html(response.status.description);
            var lista_dados = response.data.totaisMes;
            $.each(lista_dados, function (i) {
                var mesProjecao = lista_dados[i];
                var mes = parseInt(mesProjecao.dataReferencia.split('/')[1]);
                mes = mesExtenso(mes);
                var casoTeste = getDadosTeste(mes);
                if(casoTeste !== undefined)
                    preencheTabela(mes, mesProjecao, casoTeste);
            });
        },
        error: function (response) {
            if(response.status === 401){
                abreNotificacao('warning', 'Não autorizado!');
            } else {
                abreNotificacao('danger', 'ERRO');
            }
        }
    });
}

function getDadosTeste(mes){
    var lista = {
        'Fevereiro': {
            salarios: 10531.92,
            fixas: {
                projecao: 3390.29,
                atual: 3881.77
            },
            variaveis:{
                projecao: 0,
                atual: 3485.32
            },
            adicionais:{
                projecao: 2605.9,
                atual: 2782.73
            },
            extraordinarias:{
                projecao: 218.6,
                atual: 375.6
            },
        }
    };
    return lista[mes];
}

function preencheTabela(mes, dadoApi, casoTeste){
    console.log(dadoApi);
    console.log(casoTeste);
    var classe_linha = mes%2 === 0 ? '#f9f9f9' : '#ffffff';
    var sucesso = '#56ee71'
    var falha = '#ff4949'

    var api_fixas_projecao = dadoApi.fixas.totalProjecao;
    var api_variaveis_projecao = dadoApi.variaveis.totalProjecao;
    var api_adicionais_projecao = dadoApi.adicionais.totalProjecao;
    var api_extraordinarias_projecao = dadoApi.extraordinarias.totalProjecao;

    var api_fixas_atual = dadoApi.fixas.totalAtual;
    var api_variaveis_atual = dadoApi.variaveis.totalAtual;
    var api_adicionais_atual = dadoApi.adicionais.totalAtual;
    var api_extraordinarias_atual = dadoApi.extraordinarias.totalAtual;

    var teste_fixas_projecao = casoTeste.fixas.projecao;
    var teste_variaveis_projecao = casoTeste.variaveis.projecao;
    var teste_adicionais_projecao = casoTeste.adicionais.projecao;
    var teste_extraordinarias_projecao = casoTeste.extraordinarias.projecao;

    var teste_fixas_atual = casoTeste.fixas.atual;
    var teste_variaveis_atual = casoTeste.variaveis.atual;
    var teste_adicionais_atual = casoTeste.adicionais.atual;
    var teste_extraordinarias_atual = casoTeste.extraordinarias.atual;

    var fixas_projecao_igual = api_fixas_projecao === teste_fixas_projecao;
    var variaveis_projecao_igual = api_variaveis_projecao === teste_variaveis_projecao;
    var adicionais_projecao_igual = api_adicionais_projecao === teste_adicionais_projecao;
    var extraordinarias_projecao_igual = api_extraordinarias_projecao === teste_extraordinarias_projecao;

    var fixas_atual_igual = api_fixas_atual === teste_fixas_atual;
    var variaveis_atual_igual = api_variaveis_atual === teste_variaveis_atual;
    var adicionais_atual_igual = api_adicionais_atual === teste_adicionais_atual;
    var extraordinarias_atual_igual = api_extraordinarias_atual === teste_extraordinarias_atual;

    $('#tabela tbody').append(
        '<tr>' +
            '<td style="background: '+classe_linha+'" rowspan="2"><strong>' + mes + '</strong></td>' +
            '<td style="background: '+classe_linha+'" rowspan="2">' + dadoApi.recebido + '</td>' +
            '<td style="background: '+classe_linha+'">Projeção</td>' +
            '<td style="background: '+(fixas_projecao_igual ? sucesso : falha)+'">' + api_fixas_projecao + (fixas_projecao_igual ? '' : ('<br>'+teste_fixas_projecao)) + '</td>' +
            '<td style="background: '+(variaveis_projecao_igual ? sucesso : falha)+'">' + api_variaveis_projecao + (variaveis_projecao_igual ? '' : ('<br>'+teste_variaveis_projecao)) + '</td>' +
            '<td style="background: '+(adicionais_projecao_igual ? sucesso : falha)+'">' + api_adicionais_projecao + (adicionais_projecao_igual ? '' : ('<br>'+teste_adicionais_projecao)) + '</td>' +
            '<td style="background: '+(extraordinarias_projecao_igual ? sucesso : falha)+'">' + api_extraordinarias_projecao + (extraordinarias_projecao_igual ? '' : ('<br>'+teste_extraordinarias_projecao)) + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td style="background: '+classe_linha+'">Atual</td>' +
            '<td style="background: '+(fixas_atual_igual ? sucesso : falha)+'">' + api_fixas_atual + (fixas_atual_igual ? '' : ('<br>'+teste_fixas_atual)) + '</td>' +
            '<td style="background: '+(variaveis_atual_igual ? sucesso : falha)+'">' + api_variaveis_atual + (variaveis_atual_igual ? '' : ('<br>'+teste_variaveis_atual)) + '</td>' +
            '<td style="background: '+(adicionais_atual_igual ? sucesso : falha)+'">' + api_adicionais_atual + (adicionais_atual_igual ? '' : ('<br>'+teste_adicionais_atual)) + '</td>' +
            '<td style="background: '+(extraordinarias_atual_igual ? sucesso : falha)+'">' + api_extraordinarias_atual + (extraordinarias_atual_igual ? '' : ('<br>'+teste_extraordinarias_atual)) + '</td>' +
        '</tr>'
    );
}
