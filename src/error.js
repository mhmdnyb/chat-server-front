function showError(message, time = 3500, sound = "error", redirect = false) {
  const msg = document.querySelector("#error-msg");
  const modal = document.querySelector("#modal1");
  const sounds = { confirm: "/audio/confirm.mp3", error: "/audio/error.mp3" };
  const audio = new Audio(sounds[sound]);
  audio.play();

  msg.textContent = message;
  modal.classList.add("pop-up");
  modal.classList.replace("hidden", "flex");
  setTimeout(() => {
    modal.classList.replace("flex", "hidden");
    modal.classList.remove("pop-up");
    if (redirect == true) {
      redirection("/public_html/login_modal/login.html");
    }
  }, time);
}
