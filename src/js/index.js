$(document).ready(() => {
    console.log('jQuery initialized');

    const menuBtn = document.querySelector(".menu-btn");
    const menuItems = document.querySelector(".menu-items");
    const expandBtn = document.querySelectorAll(".expand-btn");

    // humburger toggle
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");
        menuItems.classList.toggle("open");
    });

    // mobile menu expand
    expandBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("open");
            if (btn.children[0].classList[1] === 'bi-plus-lg') {
                btn.children[0].classList.replace('bi-plus-lg', 'bi-dash-lg');
            } else {
                btn.children[0].classList.replace('bi-dash-lg', 'bi-plus-lg');
            }
        });
    });

    if (window.innerWidth < 992) {
        console.log($('.bi-chevron-right'));
        $('.bi-chevron-right').addClass('bi-plus-lg');
        $('.bi-chevron-right').removeClass('bi-chevron-right')
    } else {
        $('.bi-chevron-right').removeClass('bi-plus-lg');
        $('.bi-chevron-right').addClass('bi-chevron-right')
    }

    window.addEventListener('resize', () => {

        if (window.innerWidth < 992) {
            console.log($('.bi-chevron-right'));
            $('.bi-chevron-right').addClass('bi-plus-lg');
            $('.bi-chevron-right').removeClass('bi-chevron-right')
        } else {
            $('.bi-plus-lg').addClass('bi-chevron-right')
            $('.bi-plus-lg').removeClass('bi-plus-lg');
        }
    })

});

