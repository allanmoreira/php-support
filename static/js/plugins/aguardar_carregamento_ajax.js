/**
 * Created by allan.moreira on 02/05/2017.
 */
$(document).ajaxStart(function(){
    $('#loader').css('display', 'block');
}).ajaxStop(function(){
    $('#loader').css('display', 'none');
});