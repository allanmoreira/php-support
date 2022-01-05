var mensagem = $('#mensagem');
var btn_executar = $('#btn_executar');
var cor_sucesso = '#56ee71';
var cor_falha = '#ff4949';

var entradas_projecao = $('#entradas_projecao');
var entradas_recebido = $('#entradas_recebido');
var entradas_pendente = $('#entradas_pendente');
var total_total = $('#total_total');
var total_pago = $('#total_pago');
var total_saldo_devedor = $('#total_saldo_devedor');
var atual_atual = $('#atual_atual');
var atual_projecao_mes = $('#atual_projecao_mes');
var atual_projecao_atual_mes = $('#atual_projecao_atual_mes');

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
    var entradas = item.entradas;
    var dividas = item.dividas;
    var saldo = item.saldo;
    entradas_projecao.html(converteFloatParaMoeda(entradas.projecao, 2));
    entradas_recebido.html(converteFloatParaMoeda(entradas.recebido, 2));
    entradas_pendente.html(converteFloatParaMoeda(entradas.pendente, 2));
    total_total.html(converteFloatParaMoeda(dividas.total, 2));
    total_pago.html(converteFloatParaMoeda(dividas.pago, 2));
    total_saldo_devedor.html(converteFloatParaMoeda(dividas.saldoDevedor, 2));
    atual_atual.html(converteFloatParaMoeda(saldo.atual, 2));
    atual_projecao_mes.html(converteFloatParaMoeda(saldo.projecaoMes, 2));
    atual_projecao_atual_mes.html(converteFloatParaMoeda(saldo.projecaoAtualMes, 2));
}

