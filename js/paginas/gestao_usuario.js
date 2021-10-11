var mensagem = $('#mensagem');

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

btn_executar.click(function(){
    consulta();
});

function consulta() {
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
            email_atual.val(usuario.email);
            email_solicitacao.val(usuario.solicitacaoEmail.emailNew);
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

function preencheTabela(tecnologias, lista_taxas){
    var header = '<tr><th></th>';
    $.each(tecnologias, function (i) {
        header += '<th class="text-center">'+tecnologias[i].chaveTecnologia.toUpperCase()+'</th>';
    });
    header += '</tr>';
    $('#tabela thead').append(header);

    var html = '';
    lista_taxas.forEach(function (item_taxa_modalidade){
        if(item_taxa_modalidade.taxas.length !== 0) {
            var cor_celula = '';
            if(item_taxa_modalidade.modalidade === 'Parcelado 10x')
                cor_celula = ';background-color: yellow';
            html += '<tr>' +
                '<td class="text-center" style="width: 200px '+cor_celula+'"><strong>' + item_taxa_modalidade.modalidade + '</strong></td>';
            item_taxa_modalidade.taxas.forEach(function (taxa) {
                html += '<td class="text-center" style="'+cor_celula+'">' + converteFloatParaMoeda(taxa, 2) + '</td>';
            });
            html += '<tr>';
        }
    });
    $('#tabela tbody').append(html);
}