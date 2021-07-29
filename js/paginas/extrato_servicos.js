var mensagem = $('#mensagem');
var data_inicio = $('#data_inicio');
var data_fim = $('#data_fim');
var ec = $('#ec');
var tabela_detalhes_tbody = $('#tabela_detalhes tbody');

$(function(){
    // data_inicio.val('2019-01-01T00:00:00.000-0300');
    // data_fim.val('2020-09-01T00:00:00.000-0300');

    // data_inicio.val('2018-03-01T00:00:00.000-0300');
    // data_fim.val('2020-04-01T00:00:00.000-0300');
    // ec.val('83917');

    data_inicio.val('2015-01-01T00:00:00.000-0300');
    data_fim.val('2020-09-01T00:00:00.000-0300');
    ec.val('10057');

    // data_inicio.val('2020-03-01T00:00:00.000-0300');
    // data_fim.val('2020-04-01T00:00:00.000-0300');
    // ec.val('50501052');

    // data_inicio.val('2016-01-01T00:00:00.000-0300');
    // data_fim.val('2020-02-01T00:00:00.000-0300');
    // ec.val('338869');

    // data_inicio.val(Cookies.get('data_inicio'));
    // data_fim.val(Cookies.get('data_fim'));
    // ec.val(Cookies.get('ec'));
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
    /*
    Cookies.set("data_inicio", data_inicio.val());
    Cookies.set("data_fim", data_fim.val());
    Cookies.set("ec", ec.val());
    */

    /*
        52239237
    */

/*
    var response = getJson();
    $('#tabela_resumo tbody > tr').remove();
    $('#tabela_detalhes tbody > tr').remove();
    var lista = response.data.resumo;
    $.each(lista, function(i) {
        preencheTabelaResumo(lista[i]);

        preencheTabelaDetalhes(i, lista[i]);
    });
*/


    $.ajax({
        url: URL.EXTRATOS.HTI + '/api/v2/estabelecimento/'+ec.val()+'/extratos/servicos',
        async: true,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("authorization", 'bearer ' + getToken());
        },
        data: {
            dataMinima : data_inicio.val(),
            dataMaxima : data_fim.val(),
            aberto : true,
            pago : true
        },
        success: function (response) {
            abreNotificacao('success', 'Consulta realizada com sucesso!');
            $('#tabela_resumo_novo tbody > tr').remove();
            $('#tabela_resumo tbody > tr').remove();
            $('#tabela_detalhes tbody > tr').remove();
            mensagem.html('Mensagem: ');
            if(response.data !== undefined && response.data.resumo !== undefined) {
                if(response.data.msgRetorno !== undefined)
                    mensagem.html('Mensagem: <span style="color: red" id="mensagem">'+response.data.msgRetorno+'</span>');

                var lista = response.data.totalizadores.totalizadoresPorTipo;
                $.each(lista, function (i) {
                    preencheTabelaResumonovo(lista[i]);
                });

                lista = response.data.resumo;
                $.each(lista, function (i) {
                    preencheTabelaResumo(lista[i]);
                    preencheTabelaDetalhes(i, lista[i]);
                });
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

function preencheTabelaResumonovo(item){
    $('#tabela_resumo_novo tbody').append(
        '<tr>' +
            '<td class="text-center">'+item.descricao+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(item.valorTotal)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(item.valorDesconto)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(item.valorPago)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(item.valorPendente)+'</td>' +
        '</tr>'
    );
}

function preencheTabelaResumo(objeto){
    $('#tabela_resumo tbody').append(
        '<tr>' +
            '<td class="text-center">'+objeto.tipo+'</td>' +
            '<td class="text-center">'+objeto.tipoDesconto+'</td>' +
            '<td class="text-center">'+objeto.descricao+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(objeto.valorTotal)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(objeto.desconto)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(objeto.valorPago)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(objeto.valorPendente)+'</td>' +
            '<td class="text-center">'+(objeto.dataCompensacao !== undefined ? converteData(PADRAO_DATA.SQL, objeto.dataCompensacao) : '')+'</td>' +
            '<td class="text-center">'+objeto.status+'</td>' +
        '</tr>'
    );
}

function preencheTabelaDetalhes(indice, objeto){
    tabela_detalhes_tbody.append(
        '<tr>' +
            '<td class="text-center">'+objeto.tipo+'</td>' +
            '<td class="text-center">'+objeto.tipoDesconto+'</td>' +
            '<td class="text-center">'+objeto.descricao+'</td>' +
            '<td class="text-center">'+(objeto.numeroDocumento !== undefined ? objeto.numeroDocumento : '')+'</td>' +
            '<td class="text-center">'+(objeto.dataVencimento !== undefined ? converteData(PADRAO_DATA.SQL, objeto.dataVencimento) : '')+'</td>' +
            '<td class="text-center">'+(objeto.dataCompensacao !== undefined ? converteData(PADRAO_DATA.SQL, objeto.dataCompensacao) : '')+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(objeto.valorTotal)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(objeto.desconto)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(objeto.valorPago)+'</td>' +
            '<td class="text-center">'+converteFloatParaMoeda(objeto.valorPendente)+'</td>' +
            '<td class="text-center">'+objeto.status+'</td>' +
        '</tr>'
    );

    // if(indice === 1){

    lista = objeto.detalhe;
    tabela_detalhes_tbody.append(
        '<tr>' +
            '<th class="text-center" style="background-color: yellow" colspan="2">Equipamento</th>'+
            '<th class="text-center" style="background-color: yellow" colspan="2">Serial</th>'+
            '<th class="text-center" style="background-color: yellow">Valor</th>'+
            '<th class="text-center" style="background-color: yellow">Desconto</th>'+
            '<th class="text-center" style="background-color: yellow">Data Ativação</th>'+
            '<th class="text-center" style="background-color: yellow"></th>'+
            '<th class="text-center" style="background-color: yellow"></th>'+
            '<th class="text-center" style="background-color: yellow"></th>'+
        '</tr>'
    );

    $.each(lista, function(i) {
        tabela_detalhes_tbody.append(
            '<tr>' +
                '<td class="text-center" style="background-color: yellow" colspan="2">'+lista[i].descricao+'</td>' +
                '<td class="text-center" style="background-color: yellow" colspan="2">'+lista[i].serial+'</td>' +
                '<td class="text-center" style="background-color: yellow">'+converteFloatParaMoeda(lista[i].valor)+'</td>' +
                '<td class="text-center" style="background-color: yellow">'+converteFloatParaMoeda(lista[i].desconto)+'</td>' +
                '<td class="text-center" style="background-color: yellow">'+(lista[i].dataAtivacao !== undefined ? converteData(PADRAO_DATA.SQL, lista[i].dataAtivacao) : '')+'</td>' +
                '<td class="text-center" style="background-color: yellow"></td>' +
                '<td class="text-center" style="background-color: yellow"></td>' +
                '<td class="text-center" style="background-color: yellow"></td>' +
            '</tr>'
        );
    });


    // }
}

function getJson(){
    return {
        "status":{
            "value":"0",
            "description":"Requisição efetuada com sucesso."
        },
        "data":{
            "msgRetorno":"Foram encontradas cobranças para o período",
            "totalizadores":{
                "valorTotal":2638.96,
                "valorPendente":111.69,
                "valorPago":2489.96,
                "valorDesconto":-37.31
            },
            "resumo":[
                {
                    "tipo":"aluguel",
                    "numeroDocumento":"0238234544",
                    "descricao":"Aluguel Adquirência",
                    "dataPeriodoInicial":"2020-06-01",
                    "dataPeriodoFinal":"2020-06-30",
                    "dataVencimento":"2020-09-04",
                    "dataCompensacao":"2020-07-02",
                    "valorTotal":2291.96,
                    "valorPendente":111.69,
                    "valorPago":2142.96,
                    "desconto":-37.31,
                    "tipoDesconto":"Conta Integrada - Getnet",
                    "status":"Pago parcialmente",
                    "chaveNfe":"431044048200015490500033660289012002704",
                    "localNfe":"CB",
                    "numeroNF":"",
                    "situacaoSerasa":"",
                    "situacaoCobranca":"",
                    "inscricaoMunicipal":"",
                    "codigoVerificacao":"",
                    "detalhe":[
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"15271WL32609728",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2019-10-03",
                            "horaAtivacao":"12:05:55",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"16035WL33001942",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-12-27",
                            "horaAtivacao":"14:38:36",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"16128WL33200826",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-03-10",
                            "horaAtivacao":"16:31:37",
                            "dataDesativacao":"2020-07-15",
                            "horaDesativacao":"12:45:27"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"16144WL33243741",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2018-02-07",
                            "horaAtivacao":"16:39:33",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"16163WL33327336",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-12-26",
                            "horaAtivacao":"16:49:00",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"16252WL33719762",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-03-10",
                            "horaAtivacao":"16:11:43",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"16292WL33892684",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-12-26",
                            "horaAtivacao":"16:56:29",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-26",
                            "dataVencimento":"2020-09-04",
                            "valor":129.13,
                            "desconto":-2.1,
                            "serial":"17040WL34255509",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-11-09",
                            "horaAtivacao":"16:10:08",
                            "dataDesativacao":"2020-06-26",
                            "horaDesativacao":"11:35:27"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"17040WL34255509",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-11-09",
                            "horaAtivacao":"16:10:08",
                            "dataDesativacao":"2020-06-26",
                            "horaDesativacao":"11:35:27"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"17053WL34287500",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-11-09",
                            "horaAtivacao":"16:15:43",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"17055WL34299088",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2017-12-27",
                            "horaAtivacao":"15:04:29",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"525-671-413",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2020-05-21",
                            "horaAtivacao":"14:50:43",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-26",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":24.83,
                            "desconto":-0.49,
                            "serial":"903191104705905145",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2020-06-26",
                            "horaAtivacao":"11:29:30",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":149.0,
                            "desconto":-2.42,
                            "serial":"903191104730345823",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2020-05-09",
                            "horaAtivacao":"14:02:35",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":175.0,
                            "desconto":-2.84,
                            "serial":"N76901430896",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2020-05-12",
                            "horaAtivacao":"14:23:32",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234544",
                            "descricao":"POS",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":175.0,
                            "desconto":-2.84,
                            "serial":"N76901431487",
                            "tipoDesconto":"Conta Integrada - Getnet",
                            "dataAtivacao":"2020-05-07",
                            "horaAtivacao":"13:28:20",
                            "horaDesativacao":"00:00:00"
                        }
                    ]
                },
                {
                    "tipo":"aluguel",
                    "numeroDocumento":"0238234547",
                    "descricao":"Aluguel Adquirência",
                    "dataPeriodoInicial":"2020-06-01",
                    "dataPeriodoFinal":"2020-06-30",
                    "dataVencimento":"2020-09-04",
                    "dataCompensacao":"2020-07-02",
                    "valorTotal":78.0,
                    "valorPendente":0.0,
                    "valorPago":78.0,
                    "desconto":0.0,
                    "tipoDesconto":"",
                    "status":"Pago",
                    "chaveNfe":"431044048200015490500033663223093971819",
                    "localNfe":"CB",
                    "numeroNF":"",
                    "situacaoSerasa":"",
                    "situacaoCobranca":"",
                    "inscricaoMunicipal":"",
                    "codigoVerificacao":"",
                    "detalhe":[
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234547",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":39.0,
                            "desconto":0.0,
                            "serial":"007001471608055129",
                            "tipoDesconto":"",
                            "dataAtivacao":"2019-07-31",
                            "horaAtivacao":"13:26:30",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234547",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":39.0,
                            "desconto":0.0,
                            "serial":"007101771609012695",
                            "tipoDesconto":"",
                            "dataAtivacao":"2019-09-26",
                            "horaAtivacao":"14:42:17",
                            "horaDesativacao":"00:00:00"
                        }
                    ]
                },
                {
                    "tipo":"aluguel",
                    "numeroDocumento":"0238234549",
                    "descricao":"Aluguel Adquirência",
                    "dataPeriodoInicial":"2020-06-01",
                    "dataPeriodoFinal":"2020-06-30",
                    "dataVencimento":"2020-09-04",
                    "dataCompensacao":"2020-07-02",
                    "valorTotal":29.0,
                    "valorPendente":0.0,
                    "valorPago":29.0,
                    "desconto":0.0,
                    "tipoDesconto":"",
                    "status":"Pago",
                    "chaveNfe":"431044048200015490500033663231097422632",
                    "localNfe":"CB",
                    "numeroNF":"",
                    "situacaoSerasa":"",
                    "situacaoCobranca":"",
                    "inscricaoMunicipal":"",
                    "codigoVerificacao":"",
                    "detalhe":[
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238234549",
                            "descricao":"TEF DEDICADO (TEF)",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "dataVencimento":"2020-09-04",
                            "valor":29.0,
                            "desconto":0.0,
                            "serial":"TF5796151030",
                            "tipoDesconto":"",
                            "dataAtivacao":"2015-11-04",
                            "horaAtivacao":"09:53:06",
                            "horaDesativacao":"00:00:00"
                        }
                    ]
                },
                {
                    "tipo":"aluguel",
                    "numeroDocumento":"0238376191",
                    "descricao":"Aluguel Verticais",
                    "dataPeriodoInicial":"2020-06-01",
                    "dataPeriodoFinal":"2020-06-30",
                    "dataVencimento":"2020-07-31",
                    "dataCompensacao":"2020-07-06",
                    "valorTotal":240.0,
                    "valorPendente":0.0,
                    "valorPago":240.0,
                    "desconto":0.0,
                    "tipoDesconto":"",
                    "status":"Pago",
                    "chaveNfe":"431044048200015490500033358062068770138",
                    "localNfe":"CB",
                    "numeroNF":"",
                    "situacaoSerasa":"",
                    "situacaoCobranca":"",
                    "inscricaoMunicipal":"",
                    "codigoVerificacao":"",
                    "detalhe":[
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001909146081",
                            "tipoDesconto":"",
                            "dataAtivacao":"2020-02-05",
                            "horaAtivacao":"15:37:51",
                            "dataDesativacao":"2020-07-28",
                            "horaDesativacao":"14:46:45"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007101771611033204",
                            "tipoDesconto":"",
                            "dataAtivacao":"2020-04-08",
                            "horaAtivacao":"15:23:30",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007101771703041683",
                            "tipoDesconto":"",
                            "dataAtivacao":"2020-03-25",
                            "horaAtivacao":"10:07:38",
                            "dataDesativacao":"2020-07-13",
                            "horaDesativacao":"13:56:29"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001901006579",
                            "tipoDesconto":"",
                            "dataAtivacao":"2020-05-11",
                            "horaAtivacao":"15:13:33",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001811134124",
                            "tipoDesconto":"",
                            "dataAtivacao":"2020-04-08",
                            "horaAtivacao":"15:24:29",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001909143122",
                            "tipoDesconto":"",
                            "dataAtivacao":"2019-12-28",
                            "horaAtivacao":"12:37:28",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001910245026",
                            "tipoDesconto":"",
                            "dataAtivacao":"2019-12-30",
                            "horaAtivacao":"13:33:37",
                            "dataDesativacao":"2020-07-13",
                            "horaDesativacao":"13:38:07"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001910249491",
                            "tipoDesconto":"",
                            "dataAtivacao":"2020-01-09",
                            "horaAtivacao":"11:29:57",
                            "dataDesativacao":"2020-08-25",
                            "horaDesativacao":"13:46:20"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007001471611074667",
                            "tipoDesconto":"",
                            "dataAtivacao":"2019-10-29",
                            "horaAtivacao":"15:17:56",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001910244658",
                            "tipoDesconto":"",
                            "dataAtivacao":"2020-01-20",
                            "horaAtivacao":"14:36:57",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001909144848",
                            "tipoDesconto":"",
                            "dataAtivacao":"2020-01-28",
                            "horaAtivacao":"16:00:03",
                            "horaDesativacao":"00:00:00"
                        },
                        {
                            "tipo":"aluguel",
                            "numeroDocumento":"0238376191",
                            "descricao":"PIN PAD",
                            "dataPeriodoInicial":"2020-06-01",
                            "dataPeriodoFinal":"2020-06-30",
                            "valor":20.0,
                            "desconto":0.0,
                            "serial":"007102001909164294",
                            "tipoDesconto":"",
                            "dataAtivacao":"2019-10-23",
                            "horaAtivacao":"09:35:52",
                            "horaDesativacao":"00:00:00"
                        }
                    ]
                }
            ]
        }
    };
}