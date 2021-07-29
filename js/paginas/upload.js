var claimId = $('#claimId');
var token = $('#token');
var arquivo = $('#arquivo');

$(function (){
    executa()
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
}

function executa(){
    $.ajax({
        url: 'http://localhost:8082/planilha_financeira/transacao' + '/conta/projecoes',
        async: true,
        type: 'GET',
        // contentType: "application/json; charset=utf-8",
        dataType: 'json',
        headers: {
            Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGxhbm1vcmVpcmEiLCJleHAiOjE2MTk1NDQ2MTksImlhdCI6MTYxOTUyNjYxOX0.ox-tqrw80wgJidAfMr5hV0p4weV_nQl_fU-95QSr4GYfnC75npICfLp9pfZjiie8Srxm1IOWTnguj4AeD1A2Zg'
        },
        // beforeSend: function (xhr) {
        //     xhr.setRequestHeader("Authorization", 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGxhbm1vcmVpcmEiLCJleHAiOjE2MTk1NDQ2MTksImlhdCI6MTYxOTUyNjYxOX0.ox-tqrw80wgJidAfMr5hV0p4weV_nQl_fU-95QSr4GYfnC75npICfLp9pfZjiie8Srxm1IOWTnguj4AeD1A2Zg');
        // },
        data: {
            data_de:'01/01/2021',
            data_ate:'01/01/2022'
        },
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}