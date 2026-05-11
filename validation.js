const signupForm = document.querySelector(".signup-container form");
const emailInput = document.querySelector("#email-input");
const usernameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const validateForm = () => {
  usernameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  const usernameRegex = /^.{8,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  let formIsGood = true;

  if (usernameInput.value.trim() === "") {
    usernameError.innerText = "Name cannot be empty";
    formIsGood = false;
  }

  if (!usernameRegex.test(usernameInput.value)) {
    usernameError.innerText = "Username must be at least 8 characters long";
    formIsGood = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.innerText = "Email cannot be empty";
    formIsGood = false;
  }
  if (!emailRegex.test(emailInput.value)) {
    passwordError.innerText = "Email is not valid";
    formIsGood = false;
  }

  if (passwordInput.value.trim() === "") {
    passwordError.innerText = "Password cannot be empty";
    formIsGood = false;
  }
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.innerText =
      "Password must be 8+ characters with a number, uppercase, and special char (@$!%*?&)";
    formIsGood = false;
  }

  if (formIsGood) {
    alert("Form submitted!");
    signupForm.submit();
  }
};

const loginForm = document.querySelector(".login-container form");
const loginEmailInput = document.querySelector("#login-email");
const loginPasswordInput = document.querySelector("#login-password");
const loginEmailError = document.getElementById("loginEmailError");
const loginPasswordError = document.getElementById("loginPasswordError");

const validateLogin = (event) => {
  event.preventDefault();
  loginEmailError.innerText = "";
  loginPasswordError.innerText = "";

  let loginIsGood = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (loginEmailInput.value.trim() === "") {
    loginEmailError.innerText = "Please enter your email.";
    loginIsGood = false;
  } else if (!emailRegex.test(loginEmailInput.value)) {
    loginEmailError.innerText = "Please enter a valid email address.";
    loginIsGood = false;
  }

  if (loginPasswordInput.value.trim() === "") {
    loginPasswordError.innerText = "Please enter your password.";
    loginIsGood = false;
  }

  if (loginIsGood) {
    console.log("Login details are valid, sending to server...");
    // loginForm.submit() backend check.
    alert("Login Successful!");
  }
};

loginForm.addEventListener("submit", validateLogin);
