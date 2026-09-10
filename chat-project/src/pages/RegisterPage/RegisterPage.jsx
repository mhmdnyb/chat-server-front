import "./RegisterPage.css";
import Header from "../../components/Header/Header";
function RegisterPage() {
  {
    document.querySelector("body").style.backgroundColor = "#6366f1";
  }
  return (
    <>
      <Header></Header>
      <section className="w-screen h-screen flex justify-center items-center">
        <form
          id="form"
          action="index.php"
          method="POST"
          className="saira-condensed-medium bg-linear-to-tl from-white/25 to-white/15 backdrop-blur-3xl border border-white/40 pb-3 pr-5 pl-3 flex flex-col justify-center rounded-xl gap-y-1.5 sm:w-96 w-full mx-2 relative border-t-0"
        >
          <div className="bg-linear-to-bl from-white/50 to-white/35 border border-white/25 shadow-lg shadow-black/30 rounded-full w-full h-3.5 -mt-1.5 backdrop-blur-2xl absolute bottom-0 left-0">
            <div
              id="progress"
              style={{ width: 0 }}
              className="h-full bg-linear-to-r from-[#b1afce] to-[#3f39f1] rounded-full transition-all duration-300"
            ></div>
          </div>
          <h2 className="text-center mb-5 mt-1.5 saira-condensed-bold text-tenpercent text-2xl py-1.5 rounded-b-2xl w-full">
            Create Account
          </h2>
          <div>
            <input
              autoComplete="off"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="border-2 border-tenpercent rounded-lg pl-3 focus:outline-0 focus:ring-2 focus:ring-white/50 w-full transition-all duration-50 min-h-8 py-0.5 focus:cursor-none"
            />
          </div>

          <div>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              className="border-2 border-tenpercent rounded-lg pl-3 focus:outline-0 focus:ring-2 focus:ring-white/50 w-full focus:transition-all duration-50 min-h-8 py-0.5"
            />
          </div>

          <div className="border-2 border-tenpercent rounded-lg pl-3 flex items-center has-focus:outline-0 has-focus:ring-2 has-focus:ring-white/50 min-h-8 has-focus:transtion-all py-0.5">
            <input
              className="focus:outline-0 w-full"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
            />
            <svg
              id="show-pw"
              className="inline-block ml-auto mr-1 cursor-pointer"
              width="25px"
              height="25px"
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
          </div>

          <div className="flex justify-around items-center mt-1.5">
            <input
              min="1360"
              max="1386"
              type="number"
              name="year"
              id="year"
              placeholder="Year"
              className="rounded-lg outline-1 outline-tenpercent"
            />
            <input
              min="1"
              max="12"
              type="number"
              name="month"
              id="month"
              placeholder="Month"
              className="rounded-lg outline-1 outline-tenpercent"
            />
            <input
              min="1"
              max="31"
              type="number"
              name="day"
              id="day"
              placeholder="Day"
              className="rounded-lg outline-1 outline-tenpercent"
            />
          </div>

          <div className="flex justify-center items-center gap-x-1.5 mt-1.5">
            <input type="checkbox" name="tos" id="tos" />
            <label htmlFor="tos" className="text-sm">
              By Registering You Agree With Our
              <a
                href="#"
                className="text-tenpercent underline hover:text-sky-700 transition-colors text-shadow-xsm text-shadow-black/30"
              >
                TOS
              </a>
            </label>
          </div>

          <button
            disabled
            id="register"
            className="bg-thirtypercent w-fit py-2 px-7 rounded-2xl mt-3 mx-auto text-lg transition-all cursor-pointer low-opacity hover:ring-2 hover:ring-[#8DB8BC]"
          >
            Register
          </button>
          <p className="mx-auto my-3">
            Already Registered?
            <a
              className="text-sky-800 hover:text-sky-700 transition-color text-shadow-xsm text-shadow-black/30"
              href="/login"
            >
              Login!
            </a>
          </p>
        </form>
      </section>
    </>
  );
}
export default RegisterPage;
