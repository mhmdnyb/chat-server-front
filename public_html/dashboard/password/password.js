const form = document.querySelector("#form");
const change = document.querySelector("#change");
const url = "http://127.0.0.1:8080/dashboard/change-password";

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
    const data = await response.text();
    if (response.ok) {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

change.addEventListener("click", (e) => {
  e.preventDefault();
  sendData();
});
