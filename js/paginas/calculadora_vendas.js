var mensagem = $('#mensagem');

var valor = $('#valor');
var ec = $('#ec');
var tabela = $('#tabela tbody');

$(function(){
    ec.val('51161828');
    valor.val('2505');
});

$('.form-control').keydown(function (e){
    if(e.keyCode == 13){
        consulta();
    }
});

btn_executar.click(function(){
    consulta();
});

function consulta() {
    $.ajax({
        url: URL.PRODUTOS.LOCAL + '/api/v1/estabelecimento/'+ec.val()+'/simulador',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("authorization", 'bearer ' + getToken());
        },
        data: {
            valor : valor.val()
        },
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            $('#tabela tbody > tr').remove();
            mensagem.html('Mensagem: ' + response.status.description);
            if(response.data !== undefined && response.data.resumo !== undefined) {
                if(response.data.msgRetorno !== undefined)
                    mensagem.html('Mensagem: <span style="color: red" id="mensagem">'+response.data.msgRetorno+'</span>');

                var lista = response.data.totalizadores.totalizadoresPorTipo;
                $.each(lista, function (i) {
                    preencheTabela(lista[i]);
                });
            }
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
    $('#tabela_resumo_novo tbody').append(
        '<tr>' +
            '<td class="text-center">'+item.descricao+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(item.valorTotal)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(item.valorDesconto)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(item.valorPago)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(item.valorPendente)+'</td>' +
        '</tr>'
    );
}