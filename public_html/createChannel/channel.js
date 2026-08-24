import { stringToHTML, getToken } from "../index.js";
import { settingPage } from "../home.js";
import { showError } from "../index.js";
const CREATE_URL = `http://127.0.0.1:8080/home/create-channel`;
const channelModalString = `<form id="channelform"
      method="post"
      class="h-full w-full flex flex-col items-center justify-center gap-2 relative"
    >
      <div class="w-65">
        <input
          type="text"
          name="name"
          id="channelName"
          class="w-full bg-[#262626] border border-white/40 text-tenpercent placeholder-gray-600 rounded-md px-4 py-2.5 focus:outline-none opacity-85 focus:ring-1 focus:ring-yellow-300 focus:opacity-100 transition-all duration-300"
          placeholder="Channel name"
        />
      </div>
      <div class="w-65">
        <input
          type="text"
          name="publicId"
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
        <input type="checkbox" name="privateChannel" id="private" class="sr-only" />
        <div class="flex items-center justify-between w-65">
          <p>Private Channel?</p>
          <div
            class="w-18 h-8 rounded-full bg-white relative group-has-checked:bg-sky-500 transition-all"
          >
            <div
              class="size-7 bg-black rounded-full absolute bottom-0.5 group-has-checked:translate-x-11 transition-all group-has-checked:bg-white"
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

async function createChannel(data) {
  console.log(data);
  try {
    const response = await fetch(CREATE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const body = await response.json();
      showError("Success!", "confirm");
    } else {
      showError("Error!");
    }
  } catch (error) {
    console.log(error);
  }
}
export function channelModal() {
  settingPage.innerHTML = channelModalString;
  const form = document.querySelector("#channelform");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (data.privateChannel) {
      const newData = { ...data, privateChannel: true };
      createChannel(newData);
    } else {
      createChannel(data);
    }
  });
}
