<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Logs</title>

        <!-- Bootstrap -->
        <link href="../static/css/bootstrap.min.css" rel="stylesheet">
        <link href="../static/css/layout.css" rel="stylesheet">
        <link href="../static/css/plugins.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>

        <nav class="navbar navbar-inverse navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="../index.php">Logs</a>
                </div>
            </div>
        </nav>

        <div id="loader" style="display: none" class="loader"></div>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <?php require_once 'login_getnet.php'; ?>

            <div class="col-lg-4">
                <h4><strong>Endpoint</strong></h4>
                <label>EC</label>
                <input id="ec" class="form-control" placeholder="ec">
                <label>Período</label>
                <select id="periodo" class="form-control">
                    <option value="0">Hoje</option>
                    <option value="15">15 dias</option>
                    <option value="30">30 dias</option>
                    <option value="90">90 dias</option>
                </select>
                <label>Events</label>
                <select id="events" class="form-control">
                    <option value="">Todos</option>
                </select>
                <br>
                <button class="btn btn-primary" id="btn_executar">Executar</button>
                <button class="btn btn-success" id="btn_update_event_types">Atualizar Event Types</button>
                <button class="btn btn-danger" id="btn_remover_evento">Remover <strong>TESTE_FEATURES_BD</strong></button>
            </div>

            <div class="col-lg-2">
                <h4 style="color: white">ALINHAR</h4>
                <label>Status</label>
                <select id="status_log" class="form-control">
                    <option value="">Todos</option>
                    <option value="sucesso">Sucesso</option>
                    <option value="falha">Falha</option>
                </select>
                <label>Pagina</label>
                <select id="pagina" class="form-control">
                    <option value="0">0</option>
                </select>
                <label>Itens por Página</label>
                <select id="itens_pagina" class="form-control">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        </div>

        <hr/>

        <div style="margin-left: 10px">
            <h4><strong>Mensagem:</strong> <span id="mensagem"></span></h4>
        </div>

        <hr/>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <h4><strong>Retorno</strong></h4>
            <table id="tabela" class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th class="text-center">#</th>
                        <th class="text-center">ID</th>
                        <th class="text-center">Data</th>
                        <th class="text-center">Hora</th>
                        <th class="text-center">Tipo</th>
                        <th class="text-center">EC</th>
                        <th class="text-center">Usuário</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Mensagem</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>

        <div id="modal_detalhes" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel"><strong>Detalhes Log</strong></h4>
                        </div>
                        <div class="modal-body">
                            <h4><strong>Básico</strong></h4>
                            <div class="row">
                                <div class="col-md-3 "><strong>ID: </strong><span id="id"></span></div>
                                <div class="col-md-3 "><strong>Estabelecimento: </strong><span id="estabelecimento"></span></div>
                                <div class="col-md-3 col-md-offset-3"><strong>Usuário: </strong><span id="usuario"></span></div>
                            </div>
                            <br>
                            <h4><strong>Request</strong></h4>
                            <div class="row">
                                <div class="col-md-6"><strong>Service: </strong><span id="service"></span></div>
                                <div class="col-md-6"><strong>Path: </strong><span id="path"></span></div>
                                <div class="col-md-12"><strong>Detail: </strong><span id="detail"></span></div>
                            </div>
                            <br>
                            <h4><strong>Response</strong></h4>
                            <div class="row">
                                <div class="col-md-12"><strong>Response: </strong><pre id="response"></pre></div>
                                <div class="col-md-12"><strong>Stack Info: </strong><pre id="stack_info" style="max-height: 300px"></pre></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="../static/js/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../static/js/bootstrap.min.js"></script>
        <script src="../static/js/jquery.mask.min.js"></script>
        <script src="../static/js/jquery.maskMoney.min.js"></script>
        <script src="../static/js/plugins/js.cookie.min.js"></script>
        <script src="../static/js/plugins/bootstrap-notify.js"></script>
        <script src="../static/js/plugins/urls_portal.js"></script>
        <script src="../static/js/plugins/token_getnet.js"></script>
        <script src="../static/js/plugins/notificacao.js"></script>
        <script src="../static/js/plugins/aguardar_carregamento_ajax.js"></script>
        <script src="../static/js/plugins/funcoes_gerais.js"></script>
        <script src="../static/js/paginas/logs.js"></script>

    </body>
</html>