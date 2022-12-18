<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"> -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
	<link rel="stylesheet" type="text/css" href="https://npmcdn.com/flatpickr/dist/themes/material_orange.css">
	<link rel="stylesheet" href="/style.css"> <!-- Sử dụng link tuyệt đối tính từ root, vì vậy có dấu / đầu tiên -->
	<link rel="shortcut icon" type="image/png" href="/images/tabnice1.jpg" />
	<title>Home Page</title>
</head>

<body>
	<!-- Header -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark pb-0 sticky-top">
		<a class="navbar-brand size-text fw-bold hover-text" href="#">Risa</a>
		<a class="sup hover-text" href="#">air</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse fst-italic fw-bold" id="navbarSupportedContent">
			<div class="container d-flex justify-content-center">
				<ul class="navbar-nav color-nav ms-5">
					<li class="nav-item">
						<a class="nav-link active hover-text" aria-current="page" href="#" style="color: #00b4d8">Trang chủ</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle color-text hover-text" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Danh mục
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item color-text hover-text" href="#">Action</a></li>
							<li><a class="dropdown-item color-text hover-text" href="#">Another action</a></li>
							<li><a class="dropdown-item color-text hover-text" href="#">Something else here</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link color-text hover-text" href="#">Chuyến bay</a>
					</li>
					<li class="nav-item">
						<a class="nav-link color-text hover-text" href="#">Săn vé</a>
					</li>
					<li class="nav-item">
						<a class="nav-link color-text hover-text" href="#">Khuyến mãi</a>
					</li>
					<li class="nav-item">
						<a class="nav-link color-text hover-text" href="#">Về chúng tôi</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="d-flex justify-content-center">
			<form class="d-none d-md-flex" role="search">
				<input class="form-control me-2 rounded-pill border-input" type="search" placeholder="Tìm kiếm" aria-label="Search">
				<button class="btn btn-outline-dark login-and-search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b4d8" class="bi bi-search" viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</svg></button>
			</form>
			<form class="ms-2 d-none d-md-flex" role="search">
				<button class="btn btn-outline-dark login-and-search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b4d8" class="bi bi-person-circle" viewBox="0 0 16 16">
						<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
						<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
					</svg></button>
				<ul class="navbar-nav color-nav">
					<li class="nav-item">
						<a class="nav-link active fw-bold hover-text" aria-current="page" href="#" style="color: #00b4d8">Đăng nhập</a>
					</li>
				</ul>
			</form>
		</div>
	</nav>
	<!-- Main -->
	<div class="container-fluid mt-0">
		<div class="row pt-0">
			<div class="col-12 p-0">
				<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner" role="listbox">
						<div class="carousel-item active">
							<img class="d-block img-fluid" src="images/quangcao3.jpg" alt="First slide" width="100%" height="100%">
						</div>
						<div class="carousel-item">
							<img class="d-block img-fluid" src="images/quangcao2.jpg" alt="Second slide" width="100%" height="100%">
						</div>
						<div class="carousel-item">
							<img class="d-block img-fluid" src="images/quangcao1.jpg" alt="Third slide" width="100%" height="100%">
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
		<div class="row mt-3 d-flex justify-content-between">
			<div class="col-12">
				<!-- Row 1 -->
				<div class="row">
					<div class="offset-2 col-6">
						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<input name="loaive" class="oneway" type="radio" aria-label="Checkbox for following text input" id="one-way">
								<label for="one-way" class="p-0 mb-0 ml-2 font-weight-bold">Một chiều</label>
								<input name="loaive" class="ml-3 khuhoi" type="radio" aria-label="Checkbox for following text input" id="round-trip">
								<label for="round-trip" class="p-0 mb-0 ml-2 font-weight-bold">Khứ hồi</label>
							</div>
						</div>
					</div>
				</div>
				<!-- Row 2 -->
				<div class="row d-flex justify-content-center">
					<div class="col-2">
						<section class="search">
							<div class="wrapper d-flex">
								<div class="search-content-items row">
									<div class="search-content-item">
										<i class="fa-sharp fa-solid fa-plane-departure"></i>
										<input class="input-search" type="text" placeholder="Bạn đang ở đâu?">
										<div class="autobox">
											<li>Hà Nội</li>
											<li>Hải Phòng</li>
											<li>Đà Nẵng</li>
											<li>Nghệ An</li>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div class="col-2">
						<section class="search">
							<div class="wrapper d-flex">
								<div class="search-content-items row">
									<div class="search-content-item">
										<i class="fa-solid fa-plane-arrival"></i>
										<input class="input-search-where" type="text" placeholder="Bạn muốn đi đâu?">
										<div class="autobox-where">
											<li>Hà Nội</li>
											<li>Hải Phòng</li>
											<li>Đà Nẵng</li>
											<li>Nghệ An</li>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div class="col-2">
						<section class="search">
							<div class="wrapper d-flex">
								<div class="search-content-items row">
									<div class="search-content-item">
										<i class="fas fa-user-check"></i>
										<input class="number-people" type="text" placeholder="Số lượng hành khách">
										<div class="number-box">
											<li>
												<div class="number-left">
													<p>Người lớn</p>
												</div>
												<div class="number-right nguoilon">
													<i class="fas fa-minus nguoilonMinus"></i>
													<span>0</span>
													<i class="fas fa-plus nguoilonPlus"></i>
												</div>
											</li>
											<li>
												<div class="number-left">
													<p>Trẻ em</p>
												</div>
												<div class="number-right treem">
													<i class="fas fa-minus treemMinus"></i>
													<span>0</span>
													<i class="fas fa-plus treemPlus"></i>
												</div>
											</li>
											<li>
												<div class="number-left">
													<p>Trẻ sơ sinh</p>
												</div>
												<div class="number-right tresosinh">
													<i class="fas fa-minus tresosinhMinus"></i>
													<span>0</span>
													<i class="fas fa-plus tresosinhPlus"></i>
												</div>
											</li>
											<i class="fas fa-times number-close"></i>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div class="col-2">
						<section class="search">
							<div class="wrapper d-flex">
								<div class="search-content-items row">
									<div class="search-content-item">
										<i class="fa-solid fa-calendar-days"></i>
										<input id="myID" type="text" placeholder="Ngày đi">
									</div>
								</div>
							</div>
						</section>
					</div>
					<div class="col-2 around-ticket">
						<section class="search">
							<div class="wrapper d-flex">
								<div class="search-content-items row">
									<div class="search-content-item">
										<i class="fa-solid fa-calendar-days"></i>
										<input id="myID" type="text" placeholder="Ngày về">
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<!-- Row 3 -->
				<div class="row mt-5 d-flex justify-content-center">
					<!-- <div class="col-2">
						<section class="search">
							<div class="wrapper d-flex">
								<div class="search-content-items row">
									<div class="search-content-item">
										<i class="fa-solid fa-calendar-days"></i>
										<input type="text" placeholder="Ngày đi">
									</div>
								</div>
							</div>
						</section>
					</div> -->
					<div class="col-2 chair">
						<section class="search">
							<div class="wrapper d-flex">
								<div class="search-content-items row">
									<div class="search-content-item">
										<i class="fa-solid fa-couch"></i>
										<input class="input-chair" type="text" placeholder="Hạng ghế">
										<div class="autobox-chair">
											<li>Phổ thông</li>
											<li>Thương gia</li>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<!-- Row 4 -->
			</div>
			<div class="container-fluid">
				<div class="row mt-3">
					<div class="offset-8 col-4">
						<button class="btn btn-primary px-5 py-2 ml-4 mt-3">Tìm kiếm</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->

	<div class="container-fluid mt-5">
		<div class="row">
			<div class="col-12 bg-dark text-white">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod maxime culpa itaque mollitia, amet quaerat rerum sint eos. Eaque beatae debitis assumenda soluta commodi accusantium provident modi architecto ex. Doloribus?
				Asperiores mollitia dolore et nulla ratione velit repellendus maxime praesentium excepturi saepe sit, exercitationem odio dolores tempora quasi alias porro doloribus, sunt eligendi? Soluta similique dolores commodi voluptates sit nesciunt.
				Ullam, at sint temporibus omnis ab quas repudiandae a possimus sed aspernatur amet rerum fugiat nisi odit necessitatibus nesciunt. Assumenda quo quos quia dolores laborum animi nemo tempora, rerum quod.
				Fuga voluptatum aliquam rem praesentium neque placeat cupiditate dignissimos architecto rerum deserunt qui, repudiandae distinctio quod animi. Eligendi enim et cumque facilis pariatur expedita sapiente! Possimus quisquam obcaecati amet voluptatibus.
				Hello
			</div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
	<script src="/main.js"></script> <!-- Sử dụng link tuyệt đối tính từ root, vì vậy có dấu / đầu tiên -->
</body>

</html>