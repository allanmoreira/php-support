<?php

require_once('RestUtils.php');

$action = $_GET['action'];
$fileName = $_GET['file_name'] ?? null;

switch ($action){
    case 'storageinfo':
        Artifactory::storageinfo();
        break;
    case 'list':
        Artifactory::folderInfo();
        break;
    case 'delete_file':
        Artifactory::deleteFile($fileName);
        break;
}

class Artifactory {
    private static $URL_BASE = 'https://allanmoreira.jfrog.io/artifactory';
    private static $REPOSITORY_KEY = 'default-maven-local';
    private static $DIRETORIO = '/br/com/moreirallan/backups/sql/planilha_financeira';
    private static $AUTH = array(
        'user' => 'allanfelipe.moreira@gmail.com',
        'password' => 'AKCp8k8ic4U8Z1LkeaGr7Dy1wQyMoEYKqMCnDjfnNPDQnkXG6dCihRygnsWtEyo1tPW21QuD7'
    );

    public static function storageinfo(){
        echo RestUtils::call(
            'GET',
            self::$URL_BASE . '/api/storageinfo',
            null,
            self::$AUTH
        );
    }

    public static function folderInfo(){
        echo RestUtils::call(
            'GET',
            self::$URL_BASE . '/api/storage/' . self::$REPOSITORY_KEY . self::$DIRETORIO,
            null,
            self::$AUTH
        );
    }

    public static function deleteFile($fileName){
        echo RestUtils::call(
            'DELETE',
            self::$URL_BASE . '/' . self::$REPOSITORY_KEY . self::$DIRETORIO . '/' . $fileName,
            null,
            self::$AUTH
        );
    }
}
