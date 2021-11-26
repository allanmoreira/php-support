<?php

require_once ('config/Config.php');

echo shell_exec('sh ' . Config::getScriptBackup());