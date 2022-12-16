let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')
let mainContent = document.querySelector('.main--content')

menu.onclick = function () {
	sidebar.classList.toggle('active')
	mainContent.classList.toggle('active')
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