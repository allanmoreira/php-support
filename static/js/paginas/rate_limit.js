var mensagem = $('#mensagem');

var ec = $('#ec');
var username = $('#username');
var tabela = $('#tabela');

$(function(){
    getConfigs();
    ec.val('338869');
    username.val('02823842004');
});

$('.form-control').keydown(function (e){
    if(e.keyCode == 13){
        consulta();
    }
});

btn_executar.click(function(){
    // var url = URL.CADASTRO.LOCAL + '/api/v1/vinculos/'+username.val()+'?codEc='+ec.val();
    // var method = 'POST';
    var url = getUrlBaseServico(SERVICO.CADASTRO) + '/public/api/v1/usuario/'+username.val();
    var method = 'GET';
    $('#tabela tbody > tr').remove();
    var cont = 1;
    consulta(url, method, cont++);
    consulta(url, method, cont++);
    consulta(url, method, cont++);
    consulta(url, method, cont++);
    consulta(url, method, cont++);
    consulta(url, method, cont++);
    consulta(url, method, cont++);
    consulta(url, method, cont++);
    consulta(url, method, cont++);
    consulta(url, method, cont++);
});

function consulta(url, method, ordem) {
    $.ajax({
        url: url,
        async: true,
        type: method,
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        data: null,
        success: function (response) {
            var status = parseInt(response.status.value);
            if(status === 200 || status === 0) {
                abreNotificacao('success', 'Consulta realizada com sucesso!');
                preencheTabela(ordem, response.status.description);
            } else if(status === 404){
                abreNotificacao('warning', 'Não encontrado!');
            } else {
                abreNotificacao('danger', 'ERRO');
            }
        },
        error: function (response) {
            if(response.status === 401){
                abreNotificacao('warning', 'Não autorizado!');
                preencheTabela(ordem, response.statusText);
            } else {
                abreNotificacao('danger', 'ERRO');
                preencheTabela(ordem, response.status.description);
            }
        }
    });
}

function preencheTabela(chamada, description){
    $('#tabela tbody').append(
        '<tr>' +
            '<td>'+chamada+'</td>' +
            '<td>'+description+'</td>' +
        '</tr>'
    );
}