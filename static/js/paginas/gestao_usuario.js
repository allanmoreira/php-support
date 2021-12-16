var mensagem = $('#mensagem');

var btn_consultar = $('#btn_consultar');
var btn_confirmar = $('#btn_confirmar');
var btn_alterar = $('#btn_alterar');
var btn_cancelar = $('#btn_cancelar');
var usuario = $('#usuario');
var nome = $('#nome');
var hash = $('#hash');
var novo_email = $('#novo_email');
var email_atual = $('#email_atual');
var email_solicitacao = $('#email_solicitacao');
var data_solicitacao = $('#data_solicitacao');

var cor_email_south = '#3bbbfa';
var cor_email_gmail = '#70ff8e';

var email_south = 'allan.moreira@southsystem.com.br';
var email_gmail = 'allanfelipe.moreira@gmail.com';

$(function(){
    getConfigs();
    novo_email.css('background-color', cor_email_gmail);
    usuario.val('02111023000');
});

btn_consultar.click(function(){
    consultarDadosEc();
});

function consultarDadosEc(){
    hash.val('');
    consultarUsuario();
    consultarEcs();
}

function consultarUsuario(){
    $.ajax({
        url: getUrlBaseServico(SERVICO.MANAGEMENT) + '/v1/user/'+usuario.val(),
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        data: null,
        success: function (response) {
            var status = parseInt(response.status.value);
            if(status === 200 || status === 0) {
                abreNotificacao('success', 'Consulta realizada com sucesso!');

                email_solicitacao.val('').css('background-color', '#eee');
                email_atual.val('').css('background-color', '#eee');
                data_solicitacao.val('');

                var usuario = response.data;
                nome.val(usuario.firstName + ' ' + usuario.lastName);

                var emailAtual = usuario.email;
                var novoEmail = '';
                if (usuario.solicitacaoEmail !== undefined) {
                    novoEmail = usuario.solicitacaoEmail.emailNew;
                    data_solicitacao.val(converteTimestampParaString(usuario.solicitacaoEmail.dataCriacao));
                }

                email_atual.val(emailAtual);
                email_solicitacao.val(novoEmail);
                if (emailAtual === email_south) {
                    email_atual.css('background-color', cor_email_south);
                    novo_email.val(email_gmail).trigger('change');
                } else if (emailAtual === email_gmail) {
                    email_atual.css('background-color', cor_email_gmail);
                    novo_email.val(email_south).trigger('change');
                }

                if (novoEmail === email_south)
                    email_solicitacao.css('background-color', cor_email_south);
                else if (novoEmail === email_gmail)
                    email_solicitacao.css('background-color', cor_email_gmail);
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

function consultarEcs(){
    $.ajax({
        url: getUrlBaseServico(SERVICO.MANAGEMENT) + '/v1/user/' + usuario.val() + '/merchants',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        data: null,
        success: function (response) {
            var status = parseInt(response.status.value);
            if(status === 200 || status === 0) {
                abreNotificacao('success', 'Consulta realizada com sucesso!');
                $('#tabela tbody > tr').remove();
                preencheTabela(response.data);
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

btn_confirmar.click(function(){
    confirmarCancelar(true);
});

btn_cancelar.click(function(){
    confirmarCancelar(false);
});

function confirmarCancelar(isConfirmar){
    $.ajax({
        url: getUrlBaseServico(SERVICO.MANAGEMENT) + '/public/v1/user/update-email/' + (isConfirmar ? 'confirm' : 'cancel') + '?key=' + getHash(hash.val()),
        async: true,
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (response) {
            var status = parseInt(response.status.value);
            if(status === 200 || status === 0) {
                if (response.status.reference === undefined)
                    abreNotificacao('info', 'Solicitação realizada com sucesso!');
                else
                    abreNotificacao('danger', response.status.description);
                mensagem.html(response.status.description);
                consultarDadosEc();
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

btn_alterar.click(function(){
    $.ajax({
        url: getUrlBaseServico(SERVICO.MANAGEMENT) + '/v1/user/' + usuario.val() + '/update-email/request?email=' + novo_email.val(),
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + getToken());
        },
        data: null,
        success: function (response) {
            var status = parseInt(response.status.value);
            if(status === 200 || status === 0) {
                if (response.status.reference === undefined)
                    abreNotificacao('info', 'Email alterado com sucesso!');
                else
                    abreNotificacao('danger', response.status.description);
                mensagem.html(response.status.description);
                consultarDadosEc();
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

function getHash(link){
    return link.split('key=')[1];
}

novo_email.change(function(){
    if(this.value === email_south)
        novo_email.css('background-color', cor_email_south);
    else if(this.value === email_gmail)
        novo_email.css('background-color', cor_email_gmail);
});