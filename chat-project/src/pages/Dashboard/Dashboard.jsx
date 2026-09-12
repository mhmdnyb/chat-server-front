import "./Dashboard.css";
import UserProfileImage from "../../assets/placeholder.webp";
import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
import UsernameChange from "../../components/UsernameChange/UsernameChange";
import Header from "../../components/Header/Header";
function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({ username: "", uid: "" });
  const [username, setUserName] = useState(false);

  useEffect(() => {
    function getToken() {
      return document.cookie.split("=")[1];
    }
    async function setUserName() {
      try {
        const response = await fetch("http://127.0.0.1:8080/dashboard", {
          headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();

          setLoading(false);
          setInfo({ username: data.data.username, uid: data.data.userId });
        } else {
          setInfo({ username: "NaN", uid: "Nan" });
        }
      } catch (error) {
        setInfo({ username: "NaN", uid: "Nan" });
        console.log(error);
      }
    }
    setUserName();
  }, []);

  {
    document.querySelector("body").style.backgroundColor = "#6366f1";
  }
  return (
    <>
      <Header isLoggedIn={true}></Header>
      <title>Dashboard</title>
      {loading && <Loading></Loading>}
      <UsernameChange
        username={username}
        setUsername={setUserName}
      ></UsernameChange>
      <section className="w-screen h-screen flex justify-center items-center saira-condensed-medium">
        <div className="bg-linear-to-bl from-white/25 to-white/15 backdrop-blur-2xl border border-white/40 shadow-xl px-4 py-2 rounded-xl space-y-2.5">
          <div className="rounded-full flex items-center justify-evenly">
            <img
              className="rounded-full outline-2 outline-black/30 w-15 h-15 sm:w-25 sm:h-25"
              src={UserProfileImage}
              width="100"
              height="100"
              alt="profilePicture"
            />
            <input
              className="file:mx-4 file:mr-6 file:bg-thirtypercent file:py-1.5 file:px-3 file:rounded-full hover:file:opacity-90 file:transition-opacity"
              type="file"
              name="pfp"
              id="pfp"
              accept="image/jpeg, image/png, image/webp"
            />
          </div>
          <h2 className="text-tenpercent text-shadow-sm text-shadow-black/20 text-center text-xl saira-condensed-bold border-b border-b-black/50 animate-pulse">
            Your Account
          </h2>

          <div className="flex items-center justify-between text-lg">
            <h3>Username</h3>
            <div>
              {/* username */}
              <h3 className="inline mr-1.5 text-white" id="username">
                {info.username}
              </h3>
              <button
                onClick={() => {
                  setUserName(true);
                }}
                id="changeUser"
                className="bg-thirtypercent px-5 rounded-2xl text-black/70 cursor-pointer"
              >
                Change
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-lg">
            <h3>Password</h3>

            <a
              href="/password"
              target="_blank"
              className="bg-thirtypercent px-5 rounded-2xl text-black/70 cursor-pointer"
            >
              Change
            </a>
          </div>
          <div className="flex items-center justify-between text-lg">
            <h3>UID</h3>
            <h3 className="inline mr-1.5 text-white" id="uid">
              {info.uid}
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
