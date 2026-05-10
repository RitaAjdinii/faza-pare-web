// const usernameRe = /^[a-zA-Z0-9._-]{3,20}$/;
// const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

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
