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
