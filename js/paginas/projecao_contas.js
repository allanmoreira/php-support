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
                var mesInt = parseInt(mesProjecao.dataReferencia.split('/')[1]);
                var mesString = mesExtenso(mesInt);
                var casoTeste = getDadosTeste(mesString);
                if(casoTeste !== undefined)
                    preencheTabela(mesString, mesInt, mesProjecao, casoTeste);
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
        },
        'Abril': {
            salarios: 14450.12,
            fixas: {
                totalProjecao: 3687.63,
                totalAtual: 3864.23
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 3622.35
            },
            adicionais:{
                totalProjecao: 2716.11,
                totalAtual: 4074.4
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 218.6
            },
        },
        'Maio': {
            salarios: 13083.6,
            fixas: {
                totalProjecao: 3864.23,
                totalAtual: 3705.82
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 4313.61
            },
            adicionais:{
                totalProjecao: 3811.05,
                totalAtual: 2559.22
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 218.6
            },
        },
        'Junho': {
            salarios: 0,
            fixas: {
                totalProjecao: 3705.82,
                totalAtual: 3829.15
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 3970.4
            },
            adicionais:{
                totalProjecao: 2454.27,
                totalAtual: 3602.07
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 218.6
            },
        },
        'Julho': {
            salarios: 0,
            fixas: {
                totalProjecao: 3829.15,
                totalAtual: 3948.07
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 3547.63
            },
            adicionais:{
                totalProjecao: 3602.07,
                totalAtual: 3601.3
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 218.6
            },
        },
        'Agosto': {
            salarios: 0,
            fixas: {
                totalProjecao: 3948.07,
                totalAtual: 3404.77
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 4007.7
            },
            adicionais:{
                totalProjecao: 3124.26,
                totalAtual: 3123.51
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 258.57
            },
        },
        'Setembro': {
            salarios: 0,
            fixas: {
                totalProjecao: 3404.77,
                totalAtual: 4097.1
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 4029.87
            },
            adicionais:{
                totalProjecao: 3067.52,
                totalAtual: 3067.52
            },
            extraordinarias:{
                totalProjecao: 258.57,
                totalAtual: 258.57
            },
        },
        'Outubro': {
            salarios: 0,
            fixas: {
                totalProjecao: 3404.77,
                totalAtual: 3411.68
            },
            variaveis:{
                totalProjecao: 0,
                totalAtual: 198.93
            },
            adicionais:{
                totalProjecao: 1488.63,
                totalAtual: 1461.08
            },
            extraordinarias:{
                totalProjecao: 109.77,
                totalAtual: 109.77
            },
        }
    };
    return lista[mes];
}

function preencheTabela(mesExtenso, mesInt, dadoApi, casoTeste){
    var cor_titulo = '#e0e0e0';
    $('#tabela tbody').append(
        '<tr>' +
            '<td colspan="6" style="background: '+cor_titulo+'" class="text-center"><strong>' + mesExtenso + '</strong></td>' +
        '</tr>' +
        '<tr>' +
        '<td style="background: '+cor_titulo+'" class="text-center"><strong>Salários</strong></td>' +
        '<td style="background: '+cor_titulo+'" class="text-center"><strong>Tipo</strong></td>' +
        '<td style="background: '+cor_titulo+'" class="text-center"><strong>Fixas</strong></td>' +
        '<td style="background: '+cor_titulo+'" class="text-center"><strong>Variáveis</strong></td>' +
        '<td style="background: '+cor_titulo+'" class="text-center"><strong>Adicionais</strong></td>' +
        '<td style="background: '+cor_titulo+'" class="text-center"><strong>Extraordinárias</strong></td>' +
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
