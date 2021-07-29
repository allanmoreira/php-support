var mensagem = $('#mensagem');

var valor = $('#valor');
var cartao = $('#cartao');
var ec = $('#ec');
var tabela = $('#tabela');

$(function(){
    ec.val('51161828');
    cartao.val('154');
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
            valor : valor.val(),
            cartao: cartao.val()
        },
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            $('#tabela thead > tr').remove();
            $('#tabela tbody > tr').remove();
            preencheTabela(response.data.tecnologias);
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

function preencheTabela(tecnologias){
    var header = '<tr><th></th>';
    $.each(tecnologias, function (i) {
        header += '<th class="text-center">'+tecnologias[i].chaveTecnologia.toUpperCase()+'</th>';
    });
    header += '</tr>';
    $('#tabela thead').append(header);

    var html = '';
    for (let j = 0; j < 14; j++) {
        html += '<tr>';
        var linha_adicionada = false;
        $.each(tecnologias, function (i) {
            if(!linha_adicionada){
                html += '<td class="text-center" style="width: 10%"><strong>' + tecnologias[i].bandeiras[0].taxas[j].modalidade + '</strong></td>';
                linha_adicionada = true;
            }
            html += '<td class="text-center">' + tecnologias[i].bandeiras[0].taxas[j].valorReceber + '</td>';
        });
        html += '<tr>';
    }
    $('#tabela tbody').append(html);
}