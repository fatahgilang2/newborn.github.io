//toogle class active
const navbarNav = document.querySelector
('.navbar-nav');

//ketika paket menu di klik
document.querySelector ('#paket-menu').onclick = ()=> {
    navbarNav.classList.toggle('active');
}
//jika klik diluar sidebar untuk menghilangkan nav//
const paket=document.querySelector('#paket-menu');

document.addEventListener('click',function (e) {
    if (!paket.contains(e.target) && !navbarNav.contains (e.target)) {
        navbarNav.classList.remove('active');
    }
})