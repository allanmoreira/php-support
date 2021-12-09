function dataValida(data) {
    var RegExPattern = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;

    if (!((data.match(RegExPattern)) && (data!='')))
        return false;
    return true;
}

function dataAtual(){
    return converteDataParaString(new Date());
}

function converteDataParaStringComDivisor(data, divisor) {
    var split = data.split(divisor);
    return split[2] + '/' + split[1] + '/' + split[0];
}

function converteDataParaString(data) {
    var mesAtual = data.getMonth()+1;
    var dia = data.getDate();
    if(mesAtual < 10)
        mesAtual = '0' + mesAtual;
    if(dia < 10)
        dia = '0' + dia;
    return dia + "/"
        + mesAtual  + "/"
        + data.getFullYear();
}

function primeiroDiaDoMesAtual() {
    var hoje = new Date();
    return primeiroDiaDoMes(hoje.getMonth(), hoje.getFullYear());
}

function ultimoDiaDoMesAtual() {
    var hoje = new Date();
    return ultimoDiaDoMes(hoje.getMonth(), hoje.getFullYear());
}

function primeiroDiaDoMes(mes, ano) {
    return converteDataParaString(new Date(ano, mes, 1));
}

function ultimoDiaDoMes(mes, ano) {
    return converteDataParaString(new Date(ano, mes+1, 0));
}

function mesAnoAtual() {
    return dataAtual().substr(3,10);
}

function anoAtual(){
    return new Date().getFullYear();
}

function mesAnoExtenso(data, com_ano) {
    var split = data.split('/');
    return mesExtenso(parseInt(split[0])) + '/' + split[1];
}

function mesExtenso(mes){
    switch (mes) {
        case 1:
            return 'Janeiro';
        case 2:
            return 'Fevereiro';
        case 3:
            return 'Março';
        case 4:
            return 'Abril';
        case 5:
            return 'Maio';
        case 6:
            return 'Junho';
        case 7:
            return 'Julho';
        case 8:
            return 'Agosto';
        case 9:
            return 'Setembro';
        case 10:
            return 'Outubro';
        case 11:
            return 'Novembro';
        case 12:
            return 'Dezembro';
        default:
            abreNotificacao('warning', 'O mês informado é inválido!');
    }
}

function converteFloatParaMoeda(valor, casasDecimais){
    return "R$ " + this.converteFloatParaNumero(valor, casasDecimais);
}

function converteMoedaParaFloat(valor){
    var tam = valor.length;
    var substr = valor.substring(3, tam);
    return converteNumeroParaFloat(substr);
}

function converteNumeroParaFloat(numero) {
    if(numero == null || numero == undefined || numero === '')
        return 0;
    return parseFloat(replaceAll(replaceAll(numero, '.', ''), ',', '.'));
}

function converteStringFloatParaFloat(numero) {
    if(numero == null || numero == undefined || numero === '')
        return 0;
    return parseFloat(numero);
}

function replaceAll(str, de, para){
    str += "";
    var pos = str.indexOf(de);
    while (pos > -1){
        str = str.replace(de, para);
        pos = str.indexOf(de);
    }
    return (str);
}

function converteFloatParaNumero(valor, qtdeCasasDecimais){
    var numero_original = valor;
    if(valor === null || valor === undefined){
        if(qtdeCasasDecimais === undefined)
            return '0';
        else {
            var retorno = '0,';
            for (i = 0; i < qtdeCasasDecimais; i++)
                retorno += '0';
            return retorno;
        }
    }

    var inteiro = null, decimal = null, c = null, j = null;
    var aux = [];
    valor = ""+valor;
    c = valor.indexOf(".",0);
    //encontrou o ponto na string
    if(c > 0){
        //separa as partes em inteiro e decimal
        inteiro = valor.substring(0,c);
        decimal = valor.substring(c+1,valor.length);
    }else{
        inteiro = valor;
    }

    //pega a parte inteiro de 3 em 3 partes
    for (j = inteiro.length, c = 0; j > 0; j-=3, c++){
        aux[c]=inteiro.substring(j-3,j);
    }

    //percorre a string acrescentando os pontos
    inteiro = "";
    for(c = aux.length-1; c >= 0; c--){
        inteiro += aux[c]+'.';
    }
    //retirando o ultimo ponto e finalizando a parte inteiro

    inteiro = inteiro.substring(0,inteiro.length-1);
    inteiro = inteiro.replace('-.', '-');

    valor = inteiro;
    if(qtdeCasasDecimais !== undefined) {
        if (qtdeCasasDecimais > 0) {
            var decimal_length = 0;
            if (decimal === null)
                decimal = '';
            else
                decimal_length = decimal.length;
            if (decimal_length > qtdeCasasDecimais) {
                decimal = decimal + '';
                decimal = decimal.substr(0, qtdeCasasDecimais);
                decimal_length = decimal.length;
                if (decimal_length < qtdeCasasDecimais) {
                    for (i = decimal_length; i < qtdeCasasDecimais; i++)
                        decimal += '0';
                }
                valor += ',' + decimal;
            } else {
                for (i = decimal_length; i < qtdeCasasDecimais; i++)
                    decimal += '0';
                valor += ',' + decimal;
            }
        } else if (decimal !== null) {
            valor += ',' + decimal;
        }
    }
    return valor;
}

function isValorNegativo(valor) {
    valor += '';
    return valor.indexOf('-') !== -1;
}

function casasDecimais(numero, casas) {
    return numero.toFixed(casas);
}

function numeroPositivo(numero) {
    var sign = Math.sign(parseInt(numero));
    return sign === 1 || sign === 0;
}

function converteMinutosParahora(minutos, semSinal) {
    var positivo = numeroPositivo(minutos);
    minutos = Math.abs(parseInt(minutos));

    var hora = casasDecimais(minutos/60, 2);
    hora = parseInt(hora);
    hora = hora < 10 ? '0'+hora : hora;

    minutos = casasDecimais(minutos%60, 2);
    minutos = parseInt(minutos);
    minutos = minutos < 10 ? '0'+minutos : minutos;
    var resultado = hora+':'+minutos;
    if(semSinal) {
        return resultado;
    } else {
        if (positivo)
            return '+' + resultado;
        else
            return '-' + resultado;
    }
}

function horaNegativa(hora) {
    return hora.indexOf('-') !== -1;
}

function getParametroDaURLPorNome(nome) {
    return decodeURIComponent((new RegExp('[?|&]' + nome + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function getURLAtual(){
    return location.href;
}

function getParametrosDaURL() {
    var json = {};
    var query = location.search;
    query = query.replace('?', '');
    query = query.split('&');
    for (let obj of query) {
        var keyValue = obj.split('=');
        json[keyValue[0]] = keyValue[1];
    }
    return json;
}

function mostraParcela(parcela_atual, qtde_parcelas){
    if(parcela_atual < 10)
        parcela_atual = '0'+parcela_atual;
    if(qtde_parcelas < 10)
        qtde_parcelas = '0'+qtde_parcelas;
    return ' (' + parcela_atual + '/' + qtde_parcelas + ')';
}

function converteTimestampParaString(data){
    var split = data.split('T');
    var data = converteDataParaStringComDivisor(split[0], '-');
    return data + ' ' + split[1].substring(0,12);
}

function getDataFromTimestamp(data){
    var split = data.split('T');
    return converteDataParaStringComDivisor(split[0], '-');
}

function getHoraFromTimestamp(data){
    var split = data.split('T');
    return split[1].split('-')[0];
    // var data = converteDataParaStringComDivisor(split[0], '-');
    // return data + ' ' + split[1].substring(0,12);
}

