$(function(){
    consulta();
});

function consulta() {
    $.ajax({
        url: 'service/Artifactory.php?action=list',
        async: true,
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            $('#tabela tbody > tr').remove();
            var lista_dados = response.children;
            $.each(lista_dados, function (i) {
                preencheTabela(lista_dados[i]);
            });
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

function preencheTabela(item){
    var tabela = $('#tabela tbody');
    tabela.append(
        '<tr>' +
            '<td>' + item.uri + '</td>' +
        '</tr>'
    );
}

function dataSqlParaString(data){
    var split = data.split('-');
    return split[2] + '/' + split[1] + '/' + split[0];
}

function getAno(data){
    return data.split('/')[2];
}

function getValor(valor){
    return converteFloatParaMoeda(-valor, 2);
}