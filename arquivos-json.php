<?php
    require_once 'service/FileUtils.php';

$tipo = $_GET['tipo'];
$projeto = $_GET['projeto'];
$diretorio = FileUtils::getProjetoDir($tipo, $projeto);
$arquivos = FileUtils::getArquivos($diretorio);
echo json_encode($arquivos);
