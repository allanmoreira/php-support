<?php

require_once 'src/service/FileUtils.php';

$arquivo = $_GET['arquivo'];
$tipo = $_GET['tipo'];
$projeto = $_GET['projeto'];
$diretorio = FileUtils::getProjetoDir($tipo, $projeto);
FileUtils::download($diretorio, $arquivo);