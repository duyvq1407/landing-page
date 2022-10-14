const mainNav = document.querySelector('#main-nav');

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
