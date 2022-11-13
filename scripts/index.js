
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// window.onscroll = function () { scrollFunction() };
// if (window.innerWidth < 1001) {
//     document.getElementById("navbar").style.background = "white";
//     document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;";
//     document.getElementById("slider").style.paddingTop = "68px";
// } else {
//     document.getElementById("slider").style.paddingTop = "0px";
// }

// function scrollFunction() {
//     console.log(window)
// if (window.innerWidth > 1000) {
//     document.getElementById("slider").style.paddingTop = "0px";
//     if ((document.body.scrollTop > (window.innerWidth / 2) - 90 || document.documentElement.scrollTop > (window.innerWidth / 2) - 90)) {
//         document.getElementById("navbar").style.background = "white";
//         document.getElementById("navbar").style.boxShadow = "box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;";
//     } else {
//         document.getElementById("navbar").style.background = "transparent";
//         document.getElementById("navbar").style.boxShadow = "none";
//     }
// } else {
//     document.getElementById("navbar").style.background = "white";
//     document.getElementById("navbar").style.boxShadow = "box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;";
//     document.getElementById("slider").style.paddingTop = "68px";
// }
// }


