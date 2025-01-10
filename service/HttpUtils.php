<?php

class HttpUtils {

    public static function responseJson($object){
        header('Content-Type: application/json');
        echo json_encode($object);
    }
}