<?php
require_once("./connection.php"); //Gọi php kết nối tới database MySql

//Select vé theo mã vé
$maVe = $_POST["MASOVE"];
$maVe = "VE01";
$sql = "select * from ve where MASOVE = ?";
try {
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute(array($maVe));
} catch (PDOException $PDOException) {
    //Nếu cấu lệnh MySql bị lỗi
    die(json_encode(array("status" => false, "data" => $PDOException->getMessage())));
}
//Chạy cấu lệnh sql thành công
$data = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $data[] = $row;
}
echo json_encode(array("status" => true, "data" => $data))
?>


