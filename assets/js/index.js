const mainNav = document.querySelector('#main-nav');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close_menu-btn');
const openBtn = document.getElementById('open_menu-btn');
const layoutBlur = document.getElementById('layout-blur');
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
    } else {
        mainNav.classList.remove('navbar-active');
    }
}

function throttled(callback, delay = 0) {
    let lastRun = 0;
    return (...arg) => {
        const now = new Date().getTime();
        if (now - lastRun < delay) {
            return;
        }
        lastRun = now;
        callback(...arg);
    };
}

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
        layoutBlur.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        navbar.style.right = 0;
        openBtn.style.display = 'none';
        layoutBlur.style.display = 'block';
        closeBtn.style.display = 'block';
    }
}

$('.slick-reponsive').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1500,
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
