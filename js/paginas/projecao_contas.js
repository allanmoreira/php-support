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

    $('#tabela tbody').append(
        '<tr>' +
            '<td rowspan="2"><strong>' + mes + '</strong></td>' +
            '<td rowspan="2">' + dadoApi.recebido + '</td>' +
            '<td>Projeção</td>' +
            '<td>' + dadoApi.fixas.totalProjecao + '</td>' +
            '<td>' + dadoApi.variaveis.totalProjecao + '</td>' +
            '<td>' + dadoApi.adicionais.totalProjecao + '</td>' +
            '<td>' + dadoApi.extraordinarias.totalProjecao + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td>Atual</td>' +
            '<td>' + dadoApi.fixas.totalAtual + '</td>' +
            '<td>' + dadoApi.variaveis.totalAtual + '</td>' +
            '<td>' + dadoApi.adicionais.totalAtual + '</td>' +
            '<td>' + dadoApi.extraordinarias.totalAtual + '</td>' +
        '</tr>'
    );
}
