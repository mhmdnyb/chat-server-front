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

  const credentials = {
    username: form.children[1].value,
    password: form.children[2].children[0].value,
  };

  for (let key in credentials) {
    if (!credentials[key]) {
      showError("Fill in the fields!");
      return false;
    }
  }
  return credentials;
}

function showError(message) {
  const msg = document.querySelector("#error-msg");
  const modal = document.querySelector("#modal");

  msg.textContent = message;
  modal.classList.add("pop-up");
  modal.classList.replace("hidden", "flex");
  setTimeout(() => {
    modal.classList.replace("flex", "hidden");
    modal.classList.remove("pop-up");
  }, 6000);
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
      console.log(data);
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
