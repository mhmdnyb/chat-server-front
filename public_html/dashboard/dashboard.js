//fetch username using token
const url = "http://127.0.0.1:8080/dashboard";
const username = document.querySelector("#username");
const modal = document.querySelector("#modal");
const change = document.querySelector("#change");
const save = document.querySelector("#save");
function getToken() {
  return document.cookie.split("=")[1];
}

function replaceCookie(newToken, oldToken = getToken()) {
  //delete previous cookie
  document.cookie = `token=${oldToken};expires=${new Date(Date.now()).toUTCString()};path=/;`;
  //make the new cookie
  document.cookie = `token=${newToken};expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()};path=/;`;
  window.location.reload();
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
});

change.addEventListener("click", (e) => {
  e.stopPropagation();
});
save.addEventListener("click", changeInfo);

//Change info request

async function changeInfo() {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "rainbow" }),
    });
    if (response.ok) {
      const data = await response.json();
      replaceCookie(data.data.token);
    }
  } catch (error) {
    console.log(error);
  }
}
