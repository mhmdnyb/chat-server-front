import { delCookie } from "./index.js";

function stringToHTML(string) {
  const temp = document.createElement("template");
  temp.innerHTML = string.trim();

  return temp.content.firstElementChild;
}

//home

const settingModalString = ` <section id="setting-page"
            class="bg-white/10 w-full h-full flex flex-col items-center justify-center absolute z-30 backdrop-blur-lg  rounded-xl text-tenpercent gap-y-5 tracking-wide text-lg"
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
const createModalString = `<!-- channel creation -->
      <div class="text-tenpercent peer/createChannel">
        <label for="createChannel">
          <input
            type="radio"
            name="create"
            id="createChannel"
            class="hidden peer"
          />

          <div
            class="bg-[#262626] rounded-md hover:ring-2 ring-white/30 transition-all opacity-85 cursor-pointer peer-checked:opacity-100 peer-checked:scale-[1.02] flex items-center justify-start gap-x-3.5 px-5 py-2.5 w-80 h-24"
          >
            <svg
              class="shrink-0"
              fill="#E6CA65"
              width="32px"
              height="32px"
              viewBox="0 0 1920 1920"
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
                  d="M1587.162 31.278c11.52-23.491 37.27-35.689 63.473-29.816 25.525 6.099 43.483 28.8 43.483 55.002V570.46C1822.87 596.662 1920 710.733 1920 847.053c0 136.32-97.13 250.503-225.882 276.705v513.883c0 26.202-17.958 49.016-43.483 55.002a57.279 57.279 0 0 1-12.988 1.468c-21.12 0-40.772-11.745-50.485-31.171C1379.238 1247.203 964.18 1242.347 960 1242.347H564.706v564.706h87.755c-11.859-90.127-17.506-247.003 63.473-350.683 52.405-67.087 129.657-101.082 229.948-101.082v112.941c-64.49 0-110.57 18.861-140.837 57.487-68.781 87.868-45.064 263.83-30.269 324.254 4.18 16.828.34 34.673-10.277 48.34-10.73 13.665-27.219 21.684-44.499 21.684H508.235c-31.171 0-56.47-25.186-56.47-56.47v-621.177h-56.47c-155.747 0-282.354-126.607-282.354-282.353v-56.47h-56.47C25.299 903.523 0 878.336 0 847.052c0-31.172 25.299-56.471 56.47-56.471h56.471v-56.47c0-155.634 126.607-282.354 282.353-282.354h564.593c16.941-.112 420.48-7.002 627.275-420.48Zm-5.986 218.429c-194.71 242.371-452.216 298.164-564.705 311.04v572.724c112.489 12.876 369.995 68.556 564.705 311.04ZM903.53 564.7H395.294c-93.402 0-169.412 76.01-169.412 169.411v225.883c0 93.402 76.01 169.412 169.412 169.412H903.53V564.7Zm790.589 123.444v317.93c65.618-23.379 112.94-85.497 112.94-159.021 0-73.525-47.322-135.53-112.94-158.909Z"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>

            <div>
              <h3 class="text-xl font-bold">Create Channel</h3>
              <p class="text-sm">
                A place to post freely with no restrictions!
              </p>
            </div>
          </div>
        </label>
      </div>

      <!-- group creation -->
      <div class="text-tenpercent peer/createGroup">
        <label for="createGroup">
          <input
            type="radio"
            name="create"
            id="createGroup"
            class="hidden peer"
          />
          <div
            class="bg-[#262626] rounded-md hover:ring-2 ring-white/30 transition-all opacity-85 cursor-pointer peer-checked:opacity-100 peer-checked:scale-[1.02] flex items-center justify-start gap-x-3.5 px-5 py-2.5 w-80 h-24"
          >
            <svg
              class="shrink-0"
              fill="#E6CA65"
              width="32px"
              height="32px"
              viewBox="-3 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>group</title>
                <path
                  d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"
                ></path>
              </g>
            </svg>

            <div>
              <h3 class="text-xl font-bold">Create Group</h3>
              <p class="text-sm">Hang out with friends and family!</p>
            </div>
          </div>
        </label>
      </div>`;

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
  const previousInner = settingPage.innerHTML;
  const funcReset = resetInner();

  //add closure to keep the state in memory and resetinner
  function resetInner() {
    let previousInner = settingPage.innerHTML;
    function reset() {
      settingPage.innerHTML = previousInner;
    }
    return reset;
  }
  //eventlisten for the settingpage modal
  settingPage.addEventListener("click", (e) => {
    if (e.target.id === `setting-page`) {
      funcReset();
      settingModal.remove();
    } else if (e.target.textContent == `Logout`) {
      delCookie();
    } else if (e.target.textContent == `Dashboard`) {
      window.location = `./dashboard/dashboard.html`;
    } else if (e.target.textContent == `Create`) {
      settingPage.innerHTML = createModalString.trim();
    }
  });
});
