import "./Dashboard.css";
import { Link } from "react-router";
function Dashboard() {
  return (
    <Link
      to={"/dashboard"}
      id="dashboard"
      className="flex items-center justify-between gap-x-1.5 cursor-pointer hover:opacity-85 transition-opacity"
    >
      <svg
        className="inline"
        viewBox="0 0 24 24"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        fill="none"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <defs>
            <style>
              {`.cls-1 {
              fill: none;
              stroke: currentColor;
              stroke-miterlimit: 10;
              stroke-width: 1.91px;
            }`}
            </style>
          </defs>
          <circle className="cls-1" cx="12" cy="7.25" r="5.73"></circle>
          <path
            className="cls-1"
            d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
          ></path>
        </g>
      </svg>
      <h2>Dashboard</h2>
    </Link>
  );
}
export default Dashboard;
