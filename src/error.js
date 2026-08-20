// function showError(message, time = 3500, sound = "error", redirect = false) {
//   const msg = document.querySelector("#error-msg");
//   const modal = document.querySelector("#modal1");
//   const sounds = { confirm: "/audio/confirm.mp3", error: "/audio/error.mp3" };
//   const audio = new Audio(sounds[sound]);
//   audio.play();

//   msg.textContent = message;
//   modal.classList.add("pop-up");
//   modal.classList.replace("hidden", "flex");
//   setTimeout(() => {
//     modal.classList.replace("flex", "hidden");
//     modal.classList.remove("pop-up");
//     if (redirect == true) {
//       redirection("/public_html/login_modal/login.html");
//     }
//   }, time);
// }

const modalString = `<!-- Error Modal -->
    <div
      id="modal"
      class="w-screen h-screen absolute top-0 flex justify-center items-start pop-up"
    >
      <div
        class="px-4 py-1.5 mt-10 bg-notif-background backdrop-blur-2xl border border-white/40 rounded-xl text-notif-text flex items-center justify-center"
      >
        <svg
          class="inline-block"
          width="30px"
          height="30px"
          viewBox="-0.5 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
          fill="#E53935"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <defs>
              <filter
                id="a"
                width="200%"
                height="200%"
                x="-50%"
                y="-50%"
                filterUnits="objectBoundingBox"
              >
                <feOffset
                  dy="1"
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="10"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                ></feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  in="shadowBlurOuter1"
                  result="shadowMatrixOuter1"
                ></feColorMatrix>
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <path
              fill-rule="evenodd"
              d="M28 38c1.105 0 2-.895 2-2h-4c0 1.105.895 2 2 2zm0-20c3.441 0 6.882 3.529 7 6.697v3.636s2 1.167 2 2.672c0 2.043-1.34 2.995-2.993 2.995h-12.015c-1.64 0-2.993-1-2.993-2.995v-.509c0-.552.385-1.22.86-1.497l1.14-.665v-3.636c.118-3.168 3.559-6.697 7-6.697zm0 2c-2.277 0-4.92 2.589-5 4.697v4.785l-.992.579-1.14.665c.139-.081.132-.07.132-.231v.509c0 .729.289.995.993.995h12.015c.735 0 .993-.235.993-.995 0-.002-.115-.198-.385-.457-.244-.234-.498-.414-.623-.487l-.992-.579v-1.149l.001-3.562c-.081-2.183-2.724-4.771-5.001-4.771z"
              filter="url(#a)"
            ></path>
          </g>
        </svg>
        <p id="error-msg"></p>
      </div>
    </div>`;

function stringToHTML(string) {
  const temp = document.createElement("template");
  temp.innerHTML = string.trim();

  return temp.content.firstElementChild;
}

function showModal(message, sound = "error") {
  const sounds = { confirm: "/audio/confirm.mp3", error: "/audio/error.mp3" };
  const audio = new Audio(sounds[sound]);
  const myModal = stringToHTML(modalString);
  const body = document.querySelector("body");

  body.appendChild(myModal);
  audio.play();
  const msg = document.querySelector("#error-msg");
  msg.textContent = message;

  setTimeout(() => {
    myModal.remove();
  }, 3500);
}
