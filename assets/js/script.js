let btn = document.getElementById("btnIcon");
let modeIcon = document.getElementById("modeIcon")
const savedTheme = localStorage.getItem('theme');

// إعادة تعيين الوضع الليلي/النهاري بناءً على القيمة المحفوظة
if (savedTheme) {
    document.body.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
        modeIcon.src = "assets/img/sun.png";
    } else {
        modeIcon.src = "assets/img/moon.png";
    }
}
btn.onclick = function () {
    // قم بتبديل الوضع الليلي/النهاري
    document.body.classList.toggle("dark-theme");

    // حفظ الوضع في local storage بعد تغييره
    const currentTheme = document.body.classList.contains("dark-theme") ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', currentTheme);

    // تحديث الصورة بناءً على الوضع الحالي
    if (currentTheme === 'dark-theme') {
        modeIcon.src = "assets/img/sun.png";
    } else {
        modeIcon.src = "assets/img/moon.png";
    }
};
//-------------menu-navbar-------
let navbar = document.querySelector(".navbar");
document.getElementById("menu-btn").onclick = () =>{
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    navbar.classList.remove('active')
}
//-------animation typing---------
var typed = new Typed('.auto-typed', {
    strings: ["ETIKAL TRADING COMPANY" ,"شركة إتكال التجارية" ," EXPORT AND IMPORT" , "استيراد و تصدير"],
    typeSpeed: 130,
    backSpeed:130,
    loop:true
});
//---------owl-carousl-brands-------
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true, 
    autoplayTimeout: 1500,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        500:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


