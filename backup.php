<?php

require_once ('config/Config.php');

$banco = $_GET['banco'];
$saida = shell_exec('sh ' . Config::getScriptBackup() . ' ' . $banco);
$split = explode('-- ', $saida);
foreach ($split as $linha){
    str_replace($linha, '\n', '');
}
echo json_encode($split);