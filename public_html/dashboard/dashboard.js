//fetch username using token
const url = "http://127.0.0.1:8080/dashboard";
const username = document.querySelector("#username");
function getToken() {
  return document.cookie.split("=")[1];
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
    }
  } catch (error) {
    username.textContent = "NaN/ERR";
    console.log(error);
  }
}
setUserName();
