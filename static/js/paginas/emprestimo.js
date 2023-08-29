var mensagem = $('#mensagem');
var btn_executar = $('#btn_executar');
var dados_validar = $('#dados_validar');

var entradas_projecao = $('#entradas_projecao');
var entradas_recebido = $('#entradas_recebido');
var entradas_pendente = $('#entradas_pendente');
var total_total = $('#total_total');
var total_pago = $('#total_pago');
var total_saldo_devedor = $('#total_saldo_devedor');
var atual_atual = $('#atual_atual');
var atual_projecao_mes = $('#atual_projecao_mes');
var atual_projecao_atual_mes = $('#atual_projecao_atual_mes');

var cor_sucesso = '#56ee71';
var cor_falha = '#ff4949';
var json_comparativos = {
    "atual": {
        "entradas": {
            "projecao": 15888.27,
            "recebido": 10684.72,
            "pendente": 5203.55
        },
        "dividas": {
            "total": 6952.66,
            "totalComDizimo": 8697.12,
            "pago": 0,
            "saldoDevedor": 6952.66
        },
        "saldo": {
            "atual": 22782.20,
            "projecaoMes": 8935.61,
            "projecaoAtualMes": 21033.09
        }
    },
    "emprestado": {
        "entradas": {
            "projecao": 15888.27,
            "recebido": 10684.72,
            "pendente": 5203.55
        },
        "dividas": {
            "total": 6952.66,
            "totalComDizimo": 8697.12,
            "pago": 0,
            "saldoDevedor": 6952.66
        },
        "saldo": {
            "atual": 22682.20,
            "projecaoMes": 8935.61,
            "projecaoAtualMes": 20933.09
        }
    }
}

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
        url: URL[ambiente.val()] + '/conta/totais?data_referencia=01/01/2022&mes_aberto=false',
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
          preencheTabela(response.data);
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

function preencheTabela(item){
    var dados = json_comparativos[dados_validar.val()];
    validaDadosCelula(entradas_projecao, item.entradas.projecao, dados.entradas.projecao);
    validaDadosCelula(entradas_recebido, item.entradas.recebido, dados.entradas.recebido);
    validaDadosCelula(entradas_pendente, item.entradas.pendente, dados.entradas.pendente);
    validaDadosCelula(total_total, item.dividas.total, dados.dividas.total);
    validaDadosCelula(total_pago, item.dividas.pago, dados.dividas.pago);
    validaDadosCelula(total_saldo_devedor, item.dividas.saldoDevedor, dados.dividas.saldoDevedor);
    validaDadosCelula(atual_atual, item.saldo.atual, dados.saldo.atual);
    validaDadosCelula(atual_projecao_mes, item.saldo.projecaoMes, dados.saldo.projecaoMes);
    validaDadosCelula(atual_projecao_atual_mes, item.saldo.projecaoAtualMes, dados.saldo.projecaoAtualMes);
}

function validaDadosCelula(campo, item_retorno, item_comparacao){
    var iguais = item_retorno === item_comparacao;
    campo.html(converteFloatParaMoeda(item_retorno, 2) + (!iguais ? '<br><strong>'+converteFloatParaMoeda(item_comparacao, 2)+'</strong>' : '')).css('background', (iguais ? cor_sucesso : cor_falha));
}

