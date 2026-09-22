import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Toaster position="top-center"></Toaster>
  </BrowserRouter>,
);
