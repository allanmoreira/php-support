var ano_atual;
var dividir_por_ano = $('#dividir_por_ano');

$(function(){
    consulta();
});

dividir_por_ano.change(function (){
    consulta();
});

function consulta() {
    $('#tabela tbody > tr').remove();
    var lista_dados = getDados();
    $.each(lista_dados, function (i) {
        var despesa = lista_dados[i];
        preencheTabela(despesa);
    });
}

function preencheTabela(despesa){
    var data_despesa = dataSqlParaString(despesa.paymentDate);
    var tabela = $('#tabela tbody');
    var ano_despesa = getAno(data_despesa);
    if(dividir_por_ano.val() === 'true' && ano_atual !== ano_despesa) {
        ano_atual = ano_despesa;
        tabela.append(
            '<tr>' +
                '<td colspan="5"><h4 class="text-center"><strong>' + ano_despesa + '</strong></h4></td>' +
            '</tr>'
        );
    }
    tabela.append(
        '<tr>' +
            '<td>' + data_despesa + '</td>' +
            '<td>' + despesa.referenceNumber + '</td>' +
            '<td>' + despesa.detailLines[0].internalTransactionDetailLine.subcategory.name + '</td>' +
            '<td>' + despesa.purposeDescription + '</td>' +
            '<td>' + getValor(despesa.detailLines[0].internalTransactionDetailLine.amount) + '</td>' +
        '</tr>'
    );
}

