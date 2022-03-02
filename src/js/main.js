// const menuToggle = document.querySelector('.menuToggle');
const menuToggle = document.getElementById('menuToggle');
// const navigation = document.querySelector('.navigation');
const navigation = document.getElementById('navigation');
menuToggle.onclick  =  function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}