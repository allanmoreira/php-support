var mensagem = $('#mensagem');

var tabela = $('#tabela');
var pagina = $('#pagina');
var itens_pagina = $('#itens_pagina');
var response = $('#response');

$(function(){
    getConfigs();
    itens_pagina.val('50');
});

btn_executar.click(function(){
    consulta();
});

function consulta() {
    $.ajax({
        url: getUrlBaseServico(SERVICO.MANAGEMENT) + '/v1/parameters',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        success: function (response) {
            var status = parseInt(response.status.value);
            if(status === 200 || status === 0) {
                abreNotificacao('success', 'Consulta realizada com sucesso!');
                mensagem.html(response.status.description);
                var totalPages = parseInt(response.data.totalPages);
                pagina.empty();
                pagina.append($('<option>', {
                    value: 0,
                    text: 0
                }));
                for (let i = 1; i < totalPages; i++) {
                    pagina.append($('<option>', {
                        value: i,
                        text: i
                    }));
                }
                $('#tabela tbody > tr').remove();
                preencheTabela(response.data.content);
            } else if(status === 404){
                abreNotificacao('warning', 'Não encontrado!');
            } else {
                abreNotificacao('danger', 'ERRO');
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

function preencheTabela(lista_itens){
    var html = '';
    lista_itens.forEach(function (item){
        html +=
            '<tr>' +
                '<td class="text-center">' + item.key + '</td>' +
                '<td class="text-center">' + item.description + '</td>' +
                '<td class="text-center">' + item.type + '</td>' +
                '<td class="text-center">' + item.value + '</td>' +
            '</tr>';
    });
    $('#tabela tbody').append(html);
}
