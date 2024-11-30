// Toggle class active untuk menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
	navbarNav.classList.toggle("active");
};

// untuk menampilkan search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
	searchForm.classList.toggle("active");
	searchBox.focus();
	e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
	if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
	if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
		searchForm.classList.remove("active");
	}
});

//float
const floatingBtn = document.getElementById("icon-button");
const icon = document.querySelector(".icon");
const heross = document.querySelector(".hero");
let isToggled = true;

floatingBtn.addEventListener("click", () => {
	if (!isToggled) {
		floatingBtn.style.backgroundColor = "var(--bg)";
		icon.style.color = "var(--fwhite)";
		heross.style.backgroundColor = "var(--fwhite)";
		heross.style.color = "var(--bg)";
	} else {
		floatingBtn.style.backgroundColor = "var(--fwhite)";
		icon.style.color = "var(--bg)";
		heross.style.backgroundColor = "var(--bg)";
		heross.style.color = "var(--fwhite)";
	}
	isToggled = !isToggled; // Ganti status
});

document.getElementById("toggleButton").addEventListener("click", function (e) {
	e.preventDefault(); // Mencegah reload halaman saat tombol diklik

	const button = e.target;
	if (button.textContent === "Follow") {
		button.textContent = "Unfollow"; // Mengubah teks tombol menjadi "Unfollow"
	} else {
		button.textContent = "Follow"; // Mengubah teks tombol kembali ke "Follow"
	}
});
