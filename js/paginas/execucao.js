var claimId = $('#claimId');
var token = $('#token');
var arquivo = $('#arquivo');

$(document).ajaxStart(function(){
    $('#loader').css('display', 'block');
}).ajaxStop(function(){
    $('#loader').css('display', 'none');
});

$('#btn_executar').click(function(){
    upload();
});

function upload() {

    console.log(arquivo);

    var form = new FormData();
    form.append("claimId", claimId.val());
    form.append("arquivo", arquivo.val());

    console.log(form);

    /*
    $.ajax({
        url: 'url',
        async: true,
        type: 'POST',
        dataType: 'json',
        data: {
            submit  : true
        },
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            alert('Erro');
        }
    });
    */
}