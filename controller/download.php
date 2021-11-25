<?php

$arquivo = $_GET['arquivo'];
$diretorio = $_GET['diretorio'];

header('Content-Type: application/csv');
header('Content-Disposition: attachment; filename=' . $arquivo);
header('Pragma: no-cache');
readfile($diretorio . $arquivo);