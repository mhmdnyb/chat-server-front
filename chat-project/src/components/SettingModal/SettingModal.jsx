import "./SettingModal.css";
import Create from "../Create/Create";
import Dashboard from "../Dashboard/Dashboard";
import Logout from "../Logout/Logout";
import ChooseCreate from "../Create/ChooseCreate/ChooseCreate";
import CreateChannel from "../Create/CreateChannel/CreateChannel";
import CreateGroup from "../Create/CreateGroup/CreateGroup";
import { useState } from "react";
function SettingModal({ setSetting }) {
  const [step, setStep] = useState(0);
  function showMenu() {
    switch (step) {
      case 0:
        return (
          <>
            <Create setStep={setStep}></Create>
            <Dashboard></Dashboard>
            <Logout></Logout>
          </>
        );

      case 1:
        return (
          <>
            <ChooseCreate setStep={setStep}></ChooseCreate>
          </>
        );
      case "channel":
        return <CreateChannel></CreateChannel>;
      case "group":
        return <CreateGroup></CreateGroup>;
    }
  }
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
      {showMenu()}
    </section>
  );
}
export default SettingModal;
