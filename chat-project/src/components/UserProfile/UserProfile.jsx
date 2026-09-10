import "./UserProfile.css";
import UserProfileImage from "../../assets/placeholder.webp";
function UserProfile() {
  return (
    <div className="bg-linear-to-br from-white/30 to-white/20 rounded-xl border border-white/60 backdrop-blur-2xl shadow-md shadow-black/30 py-3.5 px-3.5 space-y-1.5 relative mx-5">
      <div
        className="absolute top-0 right-2.5 text-white/70 hover:text-white/40 transition-colors text-lg cursor-pointer"
        id="hideProfile"
      >
        x
      </div>
      <img
        className="rounded-full outline-2 outline-black/30 w-15 h-15 sm:w-25 sm:h-25 mx-auto"
        src={UserProfileImage}
        width="100"
        height="100"
        alt="profilePicture"
      />
      <h2 className="text-center text-xl text-white/90" id="username">
        placeholder
      </h2>
      <div className="h-px sm:w-sm w-75 bg-black"></div>
      <div className="grid grid-cols-2 mt-3">
        <h3>Member Since</h3>
        <h3 id="joinDate" className="place-self-end">
          15 Nov 2025
        </h3>

        <h3>Birthdate</h3>
        <h3 id="dob" className="place-self-end">
          15 Oct 2007
        </h3>
      </div>
      <div className="bg-[#404CAE] flex items-center justify-center gap-x-1.2 mx-auto text-white rounded-xl cursor-pointer hover:bg-[#4d5ac1] transition-colors duration-150">
        <h3>Send Message</h3>
        <svg
          className="fill-white"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
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
              d="M7 16H4V4H20V6M8 8H16M8 12H13M7 18.5V21L12 16H20V10"
              stroke="#001A72"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
export default UserProfile;
