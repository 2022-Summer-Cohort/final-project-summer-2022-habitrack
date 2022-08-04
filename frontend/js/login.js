// export default function login(){
//     return `
//     <div class="login-page">
//         <div class="form">
//             <form class="register-form">
//                 <input type="text" placeholder="username"/>
//                 <input type="password" placeholder="password"/>
//                 <input type="password" placeholder="confirm password"/>
//                 <button class="button-40" role="button">create</button>
//                 <p class="message">Already registered? <a href="#">Sign In</a></p>
//             </form>
//             <form class="login-form">
//                 <input type="text" placeholder="username"/>
//                 <input type="password" placeholder="password"/>
//                 <button>login</button>
//                 <p class="message">Not registered? <a href="#">Create an account</a></p>
//             </form>
//         </div>
//   </div>
    
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

    // loginForm.addEventListener("submit", e => {
    //     e.preventDefault();

    //     // Perform your AJAX/Fetch login

    //     setFormMessage(loginForm, "error", "Invalid username/password combination");
    // });
})
const createButton = document.querySelector("#create-btn") 
createButton.addEventListener("click", () => {
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