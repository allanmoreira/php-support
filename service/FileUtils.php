<?php

require_once ('config/Config.php');

class FileUtils {

    public static function getArquivos($diretorio){
        return scandir($diretorio, 1);
    }

    public static function getProjetoDir($tipo, $projeto){
        $diretorio = '';
        if($tipo == 'backups'){
            $diretorio = Config::getBackupPath();
        } else if($tipo == 'builds') {
            $diretorio = Config::getBuildPath();
        }
        return $diretorio . $projeto . '/';
    }

    public static function download($diretorio, $arquivo){
        header('Content-Type: application/csv');
        header('Content-Disposition: attachment; filename=' . $arquivo);
        header('Pragma: no-cache');
        readfile($diretorio . $arquivo);
    }
}