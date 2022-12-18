function chooseCategory() {
    let menu = document.querySelector('.menu')
    let sidebar = document.querySelector('.sidebar')
    let mainContent = document.querySelector('.main--content')

    menu.onclick = function () {
        sidebar.classList.toggle('active')
        mainContent.classList.toggle('active')
    }
}

function openPlace() {
    document.querySelector('.dropdown-menu').style.display = "block";
}

// adminLS
function openDetail() {
    let div = document.querySelector('#modalDetail');
    div.style.display = "block";
}

function CloseDetail() {
    let div = document.querySelector('#modalDetail');
    div.style.display = "none";
}

// adminKH
// adminCB
//adminTK
function Close() {
    const div = document.querySelector('#myModal');
    div.style.display = "none";
}

function openForm() {
    const div = document.querySelector('#myModal');
    div.style.display = "block";
}

// Trang chủ


// Lấy input và hiển thị ra nơi đi.
function searchFlight() {
    let inputSearch = document.querySelector('.input-search');
    let autobox = document.querySelector('.autobox');
    inputSearch.onkeyup = (e) => {
        let checkData = e.target.value;
        let dataArray = [];
        if (checkData) {
            // Lọc ra những data có chứa những chữ giống với keywork của người dùng nhập vào.
            dataArray = recommend.filter((data) => {
                return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase());
            })
            // Lặp qua và tạo ra thẻ để hiển thị ra mà hình.
            dataArray = dataArray.map((data) => {
                return data = '<li>' + data + '</li>';
            })
            autobox.classList.add('active');
            showAdress(dataArray);
            // Khi chọn thẻ li nào thì ô input sẽ nhận text của thẻ li đó
            let liItem = autobox.querySelectorAll("li");
            for (let i = 0; i < liItem.length; i++) {
                liItem[i].addEventListener("click", function () {
                    inputSearch.value = liItem[i].innerHTML;
                    autobox.classList.remove('active');
                })
            }

        } else {
            autobox.classList.remove('active');
        }
    }

    let recommend = [
        "An Giang",
        "Vũng Tàu",
        "Bắc Giang",
        "Bắc Kạn",
        "Bạc Liêu",
        "Bắc Ninh",
        "Bến Tre",
        "Bình Định",
        "Bình Dương",
        "Bình Phước",
        "Bình Thuận",
        "Cà Mau",
        "Cần Thơ",
        "Cao Bằng",
        "Đà Nẵng",
        "Đắk Lắk",
        "Đắk Nông",
        "Điện Biên",
        "Đồng Nai",
        "Đồng Tháp",
        "Gia Lai",
        "Hà Giang",
        "Hà Nam",
        "Hà Nội",
        "Hà Tĩnh",
        "Hải Dương",
        "Hải Phòng",
        "Hậu Giang",
        "Hòa Bình",
        "Hưng Yên",
        "Khánh Hòa",
        "Kiên Giang",
        "Kon Tum",
        "Lai Châu",
        "Lâm Đồng",
        "Lạng Sơn",
        "Lào Cai",
        "Long An",
        "Nam Định",
        "Nghệ An",
        "Ninh Bình",
        "Ninh Thuận",
        "Phú Thọ",
        "Phú Yên",
        "Quảng Bình",
        "Quảng Nam",
        "Quảng Ngãi",
        "Quảng Ninh",
        "Quảng Trị",
        "Sóc Trăng",
        "Sơn La",
        "Tây Ninh",
        "Thái Bình",
        "Thái Nguyên",
        "Thanh Hóa",
        "Thừa Thiên Huế",
        "Tiền Giang",
        "TP Hồ Chí Minh",
        "Trà Vinh",
        "Tuyên Quang",
        "Vĩnh Long",
        "Vĩnh Phúc",
        "Yên Bái"
    ];
}

// Hiển thị list phù hợp với keyword của người dùng
function showAdress(list) {
    let autobox = document.querySelector('.autobox');
    let inputSearch = document.querySelector('.input-search');
    let listData;
    if (!list.length) {
        listData = '<li>' + inputSearch.value + '</li>'
    } else {
        listData = list.join('');
    }
    autobox.innerHTML = listData;
}

searchFlight();


