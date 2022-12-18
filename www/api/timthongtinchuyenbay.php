<?php
require_once("connection.php"); //Gọi php kết nối tới database MySql
//Lấy dữ liệu từ bảng chuyến bay có ngay bay trùng với nới đi, nơi đến, ngày bay
$noiDi = $_POST["NOIDI"];
$noiDen = $_POST["NOIDEN"];
$ngayBay = $_POST["NGAYBAY"];
$noiDi = "HÀ NỘI";
$noiDen = "ĐÀ NẴNG";
$ngayBay = "0000-00-00";


//Câu lệnh lấy tất cả dòng trong bảng người dùng
$sql = "select * from chuyenbay where NOIDI = ? and NOIDEN = ? and NGAYBAY = $ngayBay";
try {
//    $result = $dbConnection->query($sql);
    $stmt = $dbConnection->prepare($sql);
    $stmt->bind_param("ss", $noiDi, $noiDen);
    $stmt->execute();
    $result = $stmt->get_result();


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


