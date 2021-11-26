<?php
    require_once 'service/FileUtils.php';

$tipo = $_GET['tipo'];
$projeto = $_GET['projeto'];
$diretorio = FileUtils::getProjetoDir($tipo, $projeto);
$arquivos = FileUtils::getArquivos($diretorio);
$retorno = array();
foreach ($arquivos as $arquivo){
    if($arquivo != '.' && $arquivo != '..')
        array_push($retorno, $arquivo);
}
echo json_encode($retorno);
