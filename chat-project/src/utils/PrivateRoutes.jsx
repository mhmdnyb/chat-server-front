import { Outlet, Navigate } from "react-router";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
function PublicRoutes() {
  const [isLogged, setLogged] = useState(null);
  useEffect(() => {
    async function checkAuth() {
      const token = document.cookie.split("=")[1];

      try {
        const response = await fetch(`http://127.0.0.1:8080/register`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.status == "BAD_REQUEST") {
          setLogged(true);
        } else {
          document.cookie = `token=${document.cookie.split("=")[1]};expires=${new Date(Date.now()).toUTCString()};path=/;`;
          setLogged(false);
        }
      } catch (error) {
        document.cookie = `token=${document.cookie.split("=")[1]};expires=${new Date(Date.now()).toUTCString()};path=/;`;
        setLogged(false);
        console.log(error);
      }
    }
    checkAuth();
  }, []);
  if (isLogged == null) {
    return <Loading></Loading>;
  }
  return !isLogged ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={"/home"} replace={true}></Navigate>
  );
}
export default PublicRoutes;