// Lấy input và hiển thị ra nơi đến.
function searchFlightWhere() {
    let inputSearch = document.querySelector('.input-search-where');
    let autobox = document.querySelector('.autobox-where');
    let hanghe = document.querySelector('.chair');
    let body = document.querySelector('body');

    // body.addEventListener("click", function() {
    // 	hanghe.style.display = "block";
    // })

    inputSearch.onkeyup = (e) => {
        hanghe.style.display = "none";
        let checkData = e.target.value;
        let dataArray = [];
        if (checkData) {
            // Lọc ra những data có chứa những chữ giống với keywork của người dùng nhập vào.
            dataArray = recommend.filter((data) => {
                return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase());
            })
            // Lặp qua và tạo ra thẻ để hiển thị ra mà hình.
            dataArray = dataArray.map((data) => {
                return data = '<li>' + data + '</li>';
            })

            if (dataArray.length == 0) {
                hanghe.style.display = "block";
            }

            autobox.classList.add('active');
            showAdressWhere(dataArray);

            // Khi chọn thẻ li nào thì ô input sẽ nhận text của thẻ li đó
            let liItem = autobox.querySelectorAll("li");
            // Ẩn ghế đi
            for (let i = 0; i < liItem.length; i++) {
                liItem[i].addEventListener("click", function () {
                    inputSearch.value = liItem[i].innerHTML;
                    autobox.classList.remove('active');
                    hanghe.style.display = "block";
                })
            }

        } else {
            autobox.classList.remove('active');
        }
    }

    let recommend = [
        "An Giang",
        "Vũng Tàu",
        "Bắc Giang",
        "Bắc Kạn",
        "Bạc Liêu",
        "Bắc Ninh",
        "Bến Tre",
        "Bình Định",
        "Bình Dương",
        "Bình Phước",
        "Bình Thuận",
        "Cà Mau",
        "Cần Thơ",
        "Cao Bằng",
        "Đà Nẵng",
        "Đắk Lắk",
        "Đắk Nông",
        "Điện Biên",
        "Đồng Nai",
        "Đồng Tháp",
        "Gia Lai",
        "Hà Giang",
        "Hà Nam",
        "Hà Nội",
        "Hà Tĩnh",
        "Hải Dương",
        "Hải Phòng",
        "Hậu Giang",
        "Hòa Bình",
        "Hưng Yên",
        "Khánh Hòa",
        "Kiên Giang",
        "Kon Tum",
        "Lai Châu",
        "Lâm Đồng",
        "Lạng Sơn",
        "Lào Cai",
        "Long An",
        "Nam Định",
        "Nghệ An",
        "Ninh Bình",
        "Ninh Thuận",
        "Phú Thọ",
        "Phú Yên",
        "Quảng Bình",
        "Quảng Nam",
        "Quảng Ngãi",
        "Quảng Ninh",
        "Quảng Trị",
        "Sóc Trăng",
        "Sơn La",
        "Tây Ninh",
        "Thái Bình",
        "Thái Nguyên",
        "Thanh Hóa",
        "Thừa Thiên Huế",
        "Tiền Giang",
        "TP Hồ Chí Minh",
        "Trà Vinh",
        "Tuyên Quang",
        "Vĩnh Long",
        "Vĩnh Phúc",
        "Yên Bái"
    ];
}

// Hiển thị list phù hợp với keyword của người dùng
function showAdressWhere(list) {
    let autobox = document.querySelector('.autobox-where');
    let inputSearch = document.querySelector('.input-search-where');
    let listData;
    if (!list.length) {
        listData = '<li>' + inputSearch.value + '</li>'
    } else {
        listData = list.join('');
    }
    autobox.innerHTML = listData;
}

searchFlightWhere();


