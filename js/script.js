document.addEventListener('DOMContentLoaded', function() {
    
    // --- FUNGSI UNTUK MENU HAMBURGER ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- FUNGSI UNTUK NAVIGASI AKTIF SAAT SCROLL ---
    const sections = document.querySelectorAll('main section');
    const navLi = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', ()=> {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 70) { // Offset disesuaikan dengan tinggi header
                current = section.getAttribute('id');
            }
        });

        navLi.forEach( a => {
            a.classList.remove('active');
            // Cek untuk dropdown juga
            if (a.getAttribute('href') === '#' + current || (a.classList.contains('dropbtn') && current === 'kontak')) {
                a.classList.add('active');
            }
        });
    });

    // --- FUNGSI UNTUK ANIMASI SAAT SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Elemen dianggap terlihat saat 10% masuk layar
    });

    // Pilih semua elemen yang ingin dianimasikan
    const elementsToAnimate = document.querySelectorAll('.fade-in-element');
    // Mulai amati setiap elemen
    elementsToAnimate.forEach((el) => observer.observe(el));

});
