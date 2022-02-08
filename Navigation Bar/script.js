const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function ( ) {
    nav.classList.toggle('slide');
});

// login script
function change(form) {
   if (form) {
      document.getElementById('loginForm').style.display='none'
      document.getElementById('signUpForm').style.display='block'
   } else {
      document.getElementById('loginForm').style.display='block'
      document.getElementById('signUpForm').style.display='none'
   }
}

function displaySty(displayStyle) {
   document.getElementById("background").style.display=displayStyle
}
