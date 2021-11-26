<?php

require_once ('config/Config.php');

$banco = $_GET['banco'];

$DB_NAME='planilha_financeira';
$DB_PARAM='--clean --if-exists --create'; # --inserts'
$DATE_COMMAND='date +%Y-%m-%d-%H-%M-%S';
$BACKUP_DIR='/var/www/html/backups/$DATABASE';

$response = array();
$data = shell_exec("$DATE_COMMAND  2>&1");
$BACKUP_NAME=$data.'-backup.sql';


echo '------------------------------------------<br>';
echo 'DATA: ' . $data . '<br>';
echo 'BACKUP_NAME: ' . $BACKUP_NAME . '<br>';
echo "sh PGPASSWORD='mbrasilia0911' pg_dump -U postgres $DB_PARAM $banco > $BACKUP_NAME 2>&1" . '<br>';
echo '------------------------------------------<br>';


$saida = shell_exec("PGPASSWORD='mbrasilia0911' pg_dump -U postgres $DB_PARAM $banco > $BACKUP_NAME 2>&1");
array_push($response, $saida);

$saida = shell_exec("mv $BACKUP_NAME $BACKUP_DIR 2>&1");
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