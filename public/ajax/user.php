<?php

require "../../config.php";

use app\models\User;

$user = new User;
//var_dump($user->all());
echo  json_encode($user->all(),JSON_INVALID_UTF8_SUBSTITUTE);
