const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function ( ) {
    nav.classList.toggle('slide');
});

function change(form) {
   // document.getElementById('username').innerHTML= "Email"
   // document.getElementsByName('plcholder')[0].placeholder= 'Enter Email'
   // document.getElementById('repeatPwd').style.display='block'
   // document.getElementById('login').innerHTML= "Sign Up"
   if (form) {
      document.getElementById('loginForm').style.display='none'
      document.getElementById('signUpForm').style.display='block'
   } else {
      document.getElementById('loginForm').style.display='block'
      document.getElementById('signUpForm').style.display='none'
   }
}

function displaySty(displayStyle, clr) {
   document.getElementById("background").style.display=displayStyle
   document.getElementsByName("body")[0].style.backgroundColor=clr
   console.log(clr)
}
