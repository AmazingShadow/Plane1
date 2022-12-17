<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
    <link rel="stylesheet" href="/style.css">
    <title>Trang chủ</title>
</head>

<body>

    <section class="header">
        <div class="logo">

            <h2><span>Risa</span></h2>
            <i class="ri-menu-line icon icon-0 menu"></i>
        </div>
        <div class="search--notification--profile">
            <div class="searchh">
                <input id="SearchBar" name="SearchBar" type="text" class="form-control" placeholder="Tìm kiếm..." aria-label="Recipient's username" aria-describedby="basic-addon2">
                <button id="buttonSearch"><i class="ri-search-2-line"></i></button>
            </div>
            <div class="notification--profile">
                <div class="picon profile">
                    <img class="img" src="images/icons8-customer-64.png" alt="">

                </div>
                <div class="logout-but">
                    <button class="btn btn-primary" id="logout" style="background-color: white; color: black;">Đăng
                        xuất</button>
                </div>
            </div>
        </div>
    </section>
    <section class="main">
        <div class="sidebar">
            <ul class="sidebar--items">
                <li class="li">
                    <a class="a" href="adminCB.html">
                        <span class="sidebar--item" style="color: black; ">Quản lý chuyến
                            bay</span>
                    </a>
                </li>
                <li class="li">
                    <a class="a" href="adminKH.html">
                        <span class="sidebar--item" style="color: black;">Quản lý khách hàng</span>
                    </a>
                </li>
                <li class="li">
                    <a class="a" href="adminLS.html">
                        <span class="sidebar--item" style="color: black;">Quản lý lịch sử mua</span>
                    </a>
                </li>
                <li class="li">
                    <a class="a" href="adminTK.php" id="active--link">
                        <span class="sidebar--item" style="color: black;">Thống kê thu nhập</span>
                    </a>
                </li>
            </ul>
            <ul class="sidebar--bottom-items">
                <li class="li">
                    <a class="a" href="#">
                        <div class="logout-but">
                            <button class="btn btn-primary" id="logout" style="background-color: white; color: black;">Đăng xuất</button>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="main--content" style=" overflow-y: unset">
            <div class="recent--patients">
                <div class="title">
                    <h2 style="padding-left: 360px; color: #5EC2E4;">Doanh Thu Risa airlines</h2>
                </div>
                <div class="table">
                    <table>
                        <div class="left">
                            <label for=""> Chọn ngày</label><br>
                            <span>
                                <select name="day">
                                    <?php
                                    $start_date = 1;
                                    $end_date   = 31;
                                    for ($j = $start_date; $j <= $end_date; $j++) {
                                        echo '<option value=' . $j . '>' . $j . '</option>';
                                    }
                                    ?>
                                </select>
                            </span>
                        </div>
                        <div class="center">
                            <label for=""> Chọn Tháng</label><br>
                            <span>
                                <select name="month">
                                    <?php for ($m = 1; $m <= 12; ++$m) {
                                        $month_label = date('F', mktime(0, 0, 0, $m, 1));
                                    ?>
                                        <option value="<?php echo $month_label; ?>"><?php echo $month_label; ?></option>
                                    <?php } ?>
                                </select>
                            </span>
                            <br>
                            <br>
                            <button id="doanhthu">Xem doanh thu</button>
                        </div>
                        <div class="right">
                            <label for=""> Chọn năm</label><br>
                            <span>
                                <select name="year">
                                    <?php
                                    $year = date('Y');
                                    $min = $year - 60;
                                    $max = $year;
                                    for ($i = $max; $i >= $min; $i--) {
                                        echo '<option value=' . $i . '>' . $i . '</option>';
                                    }
                                    ?>
                                </select>
                            </span>
                        </div>

                    </table>
                    
                    
                </div>

            </div>
        </div>
    </section>
    <!-- <script>
        let menu = document.querySelector('.menu')
        let sidebar = document.querySelector('.sidebar')
        let mainContent = document.querySelector('.main--content')

        menu.onclick = function() {
            sidebar.classList.toggle('active')
            mainContent.classList.toggle('active')
        }
    </script> -->
    <div class="modal editForm" id="myModal" role="dialog">
        <form>
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Nhập thông tin khách hàng</h4>
                    </div>
                    <div class="modal-body" id="body_form">
                        <div class="div_left" style="text-align: left; padding-left: 15px; ">
                            <label for="">Mã khách hàng</label>
                            <br>
                            <input type="text" placeholder="Nhập mã khách hàng..."><br><br>

                            <label for="">Tên khách hàng</label>
                            <br>
                            <input type="text" placeholder="Nhập tên khách hàng..."><br><br>

                            <label for="">Tài khoản</label>
                            <br>
                            <input type="text" placeholder="Nhập tài khoản..."><br><br>

                            <label for="">Mật khẩu</label>
                            <br>
                            <input type="password" placeholder="Nhập mã khách hàng..."><br><br>
                        </div>
                        <div class="div_right">
                            <label for="">Email</label>
                            <br>
                            <input type="email" placeholder="Nhập email khách hàng..."><br><br>

                            <label for="">Số điện thoại</label>
                            <br>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required placeholder="Nhập sđt khách hàng..."><br><br>

                            <label for="gender">Giới tính</label><br>
                            <select id="gender" name="gender" New>
                                <option value="Nữ">Nam</option>
                                <option value="Nam">Nữ</option>
                            </select><br><br>

                            <label for="">Ngày sinh</label>
                            <br>
                            <input type="date"><br><br>


                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onclick="Close()" class="btn btn-default" data-dismiss="modal">Đóng</button>
                        <input type="submit" class="btn btn-success" data-dismiss="modal" value="Thêm">
                    </div>
                </div>
            </div>
        </form>
    </div>
    <!-- <script>
        function Close() {
            const div = document.querySelector('#myModal');
            div.style.display = "none";
        }

        function openForm() {
            const div = document.querySelector('#myModal');
            div.style.display = "block";
        }
    </script> -->
    <script src="/main.js"></script>
</body>

</html>