//fetch username using token
const url = "http://127.0.0.1:8080/dashboard";
const username = document.querySelector("#username");
const modal = document.querySelector("#modal");
const change = document.querySelector("#change");
const saveUsername = document.querySelector("#saveUsername");
const loading = document.querySelector("#loading");
const uid = document.querySelector("#uid");
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
      loading.classList.replace("flex", "hidden");
      const data = await response.json();
      username.textContent = data.data.username;
      uid.textContent = data.data.userId;
      console.log(data);
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
