<?php

require_once ('config/Config.php');

$banco = $_GET['banco'];

$DB_NAME='planilha_financeira';
$DB_PARAM='--clean --if-exists --create'; # --inserts'
$DATE=`date +%Y-%m-%d-%H-%M-%S`;
$BACKUP_DIR='/var/www/html/backups/$DATABASE';
$BACKUP_NAME=$DATE.'-backup.sql';

$response = array();
$saida = shell_exec('sh PGPASSWORD="mbrasilia0911" pg_dump -U postgres $DB_PARAM $DATABASE > $BACKUP_NAME');
array_push($response, $saida);
$saida = shell_exec('sh mv ' . $BACKUP_NAME . ' ' . $BACKUP_DIR);
array_push($response, $saida);
echo json_encode($response);
/*
$saida = shell_exec('sh ' . Config::getScriptBackup() . ' ' . $banco . ' 2>&1');
$split = explode('-- ', $saida);
foreach ($split as $linha){
    str_replace($linha, '\n', '');
}
echo json_encode($split);
*/