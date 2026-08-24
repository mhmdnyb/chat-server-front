import {
  showError,
  stringToHTML,
  modalString,
  checkAuth,
  getToken,
} from "../index.js";
// show password icon
const showPw = document.querySelector("#show-pw");
const passwordInput = document.querySelector("#password");

showPw.addEventListener("click", (e) => {
  if (passwordInput.attributes[1].nodeValue == "password") {
    passwordInput.attributes[1].nodeValue = "text";
  } else {
    passwordInput.attributes[1].nodeValue = "password";
  }
});

//our login link
const LOGIN_URL = "http://127.0.0.1:8080/login";
const loginButton = document.querySelector("#login");

//userInfo grabber
function userInfo() {
  const form = document.querySelector("#form");
  const formData = new FormData(form);
  const credentials = Object.fromEntries(formData);

  for (let key in credentials) {
    if (!credentials[key]) {
      showError("Fill in the fields!");
      return false;
    }
  }
  return credentials;
}

async function login() {
  const credentials = userInfo();
  if (credentials === false) {
    return;
  }
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    // Response body
    const data = await response.json();
    //Error modal
    if (response.ok) {
      showError("Logged in!", "confirm");
      document.cookie = `token=${data.data.token};expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()};path=/;`;
    } else {
      console.log(`failed because ${data.status}`);
      showError(data.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});

checkAuth(LOGIN_URL);
