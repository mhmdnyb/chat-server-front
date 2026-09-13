import "./SettingModal.css";
import Create from "../Create/Create";
import Dashboard from "../Dashboard/Dashboard";
import Logout from "../Logout/Logout";
function SettingModal({ setSetting }) {
  return (
    <section
      onClick={(e) => {
        if (e.target.id === "setting-page") {
          setSetting(false);
        }
      }}
      id="setting-page"
      className="bg-white/10 w-full h-full flex flex-col items-center justify-center absolute z-30 backdrop-blur-lg rounded-xl text-tenpercent gap-y-5 tracking-wide text-lg"
    >
      <Create></Create>
      <Dashboard></Dashboard>
      <Logout></Logout>
    </section>
  );
}
export default SettingModal;
