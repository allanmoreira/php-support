<?php

class Config {

    public static function getApplicationPath(){
        return $_SERVER['DOCUMENT_ROOT'].'/';
    }

    public static function getNomeProjeto(){
        return 'php-support';
    }

    public static function getApachePath(){
        return '/var/www/html/';
    }

    public static function getBuildPath(){
        return self::getApachePath() . 'builds/';
    }

    public static function getBackupPath(){
        return self::getApachePath() . 'backups/';
    }

    public static function getProjetosBackup(){
        return array('planilha_financeira');
    }

    public static function getProjetosBuild(){
        return array('planilha-financeira-ms', 'planilha-financeira-web');
    }

    public static function getScriptBackup(){
        return '/home/usr_pub/backup_bd/backup.sh';
    }


}