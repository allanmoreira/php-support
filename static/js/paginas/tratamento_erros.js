var btn_consultar = $('#btn_consultar');

$(function(){
    consultar();
});

btn_consultar.click(function(){
    consultar();
});

function consultar(){
    $('#tabela tbody > tr').remove();
    consultarEndpoint('caso1', 'POR - Sem permissão de acesso.');
    consultarEndpoint('caso2', 'KC - Resolveremos em breve :)');
    consultarEndpoint('mgm', 'MGM - Resolveremos em breve :)');
}

function consultarEndpoint(endpoint, msg_esperada){
    $.ajax({
        url: 'http://localhost:8080/tratamento-erros/' + endpoint,
        async: true,
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (response) {
            preencheTabela(endpoint, msg_esperada, response.status);
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

function preencheTabela(endpoint,msg_esperada, response_status){
    var cor_sucesso = '#56ee71';
    var cor_falha = '#ff4949';
    let sucesso = response_status.description === msg_esperada;
    let cor = sucesso ? cor_sucesso : cor_falha;
    let icone = sucesso ? 'fa fa-check' : 'fa fa-times';
    $('#tabela tbody').append(
        '<tr>' +
            '<td class="text-center" style="background: ' + cor + '"><span class="'+icone+'"></span></td>' +
            '<td class="text-center">' + endpoint + '</td>' +
            '<td class="text-center">' + response_status.value + '</td>' +
            '<td class="text-center">' + response_status.description + '</td>' +
            '<td class="text-center">' + (isEmpty(response_status.exception) ? '' : response_status.exception.type) + '</td>' +
            '<td class="text-center">' + response_status.service.owner.key + '</td>' +
        '</tr>'
    );
}

function isEmpty(data){
    return data == '' || data === null  || data === undefined;
}