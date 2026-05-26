//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
const serviceMenu = document.querySelector("#navigation .dropdown");
const dropdownToggle = serviceMenu?.querySelector('.dropdown-toggle');
const navItems = document.querySelectorAll("#navigation #navbar-menu li:not(.dropdown)");

function setNavItemsDisplay(display) {
    navItems.forEach((item) => {
        item.style.display = display;
    });
}

function isMobileView() {
    return window.innerWidth < 770;
}

if (!navbarMenu || !hamburgerMenu || !serviceMenu || !dropdownToggle) {
    console.warn('Navigation script could not initialize because required nav elements are missing.');
} else {
    hamburgerMenu.addEventListener('click', function () {
        const isNavOpen = navbarMenu.classList.contains('open');
        if (!isNavOpen) {
            hamburgerMenu.setAttribute('aria-expanded', true);
            hamburgerMenu.classList.add('clicked');
            navbarMenu.classList.add('open');
        } else {
            hamburgerMenu.setAttribute('aria-expanded', false);
            hamburgerMenu.classList.remove('clicked');
            navbarMenu.classList.remove('open');
            serviceMenu.setAttribute('aria-expanded', false);
            serviceMenu.classList.remove('open');
            dropdownToggle.setAttribute('aria-expanded', false);
            if (isMobileView()) {
                setNavItemsDisplay('block');
            }
        }
    });

    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        const isServiceOpen = serviceMenu.classList.contains('open');
        if (!isServiceOpen) {
            serviceMenu.setAttribute('aria-expanded', true);
            serviceMenu.classList.add('open');
            dropdownToggle.setAttribute('aria-expanded', true);
            if (isMobileView()) {
                // Hide all other nav links when dropdown is open
                setNavItemsDisplay('none');
            }
        } else {
            serviceMenu.setAttribute('aria-expanded', false);
            serviceMenu.classList.remove('open');
            dropdownToggle.setAttribute('aria-expanded', false);
            if (isMobileView()) {
                // Reveal all links when dropdown closes
                setNavItemsDisplay('block');
            }
        }
    });
    // Close mobile nav when any nav link is clicked
    document.querySelectorAll('#navbar-menu a').forEach((link) => {
        link.addEventListener('click', () => {
            if (navbarMenu.classList.contains('open')) {
                navbarMenu.classList.remove('open');
                hamburgerMenu.classList.remove('clicked');
                hamburgerMenu.setAttribute('aria-expanded', false);
                serviceMenu.classList.remove('open');
                dropdownToggle.setAttribute('aria-expanded', false);
                if (isMobileView()) setNavItemsDisplay('block');
            }
        });
    });
}
