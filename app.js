let user = null;
let points = 0;

function showRegister(){
hideAll();
document.getElementById("register").classList.remove("hidden");
}

function showLogin(){
hideAll();
document.getElementById("login").classList.remove("hidden");
}

function back(){
hideAll();
document.getElementById("welcome").classList.remove("hidden");
}

function hideAll(){
document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
}

function register(){
let phone = document.getElementById("regPhone").value;
let pass = document.getElementById("regPass").value;

if(!phone || !pass){
alert("Completa los campos");
return;
}

localStorage.setItem(phone, pass);
alert("Cuenta creada");
back();
}

function login(){
let phone = document.getElementById("logPhone").value;
let pass = document.getElementById("logPass").value;

let saved = localStorage.getItem(phone);

if(saved === pass){
user = phone;
startApp();
}else{
alert("Datos incorrectos");
}
}

function startApp(){
hideAll();
document.getElementById("app").classList.remove("hidden");
document.getElementById("userInfo").innerText = "Usuario: " + user;
}

function earnPoints(p){
points += p;
document.getElementById("points").innerText = points;
}
