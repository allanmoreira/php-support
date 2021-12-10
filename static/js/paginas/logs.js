var mensagem = $('#mensagem');

var ec = $('#ec');
var events = $('#events');
var periodo = $('#periodo');
var btn_update_event_types = $('#btn_update_event_types');
var tabela = $('#tabela');
var modal_detalhes = $('#modal_detalhes');
var id = $('#id');
var estabelecimento = $('#estabelecimento');
var usuario = $('#usuario');
var pagina = $('#pagina');
var itens_pagina = $('#itens_pagina');
var service = $('#service');
var path = $('#path');
var response = $('#response');
var stack_info = $('#stack_info');
var detail = $('#detail');
var minDate;
var maxDate;

$(function(){
    getConfigs();
    ec.val('281534');
    periodo.val('15');
    itens_pagina.val('50');
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

btn_update_event_types.click(function(){
    eventsTypes();
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

function consulta(id) {
    getPeriodo();
    var buscaPorId = id !== undefined;
    var data;
    if(buscaPorId) {
        data = {
            'id': id,
            'size': 1,
            'page': 0
        };
        var type = events.val();
        if (type !== '')
            data.type = events.val();
    } else {
        data = {
            'size': itens_pagina.val(),
            'page': pagina.val(),
            'min-date': minDate,
            'max-date': maxDate,
            'merchant-id': +ec.val()
        };
    }

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
            if(buscaPorId){
                preencheModal(response.data.content[0]);
            } else {
                var totalPages = parseInt(response.data.totalPages);
                pagina.empty();
                pagina.append($('<option>', {
                    value: 0,
                    text: 0
                }));
                for(let i=1; i<totalPages;i++) {
                    pagina.append($('<option>', {
                        value: i,
                        text: i
                    }));
                }
                $('#tabela tbody > tr').remove();
                preencheTabela(response.data.content);
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
        var status = item.responseStatus.value;
        html +=
            '<tr>' +
                '<td class="text-center"><button class="btn btn-sm ' + (status === '0' ? 'btn-success' : 'btn-danger') + ' btn-detalhes" data-id="' + item.id + '">Detalhes</button></td>' +
                '<td class="text-center">' + item.id + '</td>' +
                '<td class="text-center">' + getDataFromTimestamp(item.date) + '</td>' +
                '<td class="text-center">' + getHoraFromTimestamp(item.date) + '</td>' +
                '<td class="text-center">' + item.type + '</td>' +
                '<td class="text-center">' + item.targetMerchant + '</td>' +
                '<td class="text-center">' + item.sourceUsername + '</td>' +
                '<td class="text-center">' + status + '</td>' +
                '<td class="text-center">' + item.responseStatus.description + '</td>' +
            '</tr>';
    });
    $('#tabela tbody').append(html);
}

function getPeriodo(){
    var hoje = dataAtual();
    maxDate = toTimestampDate(hoje) + 'T23:59:59.999-03:00';
    var dataInicio = subtraiDiasDaData(hoje, periodo.val());
    minDate = toTimestampDate(dataInicio) + 'T00:00:00.000-03:00';
}

function toTimestampDate(data){
    var split = converteDataParaString(data).split('/');
    var ano = split[2];
    var mes = split[1];
    var dia = split[0];
    return ano + '-' + mes + '-' + dia;
}

function limpaModal(){
    estabelecimento.html('');
    usuario.html('');
    service.html('');
    path.html('');
    response.html('');
    stack_info.html('');
    detail.html('');
}

function preencheModal(evento){
    limpaModal();
    id.html(evento.id);
    estabelecimento.html(evento.targetMerchant);
    usuario.html(evento.sourceUsername);
    service.html(
        evento.service.name + '.' +
        evento.service.controller + '.' +
        evento.service.method + '@' +
        evento.service.version
    );
    path.html(evento.service.path);
    response.html(JSON.stringify(evento.responseStatus, undefined, 4));
    var stack_info_html;
    try{
        stack_info_html = JSON.stringify(JSON.parse(evento.stackInformation), undefined, 4);
    } catch (e){
        stack_info_html = evento.stackInformation;
    }
    stack_info.html(stack_info_html);
    detail.html(evento.detail);
    modal_detalhes.modal('show');
}

$(document).on("click", ".btn-detalhes", function() {
    var id = $(this).attr("data-id");
    consulta(id);
});