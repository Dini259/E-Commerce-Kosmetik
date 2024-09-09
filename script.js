var swiper = new Swiper(".mySwiper",{
    loop: true,
    centeredSlide: true,
    autoplay:{
        delay: 2000,
        disabledonINteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView:4,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    
    },
});        



let burgerMenu = document.querySelector(".burgerMenu");
let sidebar = document.querySelector(".sidebar");

burgerMenu.addEventListener('click',function(){
    sidebar.classList.toggle('active');
})
