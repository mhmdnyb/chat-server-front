import {
  showError,
  stringToHTML,
  modalString,
  checkAuth,
  getToken,
} from "../index.js";
// show password icon
const showPw = document.querySelector("#show-pw");
const passwordInput = document.querySelectorAll('input[type="password"]');
const REGISTER_URL = `http://127.0.0.1:8080/register`;
showPw.addEventListener("click", (e) => {
  if (passwordInput[0].attributes[1].nodeValue == "password") {
    for (let i = 0; i < passwordInput.length; i++) {
      passwordInput[i].attributes[1].nodeValue = "text";
    }
  } else {
    for (let i = 0; i < passwordInput.length; i++) {
      passwordInput[i].attributes[1].nodeValue = "password";
    }
  }
});

// TOS checkbox

const cb1 = document.querySelector("#tos");
const btn = document.querySelector("#register");

cb1.addEventListener("input", (e) => {
  if (btn.classList.contains("low-opacity")) {
    btn.classList.remove("low-opacity");
    btn.removeAttribute("disabled");
  } else {
    btn.classList.add("low-opacity");
    btn.setAttribute("disabled", ``);
  }
});

//Return of userInfo
function userInfo() {
  const form = document.querySelector("#form");

  const credentials = {
    username: form.children[2].children[0].value,
    password: form.children[3].children[0].value,
    birthDate: `${form.children[5].children[0].value}-${form.children[5].children[1].value}-${form.children[5].children[2].value}`,
  };

  for (let key in credentials) {
    if (!credentials[key]) {
      showError("Fill in the fields!");
      return false;
    }
  }
  console.log(credentials);
  return credentials;
}

// Request to DB for registering POST
import Links from "./links.js";

const url = new Links();
async function register() {
  const credentials = userInfo();
  if (credentials === false) {
    return;
  }
  try {
    const response = await fetch(url.register, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    // Response body
    const data = await response.json();
    //Error modal
    if (response.ok) {
      showError(
        "Success!",
        "confirm",
        true,
        "/public_html/login_modal/login.html",
      );
    } else {
      console.log(`failed because ${data.status}`);
      showError(data.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const passwordField = document.querySelector("#password");
  const cofirmField = document.querySelector("#confirmPassword");
  try {
    if (passwordField.value === cofirmField.value) {
      register();
    } else {
      showError("Password Mismatch");
    }
  } catch (error) {}
});

checkAuth(REGISTER_URL);
