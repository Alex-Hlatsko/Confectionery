const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
menuToggle.onclick  =  function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
