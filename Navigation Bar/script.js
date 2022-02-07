const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function ( ) {
    nav.classList.toggle('slide');
});

function change(color) {
   document.getElementById('Logo').style.color=color 
}

function displaySty(displayStyle, clr) {
   document.getElementById("background").style.display=displayStyle
   document.getElementsByName("body")[0].style.backgroundColor=clr
   console.log(clr)
}
