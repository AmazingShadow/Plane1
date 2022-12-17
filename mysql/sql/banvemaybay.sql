-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 15, 2022 lúc 02:50 PM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `banvemaybay`
--
CREATE database banvemaybay;
use banvemaybay;
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuyenbay`
--

CREATE TABLE `chuyenbay` (
  `MACHUYENBAY` varchar(10) NOT NULL,
  `NGAYBAY` date DEFAULT NULL,
  `HANGCHUYENBAY` varchar(30) DEFAULT NULL,
  `NOIDI` varchar(20) DEFAULT NULL,
  `NOIDEN` varchar(20) DEFAULT NULL,
  `GIOKHOIHANH` datetime DEFAULT NULL,
  `GIOHACANH` datetime DEFAULT NULL,
  `QUANGDUONG` float DEFAULT NULL,
  `GIATIEN` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chuyenbay`
--

INSERT INTO `chuyenbay` (`MACHUYENBAY`, `NGAYBAY`, `HANGCHUYENBAY`, `NOIDI`, `NOIDEN`, `GIOKHOIHANH`, `GIOHACANH`, `QUANGDUONG`, `GIATIEN`) VALUES
('CB01', '0000-00-00', 'PHỔ THÔNG', 'HÀ NỘI', 'ĐÀ NẴNG', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 300.5, 1600000),
('CB02', '0000-00-00', 'PHỔ THÔNG', 'HÀ NỘI', 'ĐÀ NẴNG', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 300.5, 1700000),
('CB03', '0000-00-00', 'PHỔ THÔNG', 'HÀ NỘI', 'ĐÀ NẴNG', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 300.5, 1500000),
('CB04', '0000-00-00', 'PHỔ THÔNG', 'CAM RANH', 'ĐÀ NẴNG', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 230, 800000),
('CB05', '0000-00-00', 'PHỔ THÔNG', 'CAM RANH', 'ĐÀ NẴNG', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 230, 9600000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hanhkhach`
--

CREATE TABLE `hanhkhach` (
  `MAHANHKHACH` varchar(10) NOT NULL,
  `TENHANHKHACH` varchar(20) DEFAULT NULL,
  `SOCMND` varchar(20) DEFAULT NULL,
  `GIOITINH` varchar(3) DEFAULT NULL,
  `DIACHI` varchar(30) DEFAULT NULL,
  `SDT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hanhkhach`
--

INSERT INTO `hanhkhach` (`MAHANHKHACH`, `TENHANHKHACH`, `SOCMND`, `GIOITINH`, `DIACHI`, `SDT`) VALUES
('HK01', 'NGUYỄN THẾ LÂN', '251160427', 'NAM', '123 ĐIỆN BIÊN PHỦ, HÀ NỘI', '0987879546'),
('HK02', 'NGUYỄN VĂN THÁI', '251160426', 'NAM', '235 LÝ PHỤC MAN, CAM RANH', '0987879543'),
('HK03', 'LÊ MINH THÀNH', '251160428', 'NAM', '18A LÊ VĂN LƯƠNG, HÀ GIANG', '0987879548'),
('HK04', 'NGUYỄN PHƯƠNG HOA', '251160423', 'NỮ', '32 NGUYỄN TRỌNG KỶ, NHA TRANG', '0987879541'),
('HK05', 'ĐOÀN THẾ LÂN', '251160422', 'NAM', '33 LÝ THÁI TỔ, HÀ NỘI', '0987879549'),
('HK06', 'LÊ CÔNG AN', '251160456', 'NAM', '235 VÕ THỊ SÁU, CAM RANH', '0987879546'),
('HK07', 'NGUYỄN CHÂU LONG', '251160433', 'NỮ', '18B LÊ VĂN LƯƠNG, HÀ GIANG', '0987879544'),
('HK08', 'NGUYỄN PHƯƠNG NHI', '251160443', 'NỮ', '322 NGUYỄN TRỌNG KỶ, NHA TRANG', '0987879554'),
('HK09', 'LÊ CÔNG THÀNH', '251160222', 'NAM', '33 LÝ PHỤC MAN, PHÚ YÊN', '0987879954'),
('HK10', 'ĐOÀN NGỌC LÂM', '251160567', 'NAM', '98 LÝ THÁI TỔ, HÀ NỘI', '0987879565');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `maybay`
--

CREATE TABLE `maybay` (
  `MAMAYBAY` varchar(10) NOT NULL,
  `TENMAYBAY` varchar(20) DEFAULT NULL,
  `SOLUONGGHETHUONG` int(11) DEFAULT NULL,
  `SOLUONGGHETHUONGGIA` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `maybay`
--

INSERT INTO `maybay` (`MAMAYBAY`, `TENMAYBAY`, `SOLUONGGHETHUONG`, `SOLUONGGHETHUONGGIA`) VALUES
('MB01', 'AIRBUS-A380-900', 40, 10),
('MB02', 'AAIRBUS-A380-800', 50, 10),
('MB03', 'BOEING-747-8', 60, 10),
('MB04', 'BOEING-747-400', 70, 10),
('MB05', 'BOEING-747-300', 80, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `MASONGUOIDUNG` varchar(10) NOT NULL,
  `TENNGUOIDUNG` varchar(30) DEFAULT NULL,
  `TENDANGNHAP` varchar(20) DEFAULT NULL,
  `MATKHAU` varchar(30) DEFAULT NULL,
  `EMAIL` varchar(30) DEFAULT NULL,
  `SODIENTHOAI` varchar(10) DEFAULT NULL,
  `GIOITINH` varchar(3) DEFAULT NULL,
  `NGAYSINH` date DEFAULT NULL,
  `MASOROLE` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`MASONGUOIDUNG`, `TENNGUOIDUNG`, `TENDANGNHAP`, `MATKHAU`, `EMAIL`, `SODIENTHOAI`, `GIOITINH`, `NGAYSINH`, `MASOROLE`) VALUES
('KH01', 'NGUYỄN THÁI HOÀNG', 'thaihoangcr123', '123456', 'thaihoang@gmail.com', '0915137869', 'NAM', '0000-00-00', '1'),
('KH02', 'HOÀNG VĂN HUY', 'vanhuycr123', '123456', 'vanhuy@gmail.com', '0915137868', 'NAM', '0000-00-00', '1'),
('NVBV01', 'TRỊNH TRƯỜNG DUY', 'truongduycr123', '123456', 'truongduy@gmail.com', '0915137863', 'NAM', '0000-00-00', '4'),
('QLHT01', 'LÊ ANH QUỐC', 'anhquoccr1234', '123456', 'anhquoc@gmail.com', '0915137866', 'NAM', '0000-00-00', '2'),
('QLHT02', 'LÊ THÀNH NHÂN', 'thanhnhancr1235', '123456', 'thanhnhan@gmail.com', '0915137865', 'NAM', '0000-00-00', '2'),
('QLHT03', 'NGUYỄN THẾ ANH', 'admin', 'admin', 'admin@gmail.com', '0915137862', 'NAM', '0000-00-00', '2'),
('QLTT01', 'ĐOÀN PHƯƠNG NAM', 'phuongnamcr123', '123456', 'phuongnam@gmail.com', '0915137864', 'NAM', '0000-00-00', '3');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `MASOROLE` varchar(10) NOT NULL,
  `TENROLE` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`MASOROLE`, `TENROLE`) VALUES
('1', 'KHÁCH HÀNG'),
('2', 'QUẢN LÝ HỆ THỐNG'),
('3', 'QUẢN LÝ THÔNG TIN'),
('4', 'NHÂN VIÊN BÁN VÉ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ve`
--

CREATE TABLE `ve` (
  `MASOVE` varchar(10) NOT NULL,
  `SOGHE` varchar(10) DEFAULT NULL,
  `GIAVE` int(11) DEFAULT NULL,
  `LOAIVE` varchar(30) DEFAULT NULL,
  `MAMAYBAY` varchar(10) DEFAULT NULL,
  `MAHANHKHACH` varchar(10) DEFAULT NULL,
  `MANGUOITAO` varchar(10) DEFAULT NULL,
  `MANGUOIMUA` varchar(10) DEFAULT NULL,
  `MACHUYENBAY` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `ve`
--

INSERT INTO `ve` (`MASOVE`, `SOGHE`, `GIAVE`, `LOAIVE`, `MAMAYBAY`, `MAHANHKHACH`, `MANGUOITAO`, `MANGUOIMUA`, `MACHUYENBAY`) VALUES
('VE01', 'A01', 20000, 'PHỔ THÔNG', 'MB01', 'HK01', 'NVBV01', 'KH01', 'CB01'),
('VE010', 'D01', 30000, 'PHỔ THÔNG', 'MB02', 'HK10', NULL, 'KH02', 'CB02'),
('VE02', 'A02', 20000, 'PHỔ THÔNG', 'MB01', 'HK02', 'NVBV01', 'KH02', 'CB01'),
('VE03', 'B01', 40000, 'THƯƠNG GIA', 'MB01', 'HK03', 'NVBV01', 'KH01', 'CB01'),
('VE04', 'C01', 20000, 'PHỔ THÔNG', 'MB01', 'HK04', 'NVBV01', 'KH01', 'CB01'),
('VE05', 'D01', 20000, 'PHỔ THÔNG', 'MB01', 'HK05', 'NVBV01', 'KH01', 'CB01'),
('VE06', 'A01', 30000, 'PHỔ THÔNG', 'MB02', 'HK06', NULL, 'KH01', 'CB02'),
('VE07', 'A02', 30000, 'PHỔ THÔNG', 'MB02', 'HK07', NULL, 'KH02', 'CB02'),
('VE08', 'B01', 60000, 'THƯƠNG GIA', 'MB02', 'HK08', NULL, 'KH02', 'CB02'),
('VE09', 'C01', 30000, 'PHỔ THÔNG', 'MB02', 'HK09', NULL, 'KH02', 'CB02');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chuyenbay`
--
ALTER TABLE `chuyenbay`
  ADD PRIMARY KEY (`MACHUYENBAY`);

--
-- Chỉ mục cho bảng `hanhkhach`
--
ALTER TABLE `hanhkhach`
  ADD PRIMARY KEY (`MAHANHKHACH`);

--
-- Chỉ mục cho bảng `maybay`
--
ALTER TABLE `maybay`
  ADD PRIMARY KEY (`MAMAYBAY`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`MASONGUOIDUNG`),
  ADD UNIQUE KEY `TENDANGNHAP` (`TENDANGNHAP`),
  ADD UNIQUE KEY `SODIENTHOAI` (`SODIENTHOAI`),
  ADD KEY `FK_NGUOIDUNG_MASOROLE` (`MASOROLE`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`MASOROLE`);

--
-- Chỉ mục cho bảng `ve`
--
ALTER TABLE `ve`
  ADD PRIMARY KEY (`MASOVE`),
  ADD KEY `FK_VE_MAMAYBAY` (`MAMAYBAY`),
  ADD KEY `FK_VE_MAHANHKHACH` (`MAHANHKHACH`),
  ADD KEY `FK_VE_MANGUOITAO` (`MANGUOITAO`),
  ADD KEY `FK_VE_MANGUOIMUA` (`MANGUOIMUA`),
  ADD KEY `FK_VE_MACHUYENBAY` (`MACHUYENBAY`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD CONSTRAINT `FK_NGUOIDUNG_MASOROLE` FOREIGN KEY (`MASOROLE`) REFERENCES `role` (`MASOROLE`);

--
-- Các ràng buộc cho bảng `ve`
--
ALTER TABLE `ve`
  ADD CONSTRAINT `FK_VE_MACHUYENBAY` FOREIGN KEY (`MACHUYENBAY`) REFERENCES `chuyenbay` (`MACHUYENBAY`),
  ADD CONSTRAINT `FK_VE_MAHANHKHACH` FOREIGN KEY (`MAHANHKHACH`) REFERENCES `hanhkhach` (`MAHANHKHACH`),
  ADD CONSTRAINT `FK_VE_MAMAYBAY` FOREIGN KEY (`MAMAYBAY`) REFERENCES `maybay` (`MAMAYBAY`),
  ADD CONSTRAINT `FK_VE_MANGUOIMUA` FOREIGN KEY (`MANGUOIMUA`) REFERENCES `nguoidung` (`MASONGUOIDUNG`),
  ADD CONSTRAINT `FK_VE_MANGUOITAO` FOREIGN KEY (`MANGUOITAO`) REFERENCES `nguoidung` (`MASONGUOIDUNG`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
