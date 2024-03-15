// shop section

var shopBtn = document.getElementById("shop-btn");
var shopForm = document.getElementById("shop");
var closeBtn = document.getElementById("close-btn");

shopBtn.onclick = () =>{
     shopForm.classList.add("active");
}

closeBtn.onclick = () => {
     shopForm.classList.remove("active");
}

// user profile section

var userBtn = document.getElementById("user-btn");
var profile = document.getElementById("profile");

userBtn.onclick = () => {
     profile.classList.toggle("active");
}

// search box section

var searchBtn = document.getElementById("search-btn");
var search = document.getElementById("search");

searchBtn.onclick = () => {
     search.classList.toggle("active");
}

// responsive menu section

var menuBtn = document.getElementById("menu-btn");
var closeBtn2 = document.getElementById("close-btn-2");
var navbar = document.getElementById("navbar");

menuBtn.onclick = () => {
     navbar.classList.add("active");
}

closeBtn2.onclick = () => {
     navbar.classList.remove("active");
}

// window on scroll

window.onscroll = () => {
     profile.classList.remove("active");
}