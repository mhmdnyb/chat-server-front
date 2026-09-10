import "./LoginPage.css";
import Header from "../../components/Header/Header";
import { useState, useRef } from "react";
import Modal from "../../components/Modal/Modal";
function LoginPage() {
  const [open, setOpen] = useState([]);
  const formRef = useRef();
  const [type, setType] = useState("password");
  {
    document.querySelector("body").style.backgroundColor = "#6366f1";
  }
  async function login(credentials) {
    try {
      const response = await fetch("http://127.0.0.1:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      // Response body
      const data = await response.json();
      //Error modal
      if (response.ok) {
        setOpen([{ text: "hello", sound: "confirm" }]);
        console.log(data.data);
      } else {
        console.log(`failed because ${data.status}`);
        setOpen([{ text: "error", sound: "error" }]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <title>Login</title>
      <Header></Header>
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
      <div className="w-screen h-screen flex justify-center items-center">
        <form
          ref={formRef}
          id="form"
          action="index.php"
          method="POST"
          className="saira-condensed-medium bg-linear-to-bl from-white/25 to-white/15 backdrop-blur-2xl border border-white/40 pt-0 border-t-0 pb-3 pr-5 pl-3 flex flex-col justify-center rounded-xl gap-y-1.5 sm:w-80 w-full mx-2 overflow-hidden shadow-lg shadow-black/30"
        >
          <h2 className="text-center mb-5 saira-condensed-bold text-tenpercent text-xl py-1.5 rounded-b-2xl w-full">
            Welcome Back!
          </h2>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="border-2 border-tenpercent rounded-lg pl-3 focus:outline-0 focus:ring-2 focus:ring-white/50 w-full focus:transition-all duration-50 min-h-8 py-0.5"
          />

          <div className="border-2 border-tenpercent rounded-lg pl-3 flex items-center has-focus:outline-0 has-focus:ring-2 has-focus:ring-white/50 min-h-8 has-focus:transtion-all py-0.5">
            <input
              className="focus:outline-0 w-full"
              type={type}
              name="password"
              id="password"
              placeholder="Password"
            />
            {type === "password" ? (
              <svg
                onClick={() => {
                  if (type === "password") {
                    setType("text");
                  } else {
                    setType("password");
                  }
                }}
                id="show-pw"
                className="inline-block ml-auto mr-1 cursor-pointer"
                width="24px"
                height="24px"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.20513 12.5C6.66296 14.7936 8.9567 16.9 12.5 16.9C16.0433 16.9 18.3371 14.7936 19.7949 12.5C18.3371 10.2064 16.0433 8.1 12.5 8.1C8.9567 8.1 6.66296 10.2064 5.20513 12.5ZM3.98551 12.1913C5.53974 9.60093 8.20179 6.9 12.5 6.9C16.7982 6.9 19.4603 9.60093 21.0145 12.1913L21.1997 12.5L21.0145 12.8087C19.4603 15.3991 16.7982 18.1 12.5 18.1C8.20179 18.1 5.53974 15.3991 3.98551 12.8087L3.80029 12.5L3.98551 12.1913ZM12.5 9.4C10.7879 9.4 9.4 10.7879 9.4 12.5C9.4 14.2121 10.7879 15.6 12.5 15.6C14.2121 15.6 15.6 14.2121 15.6 12.5C15.6 10.7879 14.2121 9.4 12.5 9.4Z"
                    fill="#121923"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                className="inline-block ml-auto mr-1 cursor-pointer"
                onClick={() => {
                  if (type === "password") {
                    setType("text");
                  } else {
                    setType("password");
                  }
                }}
                width="24px"
                height="24px"
                viewBox="-2 -2 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M2 2L22 22"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              const form = new FormData(formRef.current);
              const data = Object.fromEntries(form);
              login(data);
            }}
            id="login"
            className="bg-thirtypercent w-fit py-2 px-7 rounded-2xl mt-3 mx-auto text-lg transition-transform cursor-pointer hover:-translate-y-0.5 hover:scale-[1.02] hover:ring-2 hover:ring-[#8DB8BC]"
          >
            Login
          </button>
          <p className="mx-auto mt-3">
            Not Registered?
            <a
              className="text-sky-800 hover:text-sky-700 transition-colors p-1"
              href="/"
            >
              Register!
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
