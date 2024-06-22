let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let submitForm = document.getElementById("submit");
let userEmail = document.getElementById("input-email");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            // Find the active link using elementFromPoint
            let activeLink = document.elementFromPoint(window.innerWidth / 2, top + 150); // Adjust y-offset based on your needs
            if (activeLink && activeLink.nodeName === 'A' && activeLink.closest('header nav')) {
                navLinks.forEach(links => links.classList.remove('active'));
                activeLink.classList.add('active');
            }
        }
    });
};

// Menu-icon
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};






