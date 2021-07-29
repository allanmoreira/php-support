var btn_atualizar_token = $('#btn_atualizar_token');
var btn_executar = $('#btn_executar');

btn_atualizar_token.click(function(){
    token();
});

var data_token = {
    auth : {
        client_id : 'minha-conta-android',
        grant_type : 'password',
        username : LOGIN,
        password : SENHA,
        scope : 'offline_access'
    },
    interno : {
        client_id : 'minha-conta-web',
        grant_type : 'password',
        username : LOGIN,
        password : SENHA,
        scope : 'openid'
    }
}

function token(token_origin, token_type) {
    var url = URL.KEYCLOACK.NOVO + '/auth/realms/external/protocol/openid-connect/token';
    if(token_origin === TOKEN_ORIGIN.OLD)
        url = URL.KEYCLOACK.OLD + '/auth/realms/external/protocol/openid-connect/token';
    var data = data_token.auth;
    if(token_type === TOKEN_TYPE.INTERNO)
        data = data_token.interno;
    $.ajax({
        url: url,
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
            TOKEN = response.access_token;
            REFRESH_TOKEN = response.refresh_token;
            abreNotificacao('success', 'Token gerado com sucesso!');
        },
        error: function (response) {
            abreNotificacao('danger', 'ERRO');
        }
    });
}