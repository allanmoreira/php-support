<?php

namespace config;
class Config {
    private static $apache_path = '/var/www/html/';
    private static $build_path = 'builds/';
    private static $backup_path = 'backups/';
    private static $projetos_backup = array('planilha_financeira');
    private static $projetos_build = array('planilha-financeira-ms', 'planilha-financeira-web');

    public static function getApachePath(){
        return self::$apache_path;
    }

    public static function getBuildPath(){
        return self::$build_path;
    }

    public static function getBackupPath(){
        return self::$backup_path;
    }

    public static function getProjetosBackup(){
        return self::$projetos_backup;
    }

    public static function getProjetosBuild(){
        return self::$projetos_build;
    }


}