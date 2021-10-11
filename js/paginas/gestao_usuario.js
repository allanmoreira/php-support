var mensagem = $('#mensagem');

var btn_consultar = $('#btn_consultar');
var usuario = $('#usuario');
var nome = $('#nome');
var email_atual = $('#email_atual');
var email_solicitacao = $('#email_solicitacao');

$(function(){
    getConfigs();
    usuario.val('02111023000');
});

$('.form-control').keydown(function (e){
    if(e.keyCode == 13){
        consulta();
    }
});

btn_consultar.click(function(){
    consultarUsuario();
    consultarEcs();
});

function consultarUsuario(){
    $.ajax({
        url: URL.MANAGEMENT[ambiente.val()] + '/v1/user/'+usuario.val(),
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("authorization", 'bearer ' + getToken());
        },
        data: null,
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            mensagem.html(response.status.description);
            var usuario = response.data;
            nome.val(usuario.firstName + ' ' + usuario.lastName);

            var emailAtual = usuario.email;
            var novoEmail = usuario.solicitacaoEmail.emailNew;
            email_atual.val(emailAtual);
            email_solicitacao.val(novoEmail);
            if(emailAtual !== novoEmail)
                email_solicitacao.css('background-color', '#efef6f');
            else
                email_solicitacao.css('background-color', '#eee');
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

function consultarEcs(){
    $.ajax({
        url: URL.MANAGEMENT[ambiente.val()] + '/v1/user/' + usuario.val() + '/merchants',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("authorization", 'bearer ' + getToken());
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

function preencheTabela(lista){
    lista.forEach(function (ec){
        $('#tabela tbody').append(
            '<tr>' +
                '<td class="text-center">' + ec.id + '</td>' +
                '<td class="text-center">' + ec.razaoSocial + '</td>' +
                '<td class="text-center">' + ec.nomeFantasia + '</td>' +
            '</tr>'
        );
    });
}