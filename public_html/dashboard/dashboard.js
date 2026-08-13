//fetch username using token
const url = "http://127.0.0.1:8080/dashboard";
const username = document.querySelector("#username");
const modal = document.querySelector("#modal");
const change = document.querySelector("#change");
const saveUsername = document.querySelector("#saveUsername");

function getToken() {
  return document.cookie.split("=")[1];
}

function replaceCookie(newToken, oldToken = getToken()) {
  //delete previous cookie
  document.cookie = `token=${oldToken};expires=${new Date(Date.now()).toUTCString()};path=/;`;
  //make the new cookie
  document.cookie = `token=${newToken};expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()};path=/;`;
  setTimeout(() => {
    window.location.reload();
  }, 3500);
}

async function setUserName() {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      username.textContent = data.data.username;
    } else {
      username.textContent = "NaN/ERR";
    }
  } catch (error) {
    username.textContent = "NaN/ERR";
    console.log(error);
  }
}
setUserName();

modal.addEventListener("click", (e) => {
  modal.classList.replace("flex", "hidden");
  change.value = "";
});

saveUsername.addEventListener("click", () => {
  changeInfo({
    username: `${change.value}`,
  });
});

change.addEventListener("click", (e) => {
  e.stopPropagation();
});
//usual error notif
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

//Change info request

async function changeInfo({ username = null }) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      replaceCookie(data.data.token);

      showError("Done!", 3500, "confirm");
    } else {
      showError(data.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}
