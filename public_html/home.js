import { delCookie } from "./index.js";

function stringToHTML(string) {
  const temp = document.createElement("template");
  temp.innerHTML = string.trim();

  return temp.content.firstElementChild;
}

//home
const settingModalString = ` <section id="setting-page"
            class="bg-white/10 w-full h-full flex flex-col items-center justify-center absolute z-30 backdrop-blur-lg  rounded-xl text-tenpercent gap-y-5 tracking-wide text-lg" style="animation-name: fade-in;"
          >
            <div
              class="flex items-center justify-between gap-x-1.5 cursor-pointer hover:opacity-85 transition-opacity"
            >
              <svg
                class="inline"
                viewBox="0 0 24 24"
                id="create-note"
                data-name="Flat Line"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="secondary"
                    d="M20,4a2.09,2.09,0,0,0-2.95.12L10.17,11,9,15l4-1.17L19.88,7A2.09,2.09,0,0,0,20,4Z"
                    style="fill: none; stroke-width: 2"
                  ></path>
                  <path
                    id="primary"
                    d="M20,4a2.09,2.09,0,0,0-2.95.12L10.17,11,9,15l4-1.17L19.88,7A2.09,2.09,0,0,0,20,4Z"
                    style="
                      fill: none;
                      stroke: currentColor;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-width: 2;
                    "
                  ></path>
                  <path
                    id="primary-2"
                    data-name="primary"
                    d="M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12"
                    style="
                      fill: none;
                      stroke: currentColor;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-width: 2;
                    "
                  ></path>
                </g>
              </svg>
              <h2>Create</h2>
            </div>
            <div
              class="flex items-center justify-between gap-x-1.5 cursor-pointer hover:opacity-85 transition-opacity"
            >
              <svg
                class="inline"
                viewBox="0 0 24 24"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs>
                    <style>
                      .cls-1 {
                        fill: none;
                        stroke: currentColor;
                        stroke-miterlimit: 10;
                        stroke-width: 1.91px;
                      }
                    </style>
                  </defs>
                  <circle class="cls-1" cx="12" cy="7.25" r="5.73"></circle>
                  <path
                    class="cls-1"
                    d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
                  ></path>
                </g>
              </svg>
              <h2>Dashboard</h2>
            </div>
            <div
              class="flex items-center justify-between gap-x-1.5 cursor-pointer hover:opacity-85 transition-opacity"
            >
              <svg
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="33"
                height="33"
                viewBox="0 0 256 256"
                xml:space="preserve"
              >
                <g
                  style="
                    stroke: none;
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 69.313 54.442 c -0.397 0 -0.798 -0.118 -1.147 -0.363 c -0.904 -0.636 -1.122 -1.883 -0.487 -2.786 l 10.118 -14.399 L 67.679 22.495 c -0.635 -0.904 -0.417 -2.151 0.487 -2.786 c 0.904 -0.637 2.151 -0.417 2.786 0.486 l 10.926 15.549 c 0.484 0.69 0.484 1.61 0 2.3 L 70.952 53.592 C 70.563 54.146 69.943 54.442 69.313 54.442 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: currentColor;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="matrix(1 0 0 1 0 0)"
                    stroke-linecap="round"
                  />
                  <path
                    d="M 57.693 30.092 c 1.104 0 2 -0.896 2 -2 V 2 c 0 -1.104 -0.896 -2 -2 -2 H 9.759 C 9.746 0 9.735 0.003 9.722 0.004 C 9.685 0.004 9.648 0.012 9.611 0.015 c -0.122 0.009 -0.24 0.027 -0.354 0.057 C 9.211 0.083 9.168 0.098 9.124 0.113 C 9.011 0.151 8.903 0.198 8.8 0.255 C 8.775 0.269 8.747 0.274 8.723 0.289 c -0.012 0.007 -0.02 0.018 -0.031 0.025 c -0.13 0.083 -0.252 0.177 -0.36 0.287 C 8.313 0.62 8.299 0.643 8.281 0.662 C 8.196 0.757 8.12 0.859 8.053 0.969 C 8.029 1.009 8.008 1.05 7.987 1.091 C 7.935 1.192 7.893 1.297 7.858 1.407 C 7.845 1.449 7.83 1.489 7.82 1.532 C 7.783 1.683 7.759 1.838 7.759 2 v 69.787 c 0 0.17 0.028 0.333 0.068 0.49 c 0.011 0.043 0.025 0.083 0.039 0.124 c 0.04 0.123 0.091 0.239 0.152 0.35 c 0.019 0.033 0.034 0.068 0.054 0.1 c 0.086 0.135 0.185 0.26 0.3 0.371 c 0.022 0.021 0.047 0.037 0.07 0.058 c 0.102 0.09 0.214 0.169 0.333 0.237 c 0.021 0.012 0.037 0.03 0.058 0.042 l 31.016 16.213 C 40.139 89.925 40.457 90 40.775 90 c 0.359 0 0.718 -0.097 1.036 -0.289 c 0.598 -0.362 0.964 -1.012 0.964 -1.711 V 73.787 h 14.918 c 1.104 0 2 -0.896 2 -2 V 45 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 24.787 H 42.775 V 18.213 c 0 -0.745 -0.414 -1.428 -1.074 -1.772 L 17.902 4 h 37.791 v 24.092 C 55.693 29.196 56.589 30.092 57.693 30.092 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: currentColor;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="matrix(1 0 0 1 0 0)"
                    stroke-linecap="round"
                  />
                  <path
                    d="M 80.241 38.894 H 47.536 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 32.705 c 1.104 0 2 0.896 2 2 S 81.346 38.894 80.241 38.894 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: currentColor;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="matrix(1 0 0 1 0 0)"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
              <h2>Logout</h2>
            </div>
          </section>`;
const chatPage = document.querySelector("#chat-page");
const setting = document.querySelector("#setting");
const settingModal = stringToHTML(settingModalString);
setting.addEventListener("click", (e) => {
  setting.classList.add("setting-anim");
  setTimeout(() => {
    setting.classList.remove("setting-anim");
  }, 1000);
  chatPage.appendChild(settingModal);

  const settingPage = document.querySelector("#setting-page");
  settingPage.addEventListener("click", (e) => {
    if (e.target.id === `setting-page`) {
      settingModal.remove();
    } else if (e.target.textContent == `Logout`) {
      delCookie();
    } else if (e.target.textContent == `Dashboard`) {
      window.location = `./dashboard/dashboard.html`;
    }
  });
});
