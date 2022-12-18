<?php
require_once("connection.php"); //Gọi php kết nối tới database MySql

//Câu lệnh lấy tất cả dòng trong bảng người dùng
$sql = "select * from chuyenbay";
try {
    $result = $dbConnection->query($sql);
//    $stmt = $dbConnection->prepare($sql);
//    $stmt->bind_param("");
} catch (Exception $exception) {
    //Nếu cấu lệnh MySql bị lỗi
    die(json_encode(array("status" => false, "data" => $exception->getMessage())));
}
//Chạy cấu lệnh sql thành công
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
echo json_encode(array("status" => true, "data" => $data))
?>


