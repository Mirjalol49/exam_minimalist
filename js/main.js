const navbarOpenBtn = document.querySelector(".js-btn-navbar");
const navbar = document.querySelector(".sitenav");

navbarOpenBtn.addEventListener("click", function() {
    navbar.classList.toggle("sitenav-open");
    navbarOpenBtn.classList.toggle("site-header__btn-close");
});