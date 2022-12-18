<?php
require_once("./connection.php"); //Gọi php kết nối tới database MySql

//Câu lệnh lấy tất cả dòng trong bảng người dùng
$sql = "select * from nguoidung";
try {
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute();
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


