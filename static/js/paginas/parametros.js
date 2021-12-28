var mensagem = $('#mensagem');

var tabela = $('#tabela');
var pagina = $('#pagina');
var itens_pagina = $('#itens_pagina');
var response = $('#response');
var btn_cadastro = $('#btn_cadastro');
var btn_salvar_cadastro = $('#btn_salvar_cadastro');
var modal_cadastro = $('#modal_cadastro');
var key = $('#key');
var type = $('#type');
var description = $('#description');
var value = $('#value');

$(function(){
    getConfigs();
    itens_pagina.val('50');
    consulta();
    consultaTypes();
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
                '<td class="text-center"><a href="javascript:void(0)" data-id="' + item.key + '" class="btn-editar" data-toggle="tooltip" title="Editar"><strong>' + item.key + '</strong></a></td>' +
                '<td class="text-center">' + (item.description !== undefined ? item.description : '') + '</td>' +
                '<td class="text-center">' + item.type + '</td>' +
                '<td class="text-center">' + item.value + '</td>' +
            '</tr>';
    });
    $('#tabela tbody').append(html);
}

btn_cadastro.click(function(){
    limpaForm();
    modal_cadastro.modal('show');
});

btn_salvar_cadastro.click(function(){
    cadastro();
});

function limpaForm(){
    key.val('');
    type.val('');
    value.val('');
    description.val('');
}

function cadastro() {
    $.ajax({
        url: getUrlBaseServico(SERVICO.MANAGEMENT) + '/v1/parameters',
        async: true,
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        data: JSON.stringify({
            "key": key.val(),
            "description": description.val(),
            "value": value.val(),
            "type": type.val()
        }),
        success: function (response) {
            var status = parseInt(response.status.value);
            if(status === 200 || status === 0) {
                mensagem.html(response.status.description);
                modal_cadastro.modal('hide');
                consulta();
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

$(document).on("click", ".btn-editar", function() {
    var id = $(this).attr("data-id");
    $.ajax({
        url: getUrlBaseServico(SERVICO.MANAGEMENT) + '/v1/parameters/' + id,
        async: true,
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        success: function (response) {
            var status = parseInt(response.status.value);
            if(status === 200 || status === 0) {
                mensagem.html(response.status.description);
                limpaForm();
                var item = response.data;
                key.val(item.key);
                type.val(item.type);
                value.val(item.value);
                description.val(item.description);
                modal_cadastro.modal('show');
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
});

function consultaTypes() {
    $.ajax({
        url: getUrlBaseServico(SERVICO.MANAGEMENT) + '/v1/parameters/value-types',
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
                var list = response.data;
                type.empty();
                list.forEach(function (item){
                    type.append($('<option>', {
                        value: item,
                        text: item
                    }));
                });
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