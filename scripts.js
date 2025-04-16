
let navMenu = document.getElementById('navMenu')
let toggleBtn = document.getElementById('toggleBtn')
function myMenuFunction(){
    if(navMenu.className === 'nav-menu'){
        navMenu.className += ' responsive'
        toggleBtn.className = 'uil uil-multiply'
    }else{
        navMenu.className = 'nav-menu'
        toggleBtn.className = 'uil uil-bars'
    }
}
function closeMenu(){
    navMenu.className = 'nav-menu'
}

let navLink = document.querySelectorAll('.nav-link');

function hideNav(){
    navMenu.className = 'nav-menu';
    toggleBtn.className = 'uil uil-bars'
}

navLink.forEach(link => {
    link.addEventListener('click',hideNav)
})
window.addEventListener('scroll',headerShadow);
window.onload = headerShadow();
function headerShadow(){
    const navHeader = document.getElementById('header');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = '0 4px 10px #000000BB';
        navHeader.style.height = '70px';
        navHeader.style.lineHeight = '70px';
        navHeader.style.background = '#00000078'
        navHeader.style.backdropFilter = 'blur(8px)'
    }else{
        navHeader.style.boxShadow = 'none';
        navHeader.style.height = '90px';
        navHeader.style.lineHeight = '90px';
        navHeader.style.background = '#000000'
        navHeader.style.backdropFilter = 'blur(0px)'
    }
}
const sr = ScrollReveal({
    origin: 'top',
    distance:'75px',
    duration: 1650,
    reset: false
})
sr.reveal('.featured-name',{delay: 50})
sr.reveal('.featured-text-info',{delay: 50})
sr.reveal('.featured-text-btn',{delay: 60})
sr.reveal('.social-icons',{delay: 90})

sr.reveal('.project-box',{delay:70})
sr.reveal('.service-box',{delay:70})

sr.reveal('top-header',{})