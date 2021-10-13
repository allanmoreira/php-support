var btn_atualizar_token = $('#btn_atualizar_token');
var btn_executar = $('#btn_executar');

var LOCAL_STORAGE_TOKEN = 'TOKEN';

btn_atualizar_token.click(function(){
    gerarToken();
});

function gerarToken() {
    $.ajax({
        url: URL[ambiente.val()] + '/token',
        async: true,
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({
            "username":"allanmoreira",
            "password":"07032019"
        }),
        statusCode: {
            401: function (response) {
                abreNotificacao('warning', 'Não autorizado!');
            }
        },
        success: function (response) {
            localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.token);
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