<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>PHP Support</title>

    <!-- Bootstrap core CSS -->
    <link href="static/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap theme -->
    <link href="static/css/bootstrap-theme.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="static/css/theme.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">PHP Support</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a href="backups.php">Backups</a></li>
                    <li><a href="builds.php">Builds</a></li>
                    <li><a href="upload.php">Upload</a></li>
                    <li><a href="despesas_maccari.php">Despesas Maccari</a></li>
                    <li><a href="projecao_contas.php">Projeção Contas</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Getnet<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="getnet/calculadora_vendas.html">Calculadora Vendas</a></li>
                            <li><a href="getnet/extrato_servicos.html">Extrato Serviços</a></li>
                            <li><a href="getnet/rate_limit.html">Rate Limit</a></li>
                            <li><a href="getnet/gestao_usuario.html">Gestão Usuário</a></li>
                        </ul>
                    </li>

                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>

    <div id="loader" style="display: none" class="loader"></div>