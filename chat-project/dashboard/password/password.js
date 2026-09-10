const form = document.querySelector("#form");
const change = document.querySelector("#change");
const url = "http://127.0.0.1:8080/dashboard/change-password";

function redirection(url) {
  window.location = url;
}

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
      redirection("/public_html/dashboard/dashboard.html");
    }
  }, time);
}

function getToken() {
  return document.cookie.split("=")[1];
}

async function sendData() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentPassword: `${form.children[1].children[0].children[0].value}`,
        newPassword: `${form.children[1].children[1].children[0].value}`,
      }),
    });
    const data = await response.json();
    if (data.status === "OK") {
      showError(`Done ${data.data.username}`, 3500, "confirm", true);
    } else {
      showError(`${data.data.message}`);
    }
  } catch (error) {
    console.log(error);
  }
}

change.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    form.children[1].children[2].children[0].value ===
    form.children[1].children[1].children[0].value
  ) {
    sendData();
  } else {
    showError("Password Mismatch");
  }
});
