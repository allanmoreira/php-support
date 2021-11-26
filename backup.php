<?php

require_once ('config/Config.php');

$banco = $_GET['banco'];
$saida = shell_exec('sh ' . Config::getScriptBackup() . ' ' . $banco);
$split = explode('\n', $saida);
echo json_encode($split);