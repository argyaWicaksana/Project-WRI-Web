function comment() {
   let user_name = document.getElementById('userName').value
   let user_comment = document.getElementById('userComment').value
   document.getElementById('commentSection').innerHTML+=`<div class="commentContainer">
   <img src="../login/user.png" alt="">
   <div class="userContainer">
      <h3>${user_name}</h3>
      <p>${user_comment}</p>
    </div>
    </div>`
}