function getDados(){
    var lista =
    [
        {
            "id": 83254220,
            "paymentDate": "2016-08-28",
            "purposeDescription": "Compra de mantimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "369",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 80782548,
                    "internalTransactionDetailLine": {
                        "id": 781132051,
                        "amount": -231.93,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 231.93,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 89981412,
            "paymentDate": "2017-10-08",
            "purposeDescription": "Alimentação, 08/10/17, Carlos Espassandin",
            "displayStatus": "Compensado",
            "referenceNumber": "972",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 88266268,
                    "internalTransactionDetailLine": {
                        "id": 855499540,
                        "amount": -172.5,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 172.5,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 91859203,
            "paymentDate": "2018-02-04",
            "purposeDescription": "Alimento, 04/02/18, Janaina Mauro Jaques",
            "displayStatus": "Compensado",
            "referenceNumber": "994",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 90423746,
                    "internalTransactionDetailLine": {
                        "id": 878275593,
                        "amount": -289.21,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 289.21,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 94902846,
            "paymentDate": "2018-08-26",
            "purposeDescription": "Compras de Alimentos, 26/08/18, Janaina Jaques",
            "displayStatus": "Compensado",
            "referenceNumber": "1028",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 93840970,
                    "internalTransactionDetailLine": {
                        "id": 916129102,
                        "amount": -254.34,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 254.34,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 95001650,
            "paymentDate": "2018-09-02",
            "purposeDescription": "Alimentos, 02/09/18, Dalila Moreira",
            "displayStatus": "Compensado",
            "referenceNumber": "1030",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 93951689,
                    "internalTransactionDetailLine": {
                        "id": 917230150,
                        "amount": -187.81,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 187.81,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 95925831,
            "paymentDate": "2018-11-04",
            "purposeDescription": "Auxílio Alimentação",
            "displayStatus": "Compensado",
            "referenceNumber": "1045",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 94980665,
                    "internalTransactionDetailLine": {
                        "id": 928594865,
                        "amount": -254.61,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 254.61,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 95925832,
            "paymentDate": "2018-11-04",
            "purposeDescription": "Auxílio Alimentação",
            "displayStatus": "Compensado",
            "referenceNumber": "1046",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 94980666,
                    "internalTransactionDetailLine": {
                        "id": 928594869,
                        "amount": -221.97,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 221.97,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 96784591,
            "paymentDate": "2018-12-17",
            "purposeDescription": "Alimentação, 17.12.18, venezuelanos (familia haddad)",
            "displayStatus": "Compensado",
            "referenceNumber": "1055",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 95959964,
                    "internalTransactionDetailLine": {
                        "id": 937963275,
                        "amount": -657.12,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 657.12,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 97296124,
            "paymentDate": "2019-01-21",
            "purposeDescription": "Compra Alimentos Família Venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1062",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 96539081,
                    "internalTransactionDetailLine": {
                        "id": 945088118,
                        "amount": -553.98,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 553.98,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 97588134,
            "paymentDate": "2019-02-10",
            "purposeDescription": "Ajuda Alimentação, 10/02/19, Genny Addad",
            "displayStatus": "Compensado",
            "referenceNumber": "1067",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 96854279,
                    "internalTransactionDetailLine": {
                        "id": 948742810,
                        "amount": -358.63,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 358.63,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 100759228,
            "paymentDate": "2019-09-15",
            "purposeDescription": "Alimentos Familia venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1190",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100405502,
                    "internalTransactionDetailLine": {
                        "id": 988578977,
                        "amount": -555.82,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 555.82,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 100808451,
            "paymentDate": "2019-09-18",
            "purposeDescription": "alimentos familai venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1194",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100467635,
                    "internalTransactionDetailLine": {
                        "id": 989262487,
                        "amount": -784.54,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 784.54,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 100879795,
            "paymentDate": "2019-09-24",
            "purposeDescription": "Alimentos Familia Venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1202",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100548023,
                    "internalTransactionDetailLine": {
                        "id": 990148415,
                        "amount": -613.09,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 613.09,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 100879796,
            "paymentDate": "2019-09-24",
            "purposeDescription": "Alimentos Familia Da Silva",
            "displayStatus": "Compensado",
            "referenceNumber": "1203",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100548024,
                    "internalTransactionDetailLine": {
                        "id": 990148416,
                        "amount": -628.86,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 628.86,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 100879798,
            "paymentDate": "2019-09-24",
            "purposeDescription": "Alimentos familia Venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1204",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100548026,
                    "internalTransactionDetailLine": {
                        "id": 990148418,
                        "amount": -695.2,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 695.2,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101175163,
            "paymentDate": "2019-10-15",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1213",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100872974,
                    "internalTransactionDetailLine": {
                        "id": 993950015,
                        "amount": -583.92,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 583.92,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101197554,
            "paymentDate": "2019-10-17",
            "purposeDescription": "Alimentos para familia venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1215",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100899226,
                    "internalTransactionDetailLine": {
                        "id": 994303208,
                        "amount": -583.92,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 583.92,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101221183,
            "paymentDate": "2019-10-20",
            "purposeDescription": "Alimentos para família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1216",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100921887,
                    "internalTransactionDetailLine": {
                        "id": 994529777,
                        "amount": -604.87,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 604.87,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101261007,
            "paymentDate": "2019-10-21",
            "purposeDescription": "Alimentos para família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1218",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 100969846,
                    "internalTransactionDetailLine": {
                        "id": 995119247,
                        "amount": -724.95,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 724.95,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101315261,
            "paymentDate": "2019-10-27",
            "purposeDescription": "Alimentos familia venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1220",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101030366,
                    "internalTransactionDetailLine": {
                        "id": 995691575,
                        "amount": -632.64,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 632.64,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101548148,
            "paymentDate": "2019-11-09",
            "purposeDescription": "Lâmpada, chuveiro e outros itens mudançafamília venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1230",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101291837,
                    "internalTransactionDetailLine": {
                        "id": 999245379,
                        "amount": -170.43,
                        "subcategory": {
                            "id": 5,
                            "name": "Moradia",
                            "sortOrder": 3,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 170.43,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101562437,
            "paymentDate": "2019-11-10",
            "purposeDescription": "COMPRA DE ALIMENTOS",
            "displayStatus": "Compensado",
            "referenceNumber": "1232",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101307186,
                    "internalTransactionDetailLine": {
                        "id": 999394652,
                        "amount": -441.92,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 441.92,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101601241,
            "paymentDate": "2019-11-11",
            "purposeDescription": "Compra de alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1235",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101355489,
                    "internalTransactionDetailLine": {
                        "id": 999741895,
                        "amount": -468.72,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 468.72,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101728854,
            "paymentDate": "2019-11-22",
            "purposeDescription": "Alimentos para família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1243",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101503860,
                    "internalTransactionDetailLine": {
                        "id": 1001518787,
                        "amount": -426.34,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 426.34,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 101728856,
            "paymentDate": "2019-11-22",
            "purposeDescription": "Alimentos para família venzuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1244",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101503862,
                    "internalTransactionDetailLine": {
                        "id": 1001518790,
                        "amount": -521.72,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 521.72,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102074311,
            "paymentDate": "2019-12-11",
            "purposeDescription": "Alimentos para fmailia Venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1255",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101895209,
                    "internalTransactionDetailLine": {
                        "id": 1005856352,
                        "amount": -713,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 713,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102074312,
            "paymentDate": "2019-12-11",
            "purposeDescription": "Alimentos para familia venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1256",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101895210,
                    "internalTransactionDetailLine": {
                        "id": 1005856353,
                        "amount": -372.99,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 372.99,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102074313,
            "paymentDate": "2019-12-11",
            "purposeDescription": "Alimentos para familia nunez",
            "displayStatus": "Compensado",
            "referenceNumber": "1257",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 101895211,
                    "internalTransactionDetailLine": {
                        "id": 1005856354,
                        "amount": -582.14,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 582.14,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102262613,
            "paymentDate": "2019-12-22",
            "purposeDescription": "Alimentação Familia Sanchez",
            "displayStatus": "Compensado",
            "referenceNumber": "1262",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102116254,
                    "internalTransactionDetailLine": {
                        "id": 1007633062,
                        "amount": -563.39,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 563.39,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102262625,
            "paymentDate": "2019-12-22",
            "purposeDescription": "Alimentação Frankilin",
            "displayStatus": "Compensado",
            "referenceNumber": "1263",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102116267,
                    "internalTransactionDetailLine": {
                        "id": 1007633076,
                        "amount": -575.86,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 575.86,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102349971,
            "paymentDate": "2019-12-29",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1268",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102217547,
                    "internalTransactionDetailLine": {
                        "id": 1008625778,
                        "amount": -533.6,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 533.6,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102450198,
            "paymentDate": "2020-01-03",
            "purposeDescription": "Alimentos para família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1272",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102344467,
                    "internalTransactionDetailLine": {
                        "id": 1009952720,
                        "amount": -728.11,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 728.11,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102450199,
            "paymentDate": "2020-01-03",
            "purposeDescription": "Alimentos Diogo.",
            "displayStatus": "Compensado",
            "referenceNumber": "1273",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102344468,
                    "internalTransactionDetailLine": {
                        "id": 1009952721,
                        "amount": -372.99,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 372.99,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102450202,
            "paymentDate": "2020-01-03",
            "purposeDescription": "Alimentos Eloir",
            "displayStatus": "Compensado",
            "referenceNumber": "1274",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102344471,
                    "internalTransactionDetailLine": {
                        "id": 1009952724,
                        "amount": -582.14,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 582.14,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102474920,
            "paymentDate": "2020-01-05",
            "purposeDescription": "Alimentos para família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1275",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102513944,
                    "internalTransactionDetailLine": {
                        "id": 1011780455,
                        "amount": -630.71,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 630.71,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102474933,
            "paymentDate": "2020-01-05",
            "purposeDescription": "Alimentos para família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1276",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102513941,
                    "internalTransactionDetailLine": {
                        "id": 1011780452,
                        "amount": -805.09,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 805.09,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102474970,
            "paymentDate": "2020-01-05",
            "purposeDescription": "Alimentos Familia nuñez",
            "displayStatus": "Compensado",
            "referenceNumber": "1278",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102513927,
                    "internalTransactionDetailLine": {
                        "id": 1011780437,
                        "amount": -69.72,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 69.72,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102474992,
            "paymentDate": "2020-01-05",
            "purposeDescription": "Alimentos Familia Sena",
            "displayStatus": "Compensado",
            "referenceNumber": "1279",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102513934,
                    "internalTransactionDetailLine": {
                        "id": 1011780445,
                        "amount": -329.22,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 329.22,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102832862,
            "paymentDate": "2020-01-31",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1283",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102765372,
                    "internalTransactionDetailLine": {
                        "id": 1014784111,
                        "amount": -538.37,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 538.37,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102832863,
            "paymentDate": "2020-01-31",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1284",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102765373,
                    "internalTransactionDetailLine": {
                        "id": 1014784112,
                        "amount": -580.75,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 580.75,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102832864,
            "paymentDate": "2020-01-31",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1285",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102765374,
                    "internalTransactionDetailLine": {
                        "id": 1014784113,
                        "amount": -598.04,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 598.04,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102892458,
            "paymentDate": "2020-02-04",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1287",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102835514,
                    "internalTransactionDetailLine": {
                        "id": 1016062211,
                        "amount": -473.22,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 473.22,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 102892459,
            "paymentDate": "2020-02-04",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1288",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102835515,
                    "internalTransactionDetailLine": {
                        "id": 1016062212,
                        "amount": -660.01,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 660.01,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103007215,
            "paymentDate": "2020-02-09",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1294",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102951746,
                    "internalTransactionDetailLine": {
                        "id": 1016873135,
                        "amount": -570.84,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 570.84,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103007225,
            "paymentDate": "2020-02-09",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1295",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 102951760,
                    "internalTransactionDetailLine": {
                        "id": 1016873149,
                        "amount": -566.36,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 566.36,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103517023,
            "paymentDate": "2020-03-19",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1308",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103516190,
                    "internalTransactionDetailLine": {
                        "id": 1023687288,
                        "amount": -704.66,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 704.66,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103517025,
            "paymentDate": "2020-03-19",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1309",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103516201,
                    "internalTransactionDetailLine": {
                        "id": 1023687299,
                        "amount": -539.13,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 539.13,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103517026,
            "paymentDate": "2020-03-19",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1310",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103516202,
                    "internalTransactionDetailLine": {
                        "id": 1023687300,
                        "amount": -164.13,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 164.13,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103524116,
            "paymentDate": "2020-03-20",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1311",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103523652,
                    "internalTransactionDetailLine": {
                        "id": 1023805920,
                        "amount": -438.64,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 438.64,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103638927,
            "paymentDate": "2020-04-02",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1312",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103663331,
                    "internalTransactionDetailLine": {
                        "id": 1025637774,
                        "amount": -451.28,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 451.28,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103638928,
            "paymentDate": "2020-04-02",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1313",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103663332,
                    "internalTransactionDetailLine": {
                        "id": 1025637775,
                        "amount": -350.39,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 350.39,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103662158,
            "paymentDate": "2020-04-05",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1316",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103692861,
                    "internalTransactionDetailLine": {
                        "id": 1026057296,
                        "amount": -447.49,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 447.49,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103687737,
            "paymentDate": "2020-04-08",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1319",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103728531,
                    "internalTransactionDetailLine": {
                        "id": 1026731951,
                        "amount": -408.67,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 408.67,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103821563,
            "paymentDate": "2020-04-23",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1325",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 103947179,
                    "internalTransactionDetailLine": {
                        "id": 1028908274,
                        "amount": -473.55,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 473.55,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 103966832,
            "paymentDate": "2020-05-11",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1333",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 104137667,
                    "internalTransactionDetailLine": {
                        "id": 1031696057,
                        "amount": -461.3,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                },
                {
                    "id": 104137668,
                    "internalTransactionDetailLine": {
                        "id": 1031696058,
                        "amount": -112.05,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                },
                {
                    "id": 104137669,
                    "internalTransactionDetailLine": {
                        "id": 1031696059,
                        "amount": -365.1,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 938.45,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 104352972,
            "paymentDate": "2020-06-19",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1342",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 104585277,
                    "internalTransactionDetailLine": {
                        "id": 1037011099,
                        "amount": -818.99,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 818.99,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 104655251,
            "paymentDate": "2020-07-21",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1351",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 104923048,
                    "internalTransactionDetailLine": {
                        "id": 1041764214,
                        "amount": -323.14,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 323.14,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 104963886,
            "paymentDate": "2020-08-16",
            "purposeDescription": "Alimentos família venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1354",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 105263913,
                    "internalTransactionDetailLine": {
                        "id": 1045571946,
                        "amount": -693.76,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 693.76,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 105463133,
            "paymentDate": "2020-10-07",
            "purposeDescription": "Noite familiar online da ala",
            "displayStatus": "Compensado",
            "referenceNumber": "1362",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 105813841,
                    "internalTransactionDetailLine": {
                        "id": 1053515399,
                        "amount": -523.04,
                        "subcategory": {
                            "id": 34,
                            "name": "Vários\r\n",
                            "sortOrder": 13,
                            "category": {
                                "id": 9,
                                "name": "Orçamento\r\n",
                                "sortOrder": 9,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 523.04,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 105463136,
            "paymentDate": "2020-10-07",
            "purposeDescription": "Atividade dia das crianças primária",
            "displayStatus": "Compensado",
            "referenceNumber": "1363",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 105813844,
                    "internalTransactionDetailLine": {
                        "id": 1053516303,
                        "amount": -97.4,
                        "subcategory": {
                            "id": 20,
                            "name": "Primária\r\n",
                            "sortOrder": 15,
                            "category": {
                                "id": 9,
                                "name": "Orçamento\r\n",
                                "sortOrder": 9,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 97.4,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 105583533,
            "paymentDate": "2020-10-16",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1370",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 105944936,
                    "internalTransactionDetailLine": {
                        "id": 1054896932,
                        "amount": -287.99,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 287.99,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 105583534,
            "paymentDate": "2020-10-16",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1371",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 105944937,
                    "internalTransactionDetailLine": {
                        "id": 1054896933,
                        "amount": -285.18,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 285.18,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 106183980,
            "paymentDate": "2020-12-05",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1378",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 106601061,
                    "internalTransactionDetailLine": {
                        "id": 1064319690,
                        "amount": -192.69,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 192.69,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 106313291,
            "paymentDate": "2020-12-15",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1380",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 106752284,
                    "internalTransactionDetailLine": {
                        "id": 1066677064,
                        "amount": -775.65,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 775.65,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 106725508,
            "paymentDate": "2021-01-14",
            "purposeDescription": "Alimentos para familia venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1386",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 107230124,
                    "internalTransactionDetailLine": {
                        "id": 1072365656,
                        "amount": -804.18,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 804.18,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 106778591,
            "paymentDate": "2021-01-21",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1387",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 107289745,
                    "internalTransactionDetailLine": {
                        "id": 1073319636,
                        "amount": -216.68,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 216.68,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 107119491,
            "paymentDate": "2021-02-21",
            "purposeDescription": "Alimentos de familia venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1391",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 107663267,
                    "internalTransactionDetailLine": {
                        "id": 1078343957,
                        "amount": -669.23,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 669.23,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 107159819,
            "paymentDate": "2021-02-26",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1393",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 107706701,
                    "internalTransactionDetailLine": {
                        "id": 1079100354,
                        "amount": -289.52,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 289.52,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 107485815,
            "paymentDate": "2021-03-27",
            "purposeDescription": "Alimentos familia venezuelana",
            "displayStatus": "Compensado",
            "referenceNumber": "1400",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 108064563,
                    "internalTransactionDetailLine": {
                        "id": 1084103740,
                        "amount": -719.53,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 719.53,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 107485816,
            "paymentDate": "2021-03-27",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1401",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 108064564,
                    "internalTransactionDetailLine": {
                        "id": 1084103741,
                        "amount": -149.13,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 149.13,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 107669743,
            "paymentDate": "2021-04-13",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1405",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 108266696,
                    "internalTransactionDetailLine": {
                        "id": 1087051899,
                        "amount": -354.58,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 354.58,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 107720123,
            "paymentDate": "2021-04-19",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1407",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 108327150,
                    "internalTransactionDetailLine": {
                        "id": 1087876134,
                        "amount": -151.59,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 151.59,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 108127049,
            "paymentDate": "2021-05-26",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1413",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 108792836,
                    "internalTransactionDetailLine": {
                        "id": 1094159608,
                        "amount": -290.51,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 290.51,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 108314026,
            "paymentDate": "2021-06-09",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1417",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 109005611,
                    "internalTransactionDetailLine": {
                        "id": 1096814344,
                        "amount": -516.18,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 516.18,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 108378092,
            "paymentDate": "2021-06-16",
            "purposeDescription": "Alimentos para o mes",
            "displayStatus": "Compensado",
            "referenceNumber": "1419",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 109078773,
                    "internalTransactionDetailLine": {
                        "id": 1097931002,
                        "amount": -685.49,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 685.49,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 108503280,
            "paymentDate": "2021-06-28",
            "purposeDescription": "Alimentos para o mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1421",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 109228846,
                    "internalTransactionDetailLine": {
                        "id": 1099512288,
                        "amount": -517.05,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 517.05,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 108933856,
            "paymentDate": "2021-08-01",
            "purposeDescription": "mercado do mes",
            "displayStatus": "Compensado",
            "referenceNumber": "1426",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 109722422,
                    "internalTransactionDetailLine": {
                        "id": 1105758740,
                        "amount": -502.95,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 502.95,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 109098964,
            "paymentDate": "2021-08-09",
            "purposeDescription": "Alimentos do mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1427",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 109908188,
                    "internalTransactionDetailLine": {
                        "id": 1107660290,
                        "amount": -414.07,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 414.07,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 109286750,
            "paymentDate": "2021-08-23",
            "purposeDescription": "Alimentos do mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1429",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 110122215,
                    "internalTransactionDetailLine": {
                        "id": 1110036220,
                        "amount": -444.01,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 444.01,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 109536702,
            "paymentDate": "2021-09-08",
            "purposeDescription": "Alimentos do mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1435",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 110399735,
                    "internalTransactionDetailLine": {
                        "id": 1112788344,
                        "amount": -325.72,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 325.72,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 109658269,
            "paymentDate": "2021-09-19",
            "purposeDescription": "Alimentação do mês",
            "displayStatus": "Compensado",
            "referenceNumber": "1437",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 110533282,
                    "internalTransactionDetailLine": {
                        "id": 1114351487,
                        "amount": -325.72,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 325.72,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 109658274,
            "paymentDate": "2021-09-19",
            "purposeDescription": "Atividade das moças",
            "displayStatus": "Compensado",
            "referenceNumber": "1438",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 110533287,
                    "internalTransactionDetailLine": {
                        "id": 1114351493,
                        "amount": -105.98,
                        "subcategory": {
                            "id": 34,
                            "name": "Vários\r\n",
                            "sortOrder": 13,
                            "category": {
                                "id": 9,
                                "name": "Orçamento\r\n",
                                "sortOrder": 9,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": {
                            "id": 877604,
                            "name": "ORM",
                            "__typename": "UnitSubcategory"
                        },
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 105.98,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        },
        {
            "id": 109715873,
            "paymentDate": "2021-09-22",
            "purposeDescription": "Alimentos",
            "displayStatus": "Compensado",
            "referenceNumber": "1439",
            "internalAccount": {
                "id": 47373,
                "displayName": "Glória Ward (185795-01)",
                "org": {
                    "id": 26813,
                    "__typename": "Org"
                },
                "__typename": "InternalAccount"
            },
            "detailLines": [
                {
                    "id": 110602039,
                    "internalTransactionDetailLine": {
                        "id": 1115053434,
                        "amount": -186.81,
                        "subcategory": {
                            "id": 4,
                            "name": "Alimentação",
                            "sortOrder": 2,
                            "category": {
                                "id": 2,
                                "name": "Ofertas de Jejum\r\n",
                                "sortOrder": 2,
                                "__typename": "Category"
                            },
                            "__typename": "Subcategory"
                        },
                        "unitSubcategory": null,
                        "__typename": "InternalTransactionDetailLine"
                    },
                    "__typename": "DisbursementDetailLine"
                }
            ],
            "totalAmount": 186.81,
            "payee": {
                "id": 25310037,
                "names": {
                    "localUnitDisplayName": "Pedro Maccari e Irmãos LTDA",
                    "__typename": "ParticipantNames"
                },
                "__typename": "Participant"
            },
            "__typename": "Disbursement"
        }
    ];
    return lista;
}

function dataSqlParaString(data){
    var split = data.split('-');
    return split[2] + '/' + split[1] + '/' + split[0];
}

function getAno(data){
    return data.split('/')[2];
}

function getValor(valor){
    return converteFloatParaMoeda(-valor, 2);
}