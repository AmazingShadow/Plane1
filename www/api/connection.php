<?php

//Cấu hình database MySql
$host = "mysql-server";
$databaseName = "banvemaybay";
$userName = "root";
$password = "root";

$dbConnection = new mysqli($host, $userName, $password, $databaseName);
$dbConnection->set_charset("utf8");
if ($dbConnection->connect_error) {
    die('Không thể kết nối database: ' . $dbConnection->connect_error);
}
?>
