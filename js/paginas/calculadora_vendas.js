var mensagem = $('#mensagem');

var valor = $('#valor');
var cartao = $('#cartao');
var ec = $('#ec');
var tabela = $('#tabela');

$(function(){
    getConfigs();
    valor.maskMoney();
    ec.val('51161828');
    cartao.val('154');
    valor.val(converteFloatParaMoeda('2505'));
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
        url: URL.PRODUTOS[ambiente.val()] + '/api/v1/estabelecimento/'+ec.val()+'/simulador',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("authorization", 'bearer ' + getToken());
        },
        data: {
            valor : converteMoedaParaFloat(valor.val(), 2),
            cartao: cartao.val()
        },
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            mensagem.html(response.status.description);
            $('#tabela thead > tr').remove();
            $('#tabela tbody > tr').remove();
            preencheTabela(response.data.tecnologias, organizaRetorno(response.data.tecnologias));
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

function organizaRetorno(tecnologias){
    var ordem = [
        'Débito',
        'Crediário',
        'Crédito à vista',
        'Parcelado 2x',
        'Parcelado 3x',
        'Parcelado 4x',
        'Parcelado 5x',
        'Parcelado 6x',
        'Parcelado 7x',
        'Parcelado 8x',
        'Parcelado 9x',
        'Parcelado 10x',
        'Parcelado 11x',
        'Parcelado 12x',
        'Parcelado até 3x',
        'Parcelado até 6x',
        'Parcelado até 9x',
        'Parcelado até 12x',
        'Crédito Parcelado Emissor',
    ];
    var map_retorno = {};
    $.each(ordem, function (i) {
        map_retorno[ordem[i]] = [];
    });
    for (var key in map_retorno){
        tecnologias.forEach(function (item_tecnologia){
            var taxas = item_tecnologia.bandeiras[0].taxas;
            for (let i = 0; i < taxas.length; i++) {
                var taxa = taxas[i];
                if(taxa.modalidade === key){
                    map_retorno[key].push(taxa.valorReceber);
                    break;
                }
            }
        });
    }
    var retorno = [];
    for (var key in map_retorno){
        retorno.push({
            modalidade : key,
            taxas : map_retorno[key]
        });
    }
    return retorno;
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