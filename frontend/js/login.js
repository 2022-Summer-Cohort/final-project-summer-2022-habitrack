export default function login(){
    return `
    <div class="login-container">
 <div class="form" id="login">
        <h1 class="form__title">Login</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="text" class="form__input" id="login-username" autofocus placeholder="Username">
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" id="login-password" class="form__input" autofocus placeholder="Password">
            <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" id="login-button">Continue</button>
        <p class="form__text">
            <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
        </p>
    </div>
    <div class="form form--hidden" id="createAccount">
        <h1 class="form__title">Create Account</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username">
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" name="password" id="create-password" autofocus placeholder="Password">
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" name="confirm"  id="confirm-password" autofocus placeholder="Confirm password">
            <div class="form__input-error-message"></div>
        </div>
        <button class="form__button"  id="create-btn">Continue</button>
        <p class="form__text">
            <a class="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
        </p>
    </div> 
    </div>
    `
}