// Lấy số người
function numberPeople() {
    let addNguoilon = document.querySelector('.nguoilonPlus');
    let minusNguoilon = document.querySelector('.nguoilonMinus');
    let nguoilonValue = document.querySelector('.nguoilon span');

    let inputNumber = document.querySelector('.number-people');
    let numberBox = document.querySelector('.number-box');

    let numberClose = document.querySelector('.number-close');
    let hangghe = document.querySelector('.chair');

    inputNumber.addEventListener("click", function () {
        numberBox.classList.add('active');
        hangghe.style.display = "none";
    })


    numberClose.addEventListener("click", function () {
        numberBox.classList.remove('active');
        hangghe.style.display = "block";
    })

    let i = 0;

    // Bắt sự kiện số lượng người lớn.
    addNguoilon.addEventListener("click", function () {
        i++;
        nguoilonValue.innerHTML = i;
        sumOfPeople(i, j, k);
    })

    minusNguoilon.addEventListener("click", function () {
        if (i <= 0) {
            i = 0;
        } else {
            i--;
        }
        nguoilonValue.innerHTML = i;
        sumOfPeople(i, j, k);
    })

    // Bắt sự kiện số lượng trẻ em.
    let addTreem = document.querySelector('.treemPlus');
    let minusTreem = document.querySelector('.treemMinus');
    let treemValue = document.querySelector('.treem span');

    let j = 0;

    addTreem.addEventListener("click", function () {
        j++;
        treemValue.innerHTML = j;
        sumOfPeople(i, j, k);
    })

    minusTreem.addEventListener("click", function () {
        if (j <= 0) {
            j = 0;
        } else {
            j--;
        }
        treemValue.innerHTML = j;
        sumOfPeople(i, j, k);
    })

    // Bắt sự kiện số lượng trẻ sơ sinh.
    let addTresosinh = document.querySelector('.tresosinhPlus');
    let minusTresosinh = document.querySelector('.tresosinhMinus');
    let tresosinhValue = document.querySelector('.tresosinh span');

    let k = 0;

    addTresosinh.addEventListener("click", function () {
        k++;
        tresosinhValue.innerHTML = k;
        sumOfPeople(i, j, k);
    })

    minusTresosinh.addEventListener("click", function () {
        if (k <= 0) {
            k = 0;
        } else {
            k--;
        }
        tresosinhValue.innerHTML = k;
        sumOfPeople(i, j, k);
    })
}

function sumOfPeople(i, j, k) {
    let inputNumber = document.querySelector('.number-people');

    total = i + j + k;
    inputNumber.value = total + " người";
}

numberPeople();

// Chọn ngày
flatpickr("#ngaydi", {
    dateFormat: "Y-m-d",
});

flatpickr("#ngayve", {
    dateFormat: "Y-m-d",
});

// Xử lý trường hợp khách hàng chọn vé khứ hồi.
function aRoundTripTicket() {
    let khuhoi = document.querySelector('.khuhoi');
    let motchieu = document.querySelector('.motchieu');
    let ngayve = document.querySelector('.around-ticket');
    let ngayve1 = document.getElementById("ngayve");

    let bangchuyenbaydi = document.getElementById("chuyenbaydi");
    let bangchuyenbayve = document.getElementById("chuyenbayve");

    if (!khuhoi.checked) {
        ngayve.style.display = "none";
    }

    khuhoi.addEventListener("click", function () {
        if (this.checked) {
            // Trường hợp khách hàng chọn vé khứ hồi
            ngayve.style.display = "block";
            bangchuyenbayve.style.display = "block";
        }
        // else {
        //     // Trường hợp khách hàng không chọn vé khứ hồi
        //     ngayve.style.display = "none";
        //     // window.onclick("xoangayve");
        //     // ngayve1.innerText = "";
        //
        // }
    })

    motchieu.addEventListener("click", function () {

        if (this.checked) {
            //     // Trường hợp khách hàng chọn vé một chiều.
            ngayve1.value = "";
            ngayve.style.display = "none";
            bangchuyenbayve.style.display = "none";
        }
    })


}

aRoundTripTicket();

// Xử lý thẻ input hạng ghế.
function checkChair() {
    let autoboxChair = document.querySelector('.autobox-chair');
    let liItem = autoboxChair.querySelectorAll("li");
    let inputChair = document.querySelector('.input-chair');

    inputChair.addEventListener("click", function () {
        autoboxChair.classList.add('active');

        for (let i = 0; i < liItem.length; i++) {
            liItem[i].addEventListener("click", function () {
                inputChair.value = liItem[i].innerHTML;
                autoboxChair.classList.remove('active');
            })
        }
    })
}

checkChair();

// Xử lý loại vé
function checkTicket() {
    let oneway = document.querySelector('.oneway');
    let ngayve = document.querySelector('.around-ticket');

    oneway.addEventListener("click", function () {
        if (this.checked) {
            ngayve.style.display = "none";
        }
    })
}

checkTicket();

