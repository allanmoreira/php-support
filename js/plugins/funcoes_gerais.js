function converteFloatParaMoeda(valor){
    return "R$ " + this.converteFloatParaNumero(valor);
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

function converteFloatParaNumero(valor, semZeroDecimal){
    if(valor == null || valor == undefined){
        if(semZeroDecimal)
            return '0';
        else
            return '0,00';
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

    if(isNaN(parseInt(decimal)))
        decimal = "00";
    else if(decimal.length === 1 && !semZeroDecimal)
        decimal = decimal+'0';

    valor = inteiro+","+decimal;
    return valor;

}

var PADRAO_DATA = {
    SQL : 'yyyy-mm-dd'
}

function converteData(padrao_anterior, data){
    if(padrao_anterior === PADRAO_DATA.SQL){
        return converteDataSQLParaString(data);
    }
}

function converteDataSQLParaString(data){
    var split = data.split('-');
    return split[2] + '/' + split[1] + '/' + split[0];
}

/*
function dataValida(data) {
    var RegExPattern = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;

    if (!((data.match(RegExPattern)) && (data!='')))
        return false;
    return true;
}

function dataAtual(){
    return converteDataParaString(new Date());
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
    var retorno;
    var split = data.split('/');
    switch (parseInt(split[0])) {
        case 1:
            retorno = 'Janeiro';
            break;
        case 2:
            retorno = 'Fevereiro';
            break;
        case 3:
            retorno = 'Março';
            break;
        case 4:
            retorno = 'Abril';
            break;
        case 5:
            retorno = 'Maio';
            break;
        case 6:
            retorno = 'Junho';
            break;
        case 7:
            retorno = 'Julho';
            break;
        case 8:
            retorno = 'Agosto';
            break;
        case 9:
            retorno = 'Setembro';
            break;
        case 10:
            retorno = 'Outubro';
            break;
        case 11:
            retorno = 'Novembro';
            break;
        case 12:
            retorno = 'Dezembro';
            break;
    }
    return retorno + '/' + split[1];
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



function valorNegativo(valor) {
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
*/
