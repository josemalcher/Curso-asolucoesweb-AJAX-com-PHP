<?php
/**
 * Created by PhpStorm.
 * User: josemalcher
 * Date: 17/04/2018
 * Time: 00:09
 */

namespace app\models;

use PDO;

class Connection
{
    public static function connect()
    {
        $pdo = new PDO("mysql:host=localhost; dbname=escola", "root", "");
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ); // pegar os dados como objetos
        return $pdo;
    }
}