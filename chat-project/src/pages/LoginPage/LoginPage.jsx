import "./LoginPage.css";
import Header from "../../components/Header/Header";
function LoginPage() {
  {
    document.querySelector("body").style.backgroundColor = "#6366f1";
  }
  return (
    <>
      <Header></Header>
      <div class="w-screen h-screen flex justify-center items-center">
        <form
          id="form"
          action="index.php"
          method="POST"
          class="saira-condensed-medium bg-linear-to-bl from-white/25 to-white/15 backdrop-blur-2xl border border-white/40 pt-0 border-t-0 pb-3 pr-5 pl-3 flex flex-col justify-center rounded-xl gap-y-1.5 sm:w-80 w-full mx-2 overflow-hidden shadow-lg shadow-black/30"
        >
          <h2 class="text-center mb-5 saira-condensed-bold text-tenpercent text-xl py-1.5 rounded-b-2xl w-full">
            Welcome Back!
          </h2>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            class="border-2 border-tenpercent rounded-lg pl-3 focus:outline-0 focus:ring-2 focus:ring-white/50 w-full focus:transition-all duration-50 min-h-8 py-0.5"
          />

          <div class="border-2 border-tenpercent rounded-lg pl-3 flex items-center has-focus:outline-0 has-focus:ring-2 has-focus:ring-white/50 min-h-8 has-focus:transtion-all py-0.5">
            <input
              class="focus:outline-0 w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <svg
              id="show-pw"
              class="inline-block ml-auto mr-1 cursor-pointer"
              width="25px"
              height="25px"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.20513 12.5C6.66296 14.7936 8.9567 16.9 12.5 16.9C16.0433 16.9 18.3371 14.7936 19.7949 12.5C18.3371 10.2064 16.0433 8.1 12.5 8.1C8.9567 8.1 6.66296 10.2064 5.20513 12.5ZM3.98551 12.1913C5.53974 9.60093 8.20179 6.9 12.5 6.9C16.7982 6.9 19.4603 9.60093 21.0145 12.1913L21.1997 12.5L21.0145 12.8087C19.4603 15.3991 16.7982 18.1 12.5 18.1C8.20179 18.1 5.53974 15.3991 3.98551 12.8087L3.80029 12.5L3.98551 12.1913ZM12.5 9.4C10.7879 9.4 9.4 10.7879 9.4 12.5C9.4 14.2121 10.7879 15.6 12.5 15.6C14.2121 15.6 15.6 14.2121 15.6 12.5C15.6 10.7879 14.2121 9.4 12.5 9.4Z"
                  fill="#121923"
                ></path>
              </g>
            </svg>
          </div>
          <button
            id="login"
            class="bg-thirtypercent w-fit py-2 px-7 rounded-2xl mt-3 mx-auto text-lg transition-transform cursor-pointer hover:-translate-y-0.5 hover:scale-[1.02] hover:ring-2 hover:ring-[#8DB8BC]"
          >
            Login
          </button>
          <p class="mx-auto mt-3">
            Not Registered?
            <a
              class="text-sky-800 hover:text-sky-700 transition-colors"
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
