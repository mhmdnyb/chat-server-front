import { stringToHTML } from "../index.js";
import { settingPage } from "../home.js";
let btn;
const channelModalString = `<form id="channelform"
      action="http://127.0.0.1:8080/home/create-group"
      method="post"
      class="h-full w-full flex flex-col items-center justify-center gap-2 relative"
    >
      <div class="w-65">
        <input
          type="text"
          name="channelName"
          id="channelName"
          class="w-full bg-[#262626] border border-white/40 text-tenpercent placeholder-gray-600 rounded-md px-4 py-2.5 focus:outline-none opacity-85 focus:ring-1 focus:ring-yellow-300 focus:opacity-100 transition-all duration-300"
          placeholder="Channel name"
        />
      </div>
      <div class="w-65">
        <input
          type="text"
          name="username"
          id="username"
          class="w-full bg-[#262626] border border-white/40 text-tenpercent placeholder-gray-600 rounded-md px-4 py-2.5 focus:outline-none opacity-85 focus:ring-1 focus:ring-yellow-300 focus:opacity-100 transition-all duration-300"
          placeholder="Channel username"
        />
      </div>
      <div class="w-65">
        <input
          type="text"
          name="description"
          id="description"
          class="w-full bg-[#262626] border border-white/40 text-tenpercent placeholder-gray-600 rounded-md px-4 py-2.5 focus:outline-none opacity-85 focus:ring-1 focus:ring-yellow-300 focus:opacity-100 transition-all duration-300"
          placeholder="Channel description"
        />
      </div>
      <label for="private" class="group cursor-pointer">
        <input type="checkbox" name="private" id="private" class="sr-only" />
        <div class="flex items-center justify-between w-65">
          <p>Private Channel?</p>
          <div
            class="w-18 h-8 rounded-full bg-white relative group-has-checked:bg-sky-500 transition-all"
          >
            <div
              class="size-7 bg-black rounded-full absolute bottom-0.5 group-has-checked:translate-x-11 transition-all"
            ></div>
          </div>
        </div>
      </label>
      <button
        type="submit"
        id="btn"
        class="bg-thirtypercent w-fit py-2 px-10 rounded-2xl mt-3 mx-auto text-lg text-gray-200 transition-all ring-tenpercent cursor-pointer ring-2 hover:ring-[#8DB8BC]"
      >
        Create
      </button>
    </form>`;
export function channelModal() {
  settingPage.innerHTML = channelModalString;
  const form = document.querySelector("#channelform");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
  });
}
