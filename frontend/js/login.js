// export default function login(){
//     return `
//  <div class="form" id="login">
//         <h1 class="form__title">Login</h1>
//         <div class="form__message form__message--error"></div>
//         <div class="form__input-group">
//             <input type="text" class="form__input" id="login-username" autofocus placeholder="Username">
//             <div class="form__input-error-message"></div>
//         </div>
//         <div class="form__input-group">
//             <input type="password" id="login-password" class="form__input" autofocus placeholder="Password">
//             <div class="form__input-error-message"></div>
//         </div>
//         <button class="form__button" id="login-button">Continue</button>
//         <p class="form__text">
//             <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
//         </p>
//     </div>
//     <div class="form form--hidden" id="createAccount">
//         <h1 class="form__title">Create Account</h1>
//         <div class="form__message form__message--error"></div>
//         <div class="form__input-group">
//             <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username">
//             <div class="form__input-error-message"></div>
//         </div>
//         <div class="form__input-group">
//             <input type="password" class="form__input" name="password" id="create-password" autofocus placeholder="Password">
//             <div class="form__input-error-message"></div>
//         </div>
//         <div class="form__input-group">
//             <input type="password" class="form__input" name="confirm"  id="confirm-password" autofocus placeholder="Confirm password">
//             <div class="form__input-error-message"></div>
//         </div>
//         <button class="form__button"  id="create-btn">Continue</button>
//         <p class="form__text">
//             <a class="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
//         </p>
//     </div> 
//     `
// }



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
    } else {
        if (userPassword == ""){
            alert("Please type in Password")
        }
    }
    alert("Welcom back")
})


