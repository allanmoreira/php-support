<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Tratamento Erros</title>

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
                    <a class="navbar-brand" href="../index.php">Tratamento Erros</a>
                </div>
            </div>
        </nav>

        <div id="loader" style="display: none" class="loader"></div>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">

            <div class="col-lg-6">
                <button class="btn btn-primary" id="btn_consultar">Consultar</button>
            </div>
        </div>

        <hr/>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <h4><strong>Responses</strong></h4>
            <table id="tabela" class="table table-bordered table-striped">
                <thead>
                <th class="text-center">#</th>
                <th class="text-center">Endpoint</th>
                <th class="text-center">Value</th>
                <th class="text-center">Service Key</th>
                <th class="text-center">Description</th>
                <th class="text-center">Exception Type</th>
                <th class="text-center">Error Payload</th>
                </thead>
                <tbody></tbody>
            </table>
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
        <script src="../static/js/paginas/tratamento_erros.js"></script>

    </body>
</html>