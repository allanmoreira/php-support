var ambiente = $('#ambiente');
var realm = $('#realm');

var LOCAL_STORAGE_AMBIENTE = 'AMBIENTE';
var LOCAL_STORAGE_REALM = 'REALM';
var TOKEN;

function getConfigs(realm){
    setAmbiente();
    setRealm(realm);
}

ambiente.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AMBIENTE, this.value);
});

realm.change(function(){
    localStorage.setItem(LOCAL_STORAGE_REALM, this.value);
});

function setAmbiente(){
    ambiente.val(localStorage.getItem(LOCAL_STORAGE_AMBIENTE));
}

function getAmbiente(){
    return ambiente.val();
}

function setRealm(realm){
    realm.val(realm);
    localStorage.setItem(LOCAL_STORAGE_REALM, realm);
}

function getRealm(){
    return realm.val();
}

var CONSTANTS = {
    REALM : {
        AUTH: 'external',
        ATENDIMENTO: 'getnet',
        INTERNO: 'getnet'
    },
    HOST : {
        HTI: 'https://servicosportais-hti.getnet.com.br',
        PROD: 'https://servicosportais.getnet.com.br'
    },
    KEYCLOAK : {
        HTI: 'https://getsso-hom.getnet.com.br',
        PROD: 'https://getsso.getnet.com.br'
    }
}

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
    if(ambiente === 'PROD')
        url = CONSTANTS.KEYCLOAK.PROD;
    else
        url = CONSTANTS.KEYCLOAK.HTI;
    return url + '/auth/realms/' + getRealm() + '/protocol/openid-connect/token'
}

function getUrlBaseServico(servico){
    var ambiente = getAmbiente();
    if(ambiente === 'LOCAL')
        return servico.LOCAL;
    return CONSTANTS.HOST[ambiente] + '/' + servico.OUTROS;
}
