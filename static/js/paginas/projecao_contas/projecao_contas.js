var mensagem = $('#mensagem');
var btn_executar = $('#btn_executar');
var cor_sucesso = '#56ee71';
var cor_falha = '#ff4949';

$(function(){
    getConfigs(CONSTANTS.REALM.AUTH);
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
                var mesString = mesExtenso(parseInt(mesProjecao.dataReferencia.split('/')[1]));
                var casoTeste = getDadosTeste(mesProjecao.dataReferencia);
                if(casoTeste !== undefined)
                    preencheTabela(mesString, mesProjecao, casoTeste);
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

function preencheTabela(mesExtenso, dadoApi, casoTeste){
    var cor_titulo = '#e0e0e0';
    $('#tabela tbody').append(
        '<tr>' +
            '<td colspan="6" style="background: '+cor_titulo+'" class="text-center"><strong>' + mesExtenso + '</strong></td>' +
        '</tr>' +
        '<tr>' +
        '<td class="text-center"><strong>Salários</strong></td>' +
        '<td class="text-center"><strong>Tipo</strong></td>' +
        '<td class="text-center"><strong>Fixas</strong></td>' +
        '<td class="text-center"><strong>Variáveis</strong></td>' +
        '<td class="text-center"><strong>Adicionais</strong></td>' +
        '<td class="text-center"><strong>Extraordinárias</strong></td>' +
        '</tr>' +
        '<tr>' +
            '<td rowspan="2">' + converteFloatParaMoeda(dadoApi.recebido, 2) + '</td>' +
            '<td><strong>Projeção</strong></td>' +
            getCelula(dadoApi, casoTeste, 'fixas', 'totalProjecao') +
            getCelula(dadoApi, casoTeste, 'variaveis', 'totalProjecao') +
            getCelula(dadoApi, casoTeste, 'adicionais', 'totalProjecao') +
            getCelula(dadoApi, casoTeste, 'extraordinarias', 'totalProjecao') +
        '</tr>' +
        '<tr>' +
            '<td><strong>Atual</strong></td>' +
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
    return '<td class="text-center" style="background: '+(igual ? cor_sucesso : cor_falha)+'">' +
                converteFloatParaMoeda(valor_mes, 2) +
                (igual ? '' : (' <strong>('+converteFloatParaMoeda(valor_teste, 2)+')</strong>')) +
            '</td>';
}
