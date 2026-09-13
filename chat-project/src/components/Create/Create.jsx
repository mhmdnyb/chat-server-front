import "./Create.css";
function Create() {
  return (
    <div
      id="create"
      className="flex items-center justify-between gap-x-1.5 cursor-pointer hover:opacity-85 transition-opacity"
    >
      <svg
        className="inline"
        viewBox="0 0 24 24"
        id="create-note"
        data-name="Flat Line"
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
          <path
            id="secondary"
            d="M20,4a2.09,2.09,0,0,0-2.95.12L10.17,11,9,15l4-1.17L19.88,7A2.09,2.09,0,0,0,20,4Z"
            style={{ fill: "none", strokeWidth: 2 }}
          ></path>
          <path
            id="primary"
            d="M20,4a2.09,2.09,0,0,0-2.95.12L10.17,11,9,15l4-1.17L19.88,7A2.09,2.09,0,0,0,20,4Z"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          ></path>
          <path
            id="primary-2"
            data-name="primary"
            d="M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          ></path>
        </g>
      </svg>
      <h2>Create</h2>
    </div>
  );
}
export default Create;
