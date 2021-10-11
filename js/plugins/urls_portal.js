var ambiente_token = $('#ambiente_token');
var ambiente = $('#ambiente');
var auth = $('#auth');

var LOCAL_STORAGE_AMBIENTE = 'AMBIENTE';
var LOCAL_STORAGE_AMBIENTE_TOKEN = 'AMBIENTE_TOKEN';
var LOCAL_STORAGE_AUTH = 'AUTH';
var TOKEN;

function getConfigs(){
    getAuth();
    getAmbiente();
    getAmbienteToken();
}

auth.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AUTH, this.value);
});

ambiente.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AMBIENTE, this.value);
});

ambiente_token.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AMBIENTE_TOKEN, this.value);
});

function getAuth(){
    auth.val(localStorage.getItem(LOCAL_STORAGE_AUTH));
}

function getAmbiente(){
    ambiente.val(localStorage.getItem(LOCAL_STORAGE_AMBIENTE));
}

function getAmbienteToken(){
    ambiente_token.val(localStorage.getItem(LOCAL_STORAGE_AMBIENTE_TOKEN));
}

var HOST_LOCAL = 'http://localhost:';
var HOST_HTI = 'https://servicosportais-hti.getnet.com.br';

var URL  = {
    KEYCLOACK : {
        NEW : 'https://getsso-hom.getnet.com.br',
        OLD : HOST_HTI,
        REALM : {
            AUTH: 'external',
            ATENDIMENTO: 'getnet',
            INTERNO: 'getnet'
        }
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
    },
    MANAGEMENT : {
        LOCAL : HOST_LOCAL + '8008',
        HTI : HOST_HTI + '/services/mc-management'
    }
};
