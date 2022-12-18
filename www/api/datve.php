<?php
require_once("connection.php");

$soGhe = $_POST["SOGHE"];
$giaVe = $_POST["GIAVE"];
$loaiVe = $_POST["LOAIVE"];
$maMayBay = $_POST["MAMAYBAY"];
$maHanhKhach = $_POST["MAHANHKHACH"];
$maNguoiTao = $_POST["MANGUOITAO"];
$maNguoiMua = $_POST["MANGUOIMUA"];
$maChuyenBay = $_POST["MACHUYENBAY"];
$maSoVe = "VE99";
$soGhe = "1";
$giaVe = 1;
$loaiVe = "1";
$maMayBay = "MB01";
$maHanhKhach = "HK01";
$maNguoiTao = "NVBV01";
$maNguoiMua = "KH01";
$maChuyenBay = "CB01";
//Câu lệnh SQL tạo bảng
$sql = "insert into ve (MASOVE, SOGHE, GIAVE, LOAIVE, MAMAYBAY,MAHANHKHACH, MANGUOITAO, MANGUOIMUA, MACHUYENBAY) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
try {
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute(array($maSoVe, $soGhe, $giaVe, $loaiVe, $maMayBay, $maHanhKhach, $maNguoiTao, $maNguoiMua, $maChuyenBay));
} catch (PDOException $PDOException) {
    //Nếu cấu lệnh MySql bị lỗi
    die(json_encode(array("status" => false, "data" => $PDOException->getMessage())));
}
//Chạy cấu lệnh sql thành công
echo json_encode(array("status" => true, "data" => "VE created"));
?>

