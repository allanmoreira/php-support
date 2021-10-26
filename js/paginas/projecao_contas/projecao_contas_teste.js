function getDadosTeste(mes){
    var projecao_mes_atual = {
        fixas : 3404.77,
        variaveis : 3884.04,
        adicionais : 1488.63,
        extraordinarias : 109.77

    };
    var projecao_final = {
        salarios: 0,
        fixas: {
            totalProjecao: projecao_mes_atual.fixas,
            totalAtual: 0
        },
        variaveis:{
            totalProjecao: projecao_mes_atual.variaveis,
            totalAtual: 0
        },
        adicionais:{
            totalProjecao: projecao_mes_atual.adicionais,
            totalAtual: 0
        },
        extraordinarias:{
            totalProjecao: projecao_mes_atual.extraordinarias,
            totalAtual: 0
        },
    };

    var lista = {
        '01/02/2021': {
            salarios: 10531.92,
            fixas: {
                totalProjecao: 3390.29,
                totalAtual: 3881.77
            },
            variaveis:{
                totalProjecao: 4081.67,
                totalAtual: 3485.32
            },
            adicionais:{
                totalProjecao: 2605.9,
                totalAtual: 2782.73
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 375.6
            },
        },
        '01/03/2021': {
            salarios: 12564.31,
            fixas: {
                totalProjecao: 3881.77,
                totalAtual: 3687.63
            },
            variaveis:{
                totalProjecao: 3920.32,
                totalAtual: 2956.4
            },
            adicionais:{
                totalProjecao: 2782.73,
                totalAtual: 2716.11
            },
            extraordinarias:{
                totalProjecao: 375.6,
                totalAtual: 375.6
            },
        },
        '01/04/2021': {
            salarios: 14450.12,
            fixas: {
                totalProjecao: 3687.63,
                totalAtual: 3864.23
            },
            variaveis:{
                totalProjecao: 3226.92,
                totalAtual: 3622.35
            },
            adicionais:{
                totalProjecao: 2716.11,
                totalAtual: 4074.4
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 218.6
            },
        },
        '01/05/2021': {
            salarios: 13083.6,
            fixas: {
                totalProjecao: 3864.23,
                totalAtual: 3705.82
            },
            variaveis:{
                totalProjecao: 3370.62,
                totalAtual: 4313.61
            },
            adicionais:{
                totalProjecao: 3811.05,
                totalAtual: 2559.22
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 218.6
            },
        },
        '01/06/2021': {
            salarios: 0,
            fixas: {
                totalProjecao: 3705.82,
                totalAtual: 3829.15
            },
            variaveis:{
                totalProjecao: 3637.46,
                totalAtual: 3970.4
            },
            adicionais:{
                totalProjecao: 2454.27,
                totalAtual: 3602.07
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 218.6
            },
        },
        '01/07/2021': {
            salarios: 0,
            fixas: {
                totalProjecao: 3829.15,
                totalAtual: 3948.07
            },
            variaveis:{
                totalProjecao: 3980.44,
                totalAtual: 3547.63
            },
            adicionais:{
                totalProjecao: 3602.07,
                totalAtual: 3601.3
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 218.6
            },
        },
        '01/08/2021': {
            salarios: 0,
            fixas: {
                totalProjecao: 3948.07,
                totalAtual: 3404.77
            },
            variaveis:{
                totalProjecao: 3944.74,
                totalAtual: 4007.7
            },
            adicionais:{
                totalProjecao: 3124.26,
                totalAtual: 3123.51
            },
            extraordinarias:{
                totalProjecao: 218.6,
                totalAtual: 258.57
            },
        },
        '01/09/2021': {
            salarios: 0,
            fixas: {
                totalProjecao: 3404.77,
                totalAtual: 4097.1
            },
            variaveis:{
                totalProjecao: 3837.17,
                totalAtual: 4029.87
            },
            adicionais:{
                totalProjecao: 3067.52,
                totalAtual: 3067.52
            },
            extraordinarias:{
                totalProjecao: 258.57,
                totalAtual: 258.57
            },
        },
        '01/10/2021': {
            salarios: 0,
            fixas: {
                totalProjecao: projecao_mes_atual.fixas,
                totalAtual: 3411.68
            },
            variaveis:{
                totalProjecao: projecao_mes_atual.variaveis,
                totalAtual: 198.93
            },
            adicionais:{
                totalProjecao: projecao_mes_atual.adicionais,
                totalAtual: 1461.08
            },
            extraordinarias:{
                totalProjecao: projecao_mes_atual.extraordinarias,
                totalAtual: 109.77
            },
        },
        '01/11/2021': projecao_final,
        '01/12/2021': projecao_final,
        '01/01/2022': projecao_final
    };
    return lista[mes];
}