function validation () {
  var form = document.getElementById("form")
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
if (email.match(pattern)){
  form.classList.add("valid");
  form.classList.remove("invalid");
  text.innerHTML = "";
  text.style.color = "#ffa00a";
}
else{
  form.classList.remove("valid");
  form.classList.add("invalid");
  text.innerHTML = "Please enter a valid email address";
  text.style.color = "#ffa00a";
}
if (email == ""){
  form.classList.remove("valid");
  form.classList.remove("invalid");
  text.innerHTML = "Email is required";
  text.style.color = "#ffa00a";

}
}



function toggle1(){
  var x = document.getElementById('ans1');
  var y = document.getElementById('rot1');
  y.classList.toggle('rotate');
  x.classList.toggle('closed');
}

function toggle2(){
var x = document.getElementById('ans2');
  var y = document.getElementById('rot2');
  y.classList.toggle('rotate');
  x.classList.toggle('closed');
}

function toggle3(){
  var x = document.getElementById('ans3');
  var y = document.getElementById('rot3');
  y.classList.toggle('rotate');
  x.classList.toggle('closed');
}

function toggle4(){
  var x = document.getElementById('ans4');
  var y = document.getElementById('rot4');
  y.classList.toggle('rotate');
  x.classList.toggle('closed');
}

function toggle5(){
  var x = document.getElementById('ans5');
  var y = document.getElementById('rot5');
  y.classList.toggle('rotate');
  x.classList.toggle('closed');
}

function toggle6(){
  var x = document.getElementById('ans6');
  var y = document.getElementById('rot6');
  y.classList.toggle('rotate');
  x.classList.toggle('closed');
}