var mensagem = $('#mensagem');
var btn_executar = $('#btn_executar');
var cor_sucesso = '#56ee71';
var cor_falha = '#ff4949';

$(function(){
    getConfigs();
    consulta();
});

btn_executar.click(function(){
    consulta();
});

function consulta() {
    getDadosAPI();
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
            $('#tabela tbody > tr').remove();
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
                totalProjecao: 3390.29,
                totalAtual: 3881.77
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 3485.32
            },
            adicionais:{
                totalProjecao: 2605.9,
                totalAtual: 2782.73
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 375.6
            },
        },
        'Mar\u00E7o': {
            salarios: 12564.31,
            fixas: {
                totalProjecao: 3881.77,
                totalAtual: 3687.63
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 2956.4
            },
            adicionais:{
                totalProjecao: 2782.73,
                totalAtual: 2716.11
            },
            extraordinarias:{
                totalProjecao: 375.6,
                totalAtual: 375.6
            },
        }
    };
    return lista[mes];
}

function preencheTabela(mes, dadoApi, casoTeste){
    var classe_linha = mes%2 === 0 ? '#f9f9f9' : '#ffffff';

    $('#tabela tbody').append(
        '<tr>' +
            '<td style="background: '+classe_linha+'" rowspan="2"><strong>' + mes + '</strong></td>' +
            '<td style="background: '+classe_linha+'" rowspan="2">' + converteFloatParaMoeda(dadoApi.recebido, 2) + '</td>' +
            '<td style="background: '+classe_linha+'"><strong>Projeção</strong></td>' +
            getCelula(dadoApi, casoTeste, 'fixas', 'totalProjecao') +
            getCelula(dadoApi, casoTeste, 'variaveis', 'totalProjecao') +
            getCelula(dadoApi, casoTeste, 'adicionais', 'totalProjecao') +
            getCelula(dadoApi, casoTeste, 'extraordinarias', 'totalProjecao') +
        '</tr>' +
        '<tr>' +
            '<td style="background: '+classe_linha+'"><strong>Atual</strong></td>' +
            getCelula(dadoApi, casoTeste, 'fixas', 'totalAtual') +
            getCelula(dadoApi, casoTeste, 'variaveis', 'totalAtual') +
            getCelula(dadoApi, casoTeste, 'adicionais', 'totalAtual') +
            getCelula(dadoApi, casoTeste, 'extraordinarias', 'totalAtual') +
        '</tr>'
    );
}

function getCelula(mes, teste, grupo, tipo){
    var valor_mes = mes[grupo][tipo];
    var valor_teste = teste[grupo][tipo];
    var igual = valor_mes === valor_teste;
    return '<td style="background: '+(igual ? cor_sucesso : cor_falha)+'">' +
                converteFloatParaMoeda(valor_mes, 2) +
                (igual ? '' : (' <strong>('+converteFloatParaMoeda(valor_teste, 2)+')</strong>')) +
            '</td>';
}
