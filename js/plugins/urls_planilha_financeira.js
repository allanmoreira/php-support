var ambiente = $('#ambiente');

var LOCAL_STORAGE_AMBIENTE = 'AMBIENTE';
var TOKEN;

function getConfigs(){
    getAmbiente();
}

ambiente.change(function(){
    localStorage.setItem(LOCAL_STORAGE_AMBIENTE, this.value);
});

function getAmbiente(){
    ambiente.val(localStorage.getItem(LOCAL_STORAGE_AMBIENTE));
}

var URL  = {
    LOCAL : 'http://planfin:8082/planilha_financeira/ms',
    PROD :  'http://moreirallan.com:8082/planilha_financeira/ms'
};
