var tipo_token = $('#tipo_token');
var ambiente = $('#ambiente');
var realm = $('#realm');

var LOCAL_STORAGE_AMBIENTE = 'AMBIENTE';
var LOCAL_STORAGE_AMBIENTE_TOKEN = 'AMBIENTE_TOKEN';
var LOCAL_STORAGE_AUTH = 'AUTH';
var TOKEN;

function getConfigs(){
    setRealm();
    setAmbiente();
    setTipoToken();
}

realm.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AUTH, this.value);
});

ambiente.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AMBIENTE, this.value);
});

tipo_token.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AMBIENTE_TOKEN, this.value);
});

function setRealm(){
    realm.val(localStorage.getItem(LOCAL_STORAGE_AUTH));
}

function setAmbiente(){
    ambiente.val(localStorage.getItem(LOCAL_STORAGE_AMBIENTE));
}

function setTipoToken(){
    tipo_token.val(localStorage.getItem(LOCAL_STORAGE_AMBIENTE_TOKEN));
}

function getRealm(){
    return realm.val();
}

function getAmbiente(){
    return ambiente.val();
}

function getTipoToken(){
    return tipo_token.val();
}

var KEYCLOAK_HML = 'https://getsso-hom.getnet.com.br';

var REALM = {
    AUTH: 'external',
    ATENDIMENTO: 'getnet',
    INTERNO: 'getnet'
};

var HOST = {
    HTI: 'https://servicosportais-hti.getnet.com.br',
    HK: 'https://servicosportais-hk.getnet.com.br',
    PROD: 'https://servicosportais.getnet.com.br'
};

var KEYCLOAK = {
    HTI: {
        NEW: KEYCLOAK_HML,
        OLD: HOST.HTI
    },
    HK: {
        NEW: KEYCLOAK_HML,
        OLD: HOST.HK
    },
    PROD: 'https://getsso.getnet.com.br'
};

var SERVICO  = {
    ANALISE_MERCADO : {
        LOCAL : 'http://localhost:8023',
        OUTROS : '/services/mc-analise-mercado'
    },
    ANTECIPACOES : {
        LOCAL : 'http://localhost:8020',
        OUTROS : '/services/mc-antecipacoes'
    },
    CADASTRO : {
        LOCAL : 'http://localhost:8016',
        OUTROS : '/services/mc-cadastro'
    },
    CONTEUDO : {
        LOCAL : 'http://localhost:8022',
        OUTROS : '/services/mc-conteudo'
    },
    EXTRATOS : {
        LOCAL : 'http://localhost:8021',
        OUTROS : '/services/mc-extratos'
    },
    MANAGEMENT : {
        LOCAL : 'http://localhost:8008',
        OUTROS : '/services/mc-management'
    },
    PAYMENT_LINKS : {
        LOCAL : 'http://localhost:8034',
        OUTROS : '/services/mc-payment-links'
    },
    PRODUTOS : {
        LOCAL : 'http://localhost:8022',
        OUTROS : '/services/mc-produtos'
    },
    SOLICITACOES : {
        LOCAL : 'http://localhost:8019',
        OUTROS : '/services/mc-solicitacoes'
    },
    VENDAS : {
        LOCAL : 'http://localhost:8018',
        OUTROS : '/services/mc-vendas'
    }
};

function getUrlKeycloak(){
    var url;
    var ambiente = getAmbiente();
    var tipo = getTipoToken();
    var realm = getRealm();
    if(ambiente === 'PROD'){
        url = KEYCLOAK.PROD;
    } else {
        if(ambiente === 'LOCAL')
            ambiente = 'HTI';
        url = KEYCLOAK[ambiente][tipo];
    }
    return url + '/auth/realms/' + REALM[realm] + '/protocol/openid-connect/token'
}

function getUrlBaseServico(servico){
    var ambiente = getAmbiente();
    if(ambiente === 'LOCAL')
        return servico.LOCAL;
    return HOST[ambiente] + '/' + servico.OUTROS;
}
