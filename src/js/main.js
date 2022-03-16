const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
menuToggle.onclick  =  function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

AOS.init();

$('.sl').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});