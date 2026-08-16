class ProgressBar {
  constructor() {
    this.username = false;
    this.password = false;
    this.tos = false;
    this.width = 0;
    this.element = document.querySelector("#progress");
    this.form = document.querySelector("#form");
  }
  validateUserName() {
    const usernameValidation = /^[a-zA-Z0-9_]{3,16}$/;
    const username = this.form.children[2].children[0].value;
    if (usernameValidation.test(username) && !this.username) {
      this.width += 25;
      this.element.setAttribute("style", `width:${this.width}%`);
      this.username = true;
    } else if (!usernameValidation.test(username) && this.username) {
      this.width -= 25;
      this.element.setAttribute("style", `width:${this.width}%`);
      this.username = false;
    }
  }
  validatePassword() {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const password = this.form.children[3].children[0].value;
    if (passwordValidation.test(password) && !this.password) {
      this.width += 25;
      this.element.setAttribute("style", `width:${this.width}%`);
      this.password = true;
    } else if (!passwordValidation.test(password) && this.password) {
      this.width -= 25;
      this.element.setAttribute("style", `width:${this.width}%`);
      this.password = false;
    }
  }
  validateTOS() {
    const tos = document.querySelector("#tos");
    if (tos.checked) {
      this.width += 50;
      this.element.setAttribute("style", `width:${this.width}%`);
    } else {
      this.width -= 50;
      this.element.setAttribute("style", `width:${this.width}%`);
    }
  }
}
const temp = new ProgressBar();
const tos = document.querySelector("#tos");
temp.form.addEventListener("focusout", (e) => {
  if (e.target.id === "username") {
    temp.validateUserName();
  } else if (e.target.id === "password") {
    temp.validatePassword();
  }
});
tos.addEventListener("input", (e) => {
  temp.validateTOS();
});
