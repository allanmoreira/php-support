/**
 * Created by allan.moreira on 02/05/2017.
 */
var notificacao;
$(document).ajaxStart(function(){
    notificacao = abreNotificacao('info', 'Executando a operação, aguarde...', true);
}).ajaxStop(function(){
    fechaNotificacao(notificacao);
});