function timKiem() {

    let noiDi = document.getElementById("noidi").value;
    let noiDen = document.getElementById("noiden").value;
    let ngaydi = document.getElementById("ngaydi").value;
    let ngayve = document.getElementById("ngayve").value;
    callAjax(noiDi, noiDen, ngaydi, "table-body-di");

    if (ngayve !== "") {
        callAjax(noiDi, noiDen, ngaydi, "table-body-ve");
    } else {
        let table = document.getElementById("table-body-ve");
        table.innerHTML = "";
    }
}

function callAjax(noiDi, noiDen, ngayBay, tableID) {
    $.ajax({
        url: "http://localhost:8080/api/timthongtinchuyenbay.php", //URL gọi đến API PHP
        method: "POST", //Gọi bằng method GET
        data: {
            "NOIDI": noiDi,
            "NOIDEN": noiDen,
            "NGAYBAY": ngayBay,
        },
        dataType: "json",
        //Nếu gọi API thành công
        success: function (data) {
            // let mydata = JSON.parse(data);
            let a = data["data"];

            let danhSachChuyenBay = data["data"]; //Lấy thông tin của key data
            //Lấy element có ID là table-body -> để thêm dữ liệu vào table này
            let table = document.getElementById(tableID);
            table.innerHTML = "";

            danhSachChuyenBay.forEach(function (value, index, array) {
                //mỗi chuyến bay là value `MACHUYENBAY`, `NGAYBAY`, `HANGCHUYENBAY`, `NOIDI`, `NOIDEN`, `GIOKHOIHANH`, `GIOHACANH`, `QUANGDUONG`, `GIATIEN`
                //Tạo một table row
                let tr = document.createElement("tr");
                //Với mỗi thuộc tính của chuyến bay -> thêm tạo 1 thẻ td -> thêm vào tr
                for (let key in value) {
                    let td = document.createElement("td");
                    //gán giá trị từ value của key với key là tên thuộc tính của chuyenbay
                    td.innerHTML = value[key];
                    //thêm td này vào thẻ tr
                    tr.appendChild(td);
                }
                //thêm tr đã được thêm các td vào table
                table.appendChild(tr);


            })
        },
        //Nếu gọi API thất bại
        error: function (xhr, status, message) {
            window.alert(message);
        }
    });
}

// timKiem();

// Hàm gọi Ajax để lấy thông tin chuyến bay.
function getFlightDetail() {
    $.ajax({
        url: "http://localhost:8080/api/getchuyenbay.php", //URL gọi đến API PHP
        method: "GET", //Gọi bằng method GET
        //Nếu gọi API thành công
        success: function (data) {
            let mydata = JSON.parse(data); // chuyển đổi JSON thành đối tượng javaScript.
            let danhSachChuyenBay = mydata["data"]; //Lấy thông tin của key data
            //Lấy element có ID là table-body -> để thêm dữ liệu vào table này
            let table = document.getElementById("table-body");
            table.innerHTML = "";

            danhSachChuyenBay.forEach(function (value, index, array) {
                //mỗi chuyến bay là value `MACHUYENBAY`, `NGAYBAY`, `HANGCHUYENBAY`, `NOIDI`, `NOIDEN`, `GIOKHOIHANH`, `GIOHACANH`, `QUANGDUONG`, `GIATIEN`
                //Tạo một table row
                let tr = document.createElement("tr");
                //Với mỗi thuộc tính của chuyến bay -> thêm tạo 1 thẻ td -> thêm vào tr
                for (let key in value) {
                    let td = document.createElement("td");
                    //gán giá trị từ value của key với key là tên thuộc tính của chuyenbay
                    td.innerHTML = value[key];
                    //thêm td này vào thẻ tr
                    tr.appendChild(td);
                }
                let td1 = document.createElement("td");
                let button_edit = document.createElement("button");
                button_edit.addEventListener("click", openForm);
                button_edit.className += "ri-edit-line edit";
                td1.appendChild(button_edit);


                let td2 = document.createElement("td");
                let button_delete = document.createElement("button");
                // button_delete.addEventListener("click", openForm);
                button_delete.className += "ri-delete-bin-line delete";
                td2.appendChild(button_delete);

                tr.appendChild(td1);
                tr.appendChild(td2);
                //thêm tr đã được thêm các td vào table
                table.appendChild(tr);
            })
        },
        //Nếu gọi API thất bại
        error: function (xhr, status, message) {
            window.alert(message)
        }
    });
}

