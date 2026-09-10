import "./Header.css";
function Header() {
  return (
    <header className="py-2.5 bg-[#448085CC] backdrop-blur-2xl shadow-2xs mx-auto rounded-b-2xl text-tenpercent border-b border-b-white/35 tracking-wide saira-condensed-medium sm:text-lg w-screen fixed">
      <ul className="uppercase flex items-center justify-around">
        <li className="sm:mr-56">
          <a
            href="#"
            className="relative before:content-[''] before:absolute before:left-0 before:-bottom-1.5 before:h-px before:w-0 before:bg-red-500 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
          >
            <svg
              className="inline-block"
              width="25px"
              height="25px"
              viewBox="0 0 48 48"
              version="1"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 48 48"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#42A5F5"
                  d="M39,45H9c0,0-3-0.1-3-8h36C42,44.9,39,45,39,45z"
                ></path>
                <rect x="8" y="3" fill="#90CAF9" width="32" height="34"></rect>
                <g fill="#1976D2">
                  <rect x="18" y="15" width="16" height="2"></rect>
                  <rect x="18" y="19" width="16" height="2"></rect>
                  <rect x="18" y="23" width="16" height="2"></rect>
                  <rect x="18" y="27" width="16" height="2"></rect>
                  <rect x="18" y="31" width="16" height="2"></rect>
                </g>
                <g fill="#1976D2">
                  <rect x="14" y="15" width="2" height="2"></rect>
                  <rect x="14" y="19" width="2" height="2"></rect>
                  <rect x="14" y="23" width="2" height="2"></rect>
                  <rect x="14" y="27" width="2" height="2"></rect>
                  <rect x="14" y="31" width="2" height="2"></rect>
                </g>
              </g>
            </svg>
            rules
          </a>
        </li>
        <li className="flex items-center sm:gap-x-10 gap-x-5">
          <a
            href="/public_html/login_modal/login.html"
            className="relative before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-px before:w-0 before:bg-red-500 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
          >
            login
          </a>
          <a
            href="/public_html/register_modal/register.html"
            className="bg-signUp hover:bg-signUpHover transition-colors px-3 py-1 rounded-full"
          >
            sign up
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
