var btn_atualizar_token = $('#btn_atualizar_token');
var btn_executar = $('#btn_executar');
var usuario = $('#usuario');
var senha = $('#senha');

var LOCAL_STORAGE_TOKEN = 'TOKEN';
var LOCAL_STORAGE_USUARIO = 'USUARIO';
var LOCAL_STORAGE_SENHA = 'SENHA';

$(function(){
    usuario.val(localStorage.getItem(LOCAL_STORAGE_USUARIO));
    senha.val(localStorage.getItem(LOCAL_STORAGE_SENHA));
});

btn_atualizar_token.click(function(){
    localStorage.setItem(LOCAL_STORAGE_USUARIO, usuario.val());
    localStorage.setItem(LOCAL_STORAGE_SENHA, senha.val());
    gerarToken();
});

var DATA_TOKEN = {
    AUTH : {
        client_id : 'minha-conta-web',
        grant_type : 'password',
        username : null,
        password : null,
        scope : 'offline_access'
    },
    INTERNO : {
        client_id : 'minha-conta-web',
        grant_type : 'password',
        username : null,
        password : null,
        scope : 'openid'
    },
    ATENDIMENTO : {
        client_id : 'mc-atendimento-web',
        grant_type : 'password',
        username : null,
        password : null
    }
}

function gerarToken() {
    var data = DATA_TOKEN[realm.val()];
    data.username = localStorage.getItem(LOCAL_STORAGE_USUARIO);
    data.password = localStorage.getItem(LOCAL_STORAGE_SENHA);
    $.ajax({
        url: getUrlKeycloak(),
        async: true,
        type: 'POST',
        dataType: 'json',
        data: data,
        statusCode: {
            401: function (response) {
                abreNotificacao('warning', 'Não autorizado!');
            }
        },
        success: function (response) {
            localStorage.setItem(LOCAL_STORAGE_TOKEN, response.access_token);
            abreNotificacao('success', 'Token gerado com sucesso!');
        },
        error: function (response) {
            abreNotificacao('danger', 'ERRO');
        }
    });
}

function getToken(){
    return localStorage.getItem(LOCAL_STORAGE_TOKEN);
}