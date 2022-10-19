const mainNav = document.querySelector('#main-nav');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close_menu-btn');
const openBtn = document.getElementById('open_menu-btn');
const scrollTop = document.getElementById('scroll-top');
const navLink = document.getElementsByClassName('nav_link');

// set bg for navbar when scroll
window.onscroll = () => {
    scrollFunction();
};
window.onload = () => {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mainNav.classList.add('navbar-active');
        scrollTop.style.bottom = '40px';
    } else {
        mainNav.classList.remove('navbar-active');
        scrollTop.style.bottom = '-160px';
    }
}

//Set active for nav link
function onActiveNavLink(e) {
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].className = navLink[i].className.replace(' active', '');
    }
    if (e) {
        e.currentTarget.className += ' active';
    }
}

//hide menu mobile
function linkAction() {
    if (window.innerWidth <= 870) {
        navbar.style.right = '-500px';
        openBtn.style.display = 'block';
        closeBtn.style.right = '-500px';
    }
}

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', linkAction);
}

//tabs for portfolio

function openTab(e, tabId) {
    var tabContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].setAttribute('style', 'display: none');
    }
    tabContent[tabId - 1].style.display = 'flex';

    var tabLink = document.getElementsByClassName('tab-link');
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(' active', '');
    }
    e.currentTarget.className += ' active';
}

function openNavbar() {
    if (navbar.style.right === '0px') {
        navbar.style.right = '-500px';
        openBtn.style.display = 'block';
        closeBtn.style.right = '-500px';
    } else {
        navbar.style.right = 0;
        openBtn.style.display = 'none';
        closeBtn.style.right = '5%';
    }
}

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('div[id]:not(#navbar)');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        element = document.querySelector('.nav_link:has(a[href*=' + sectionId + '])');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

//slide show for case study
$('.slick-reponsive').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '.case_study-next-btn',
    prevArrow: '.case_study-prev-btn',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
