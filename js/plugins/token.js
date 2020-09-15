var btn_atualizar_token = $('#btn_atualizar_token');

btn_atualizar_token.click(function(){
    token();
});

function token() {
    $.ajax({
        url: URL.KEYCLOACK.OLD + '/auth/realms/external/protocol/openid-connect/token',
        async: true,
        type: 'POST',
        dataType: 'json',
        data: {
            client_id : 'minha-conta-android',
            grant_type : 'password',
            username : LOGIN,
            password : SENHA,
            scope : 'offline_access'
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