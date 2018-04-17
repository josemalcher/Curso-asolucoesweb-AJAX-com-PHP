<?php
/**
 * Created by PhpStorm.
 * User: josemalcher
 * Date: 17/04/2018
 * Time: 00:14
 */
namespace app\models;

abstract class Model
{
    private $connection;
    public function __construct()
    {
        $this->connection = Connection::connect();
    }

    public function all()
    {
        $sql = "select * from {$this->table}";
        $all = $this->connection->prepare($sql);
        $all->execute();
        return $all->fetchAll();
    }

}
