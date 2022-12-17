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
				return data = '<li>'+ data +'</li>';
			})
			autobox.classList.add('active');
			showAdress(dataArray);
			// Khi chọn thẻ li nào thì ô input sẽ nhận text của thẻ li đó
			let liItem = autobox.querySelectorAll("li");
			for (let i = 0; i < liItem.length; i++) {
				liItem[i].addEventListener("click", function() {
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
		listData = '<li>'+ inputSearch.value +'</li>'
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
				return data = '<li>'+ data +'</li>';
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
				liItem[i].addEventListener("click", function() {
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
		listData = '<li>'+ inputSearch.value +'</li>'
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

	inputNumber.addEventListener("click", function() {
		numberBox.classList.add('active');
		hangghe.style.display = "none";
	})


	numberClose.addEventListener("click", function() {
		numberBox.classList.remove('active');
		hangghe.style.display = "block";
	})

	let i = 0;

	// Bắt sự kiện số lượng người lớn.
	addNguoilon.addEventListener("click", function() {
		i++;
		nguoilonValue.innerHTML = i;
		sumOfPeople(i, j, k);
	})

	minusNguoilon.addEventListener("click", function() {
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

	addTreem.addEventListener("click", function() {
		j++;
		treemValue.innerHTML = j;
		sumOfPeople(i, j, k);
	})

	minusTreem.addEventListener("click", function() {
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

	addTresosinh.addEventListener("click", function() {
		k++;
		tresosinhValue.innerHTML = k;
		sumOfPeople(i, j, k);
	})

	minusTresosinh.addEventListener("click", function() {
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
flatpickr("#myID", {
	dateFormat: "d-m-Y",
});

// Xử lý trường hợp khách hàng chọn vé khứ hồi.
function aRoundTripTicket() {
	let khuhoi = document.querySelector('.khuhoi');
	let ngayve = document.querySelector('.around-ticket');

	if (!khuhoi.checked) {
		ngayve.style.display = "none";
	}

	khuhoi.addEventListener("click", function() {
		if (this.checked) {
			// Trường hợp khách hàng chọn vé khứ hồi
			ngayve.style.display = "block";
		} else {
			// Trường hợp khách hàng không chọn vé khứ hồi
			ngayve.style.display = "none";
		}
	})
}
aRoundTripTicket();

// Xử lý thẻ input hạng ghế.
function checkChair() {
	let autoboxChair = document.querySelector('.autobox-chair');
	let liItem = autoboxChair.querySelectorAll("li");
	let inputChair = document.querySelector('.input-chair');

	inputChair.addEventListener("click", function() {
		autoboxChair.classList.add('active');

		for (let i = 0; i < liItem.length; i++) {
			liItem[i].addEventListener("click", function() {
				inputChair.value = liItem[i].innerHTML;
				autoboxChair.classList.remove('active');
			})
		}
	})
}

checkChair();