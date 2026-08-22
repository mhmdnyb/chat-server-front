import { modalString, stringToHTML, showModal } from "../index.js";

const URL = "http://127.0.0.1:8080/profile/R9e7bRaZGNCCAhFOrXWri";
function getToken() {
  return document.cookie.split("=")[1];
}

async function fetchProfile() {
  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}
