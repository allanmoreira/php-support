<?php

class FileUtils {

    public static function getArquivos($diretorio){
        return scandir($diretorio, 1);
    }

    public static function getProjetoDir($tipo, $projeto){
        if($tipo == 'backup'){
            return Config::getBackupPath() . 'planilha_financeira/';
        } else if($tipo == 'builds') {
            return Config::getBuildPath() . $projeto . '/';
        }
    }

    public static function download($diretorio, $arquivo){
        header('Content-Type: application/csv');
        header('Content-Disposition: attachment; filename=' . $arquivo);
        header('Pragma: no-cache');
        readfile($diretorio . $arquivo);
    }
}