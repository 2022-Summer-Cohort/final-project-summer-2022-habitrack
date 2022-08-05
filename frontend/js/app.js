import header from "./header.js";
import logEntry from "./logEntry.js";
import newHabit from "./newHabit.js";
import login from "./login.js";

const container = document.querySelector(".container");

function makeLoginView(){
  container.innerHTML = header();
  container.innerHTML += login();
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

})
const createButton = document.querySelector("#create-btn") 
createButton.addEventListener("click", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const password = document.querySelector("#create-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    const newUser = document.querySelector("#signupUsername").value;
    
if(newUser == ""){
    alert("Please type in username")

} else if (newUser.length < 10) {
    alert("Username must be atleast 10 charecters long")

} if (newUser.length >= 10){

if (password == ""){
        alert("Field cannot be empty.")
    } else if (password != confirmPassword){
        alert("Password did not match try again.")
    } else if (password == confirmPassword){
        alert("Account created")
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
    }


}})
const loginButton = document.querySelector("#login-button")
loginButton.addEventListener("click", () => {
    const username = document.querySelector("#login-username").value;
    const userPassword = document.querySelector("#login-password").value;

    if(username == ""){
        alert("Please type in username")
    } else if (userPassword == ""){
            alert("Please type in Password")
        }
    else{
       alert("Welcome back")
    }
   
})
}

  makeLoginView();
  const button = document.querySelector(".dropbtn");
button.addEventListener("click", ()=>{myFunction()});




     
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }