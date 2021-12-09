var mensagem = $('#mensagem');

var ec = $('#ec');
var events = $('#events');
var tabela = $('#tabela');

$(function(){
    getConfigs();
    ec.val('281534');
    eventsTypes();
});

$('.form-control').keydown(function (e){
    if(e.keyCode == 13){
        consulta();
    }
});

btn_executar.click(function(){
    consulta();
});

function eventsTypes() {
    $.ajax({
        url: URL.MANAGEMENT[ambiente.val()] + '/v1/audit/events/event-types',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            mensagem.html(response.status.description);
            response.data.forEach(function (item) {
                events.append($('<option>', {
                    value: item,
                    text: item
                }));
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

function consulta() {
    var data = {
        'size': 10,
        'page': 0,
        'min-date': '2021-11-25T00:00:00.000-03:00',
        'max-date': '2021-12-09T23:59:59.999-03:00',
        'merchant-id': +ec.val()
    };
    var type = events.val();
    if(type !== '')
        data.type = events.val();

    $.ajax({
        url: URL.MANAGEMENT[ambiente.val()] + '/v1/audit/events',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        data: data,
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            mensagem.html(response.status.description);
            $('#tabela tbody > tr').remove();
            preencheTabela(response.data.content);
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
                '<td class="text-center"></td>' +
                '<td class="text-center">' + getDataFromTimestamp(item.date) + '</td>' +
                '<td class="text-center">' + getHoraFromTimestamp(item.date) + '</td>' +
                '<td class="text-center">' + item.type + '</td>' +
                '<td class="text-center">' + item.targetMerchant + '</td>' +
                '<td class="text-center">' + item.sourceUsername + '</td>' +
                '<td class="text-center">' + item.responseStatus.value + '</td>' +
                '<td class="text-center">' + item.responseStatus.description + '</td>' +
            '</tr>';
    });
    $('#tabela tbody').append(html);
}