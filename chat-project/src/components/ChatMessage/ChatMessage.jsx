import UserProfileImage from "../../assets/placeholder.webp";
import "./ChatMessage.css";
function ChatMessage() {
  return (
    <>
      <div className="bg-linear-to-br from-white/30 to-white/20 border-y border-y-white/50 shadow-xs shadow-black/10 backdrop-blur-3xl flex items-center justify-center gap-x-3.5 px-2 py-1 rounded-sm">
        <img
          className="rounded-full outline-2 outline-black/30 w-8 h-8 sm:w-15 sm:h-15"
          src={UserProfileImage}
          width="100"
          height="100"
          alt="profilePicture"
        />

        <div>
          <h2 className="text-xl saira-condensed-bold">name</h2>
          <p className="text-sm saira-condensed-regular tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            quo.
          </p>
        </div>
      </div>
    </>
  );
}
export default ChatMessage;
