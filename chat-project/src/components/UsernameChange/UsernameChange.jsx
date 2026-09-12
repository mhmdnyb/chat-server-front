import { useRef, useState } from "react";
import "./UsernameChange.css";
import Modal from "../Modal/Modal";
function UsernameChange({ username, setUsername }) {
  const [open, setOpen] = useState([]);
  const inputRef = useRef();
  function getToken() {
    return document.cookie.split("=")[1];
  }
  function replaceCookie(newToken, oldToken = getToken()) {
    //delete previous cookie
    document.cookie = `token=${oldToken};expires=${new Date(Date.now()).toUTCString()};path=/;`;
    //make the new cookie
    document.cookie = `token=${newToken};expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()};path=/;`;
  }
  async function changeInfo(username) {
    try {
      const response = await fetch("http://127.0.0.1:8080/dashboard", {
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
        setOpen([{ text: "Success!", sound: "confirm" }]);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      onClick={(e) => {
        if (e.target.id === "modal") {
          inputRef.current.value = "";
          setUsername(false);
        }
      }}
      style={{ animationName: "fade-in", animationDuration: "500ms" }}
      id="modal"
      className={`w-screen h-screen absolute top-0 ${username ? "flex" : "hidden"} flex-col justify-center items-center z-10 bg-black/30 backdrop-blur-md saira-condensed-bold`}
    >
      {open.map((modal) => {
        return (
          <Modal
            setOpen={setOpen}
            text={modal.text}
            sound={modal.sound}
            key={crypto.randomUUID()}
          ></Modal>
        );
      })}
      <input
        onKeyDown={(e) => {
          switch (e.key) {
            case "Enter":
              changeInfo(inputRef.current.value);
              break;
            case "Escape":
              setUsername(false);
              break;
          }
        }}
        ref={inputRef}
        type="text"
        name="change"
        id="change"
        className="border-2 border-tenpercent rounded-md pl-3 focus:outline-blue-400"
        autoComplete="off"
      />
      <button
        onClick={() => {
          changeInfo(inputRef.current.value);
        }}
        id="saveUsername"
        className="bg-[#2A8C8C] text-white px-5 rounded-2xl cursor-pointer mt-2"
      >
        Save Change
      </button>
    </div>
  );
}
export default UsernameChange;
