var btn_atualizar_token = $('#btn_atualizar_token');
var btn_executar = $('#btn_executar');

var LOCAL_STORAGE_TOKEN = 'TOKEN';

var LOGIN_REDE = '';
var SENHA_REDE = '';

btn_atualizar_token.click(function(){
    gerarToken();
});

var DATA_TOKEN = {
    AUTH : {
        client_id : 'minha-conta-web',
        grant_type : 'password',
        username : LOGIN,
        password : SENHA,
        scope : 'offline_access'
    },
    INTERNO : {
        client_id : 'minha-conta-web',
        grant_type : 'password',
        username : LOGIN_REDE,
        password : SENHA_REDE,
        scope : 'openid'
    },
    ATENDIMENTO : {
        client_id : 'mc-atendimento-web',
        grant_type : 'password',
        username : LOGIN_REDE,
        password : SENHA_REDE
    }
}

function gerarToken() {
    $.ajax({
        url: getUrlKeycloak(),
        async: true,
        type: 'POST',
        dataType: 'json',
        data: DATA_TOKEN[realm.val()],
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