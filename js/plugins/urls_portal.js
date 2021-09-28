var ambiente = $('#ambiente');
var LOCAL_STORAGE_AMBIENTE = 'AMBIENTE';
var TOKEN;
var LOGIN = '04493259035';
var SENHA = 'getnet@123';
// var LOGIN = '02111023000';
// var SENHA = 'getnet@123';
// var LOGIN = 'am23000';
// var SENHA = 'macaquinho.3';

ambiente.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AMBIENTE, this.value);
});

function getAmbiente(){
    ambiente.val(localStorage.getItem(LOCAL_STORAGE_AMBIENTE));
}

var TOKEN_ORIGIN = {
    NOVO : 'NOVO',
    OLD : 'OLD'
}

var TOKEN_TYPE = {
    AUTH : 'AUTH',
    INTERNO : 'INTERNO'
}

var HOST_LOCAL = 'http://localhost:';
var HOST_HTI = 'https://servicosportais-hti.getnet.com.br';


var URL  = {
    KEYCLOACK : {
        NOVO : 'https://getsso-hom.getnet.com.br',
        OLD : HOST_HTI
    },
    EXTRATOS : {
        LOCAL : HOST_LOCAL + '8021',
        HTI : HOST_HTI + '/services/mc-extratos'
    },
    PRODUTOS : {
        LOCAL : HOST_LOCAL + '8022',
        HTI : HOST_HTI + '/services/mc-produtos'
    },
    CADASTRO : {
        LOCAL : HOST_LOCAL + '8016',
        HTI : HOST_HTI + '/services/mc-cadastro'
    }

};
