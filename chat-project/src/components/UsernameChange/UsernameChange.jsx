import { useRef } from "react";
import "./UsernameChange.css";
function UsernameChange({ username, setUsername }) {
  const inputRef = useRef();
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
      <input
        ref={inputRef}
        type="text"
        name="change"
        id="change"
        className="border-2 border-tenpercent rounded-md pl-3 focus:outline-blue-400"
        autoComplete="off"
      />
      <button
        id="saveUsername"
        className="bg-[#2A8C8C] text-white px-5 rounded-2xl cursor-pointer mt-2"
      >
        Save Change
      </button>
    </div>
  );
}
export default UsernameChange;
